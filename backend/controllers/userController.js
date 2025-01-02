import userModel from '../models/userModel.js';
import validator from 'validator'; 
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


const loginUser  = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false, message:"User not found"});
        }

        const passwordMatch = await bycrypt.compare(password, user.password); 
        
        if(passwordMatch){
            const token = createToken(user._id);
            res.json({success:true, token});
        }
        else{
            res.json({success:false, message:"Invalid credentials"});
        }

    }catch (error){

        console.log(error);
        res.json({success:false, message:error.message});

    }
}


// Route for user register
const registerUser = async (req,res) => {
    try{

        const {name,email,password} = req.body;

        // check if user already exists
        const userExists = await userModel.findOne({email:email});
        if(userExists){
            return res.json({success:false, message:"User already exists"});
        }

        // Validate the data
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Invalid email"});
        }
        
        if(password.length < 6){
            return res.json({success:false, message:"Password must be atleast 6 characters"});
        }

        // Hash the password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success:true, token});


    }catch (error){
        console.log(error);
        res.json({success:false, message:error.message});

    }

}


// Route for admin login
const adminLogin = async (req,res) => {
    try{
        const  {email, password} = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true, token});

        } else {
            res.json({success:false, message:"Invalid credentials"});
        }

    }catch (error){
        console.log(error);
        res.json({success:false, message:error.message  });

    }

}

export { loginUser, registerUser, adminLogin };