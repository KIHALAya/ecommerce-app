import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
import productModel from '../models/productModel.js'; 

// Load environment variables
dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// function for adding a product
const addProduct = async (req, res) => {
    try{
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesURL = await Promise.all(
            images.map(async (item)=> {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesURL,
            date: Date.now(),
        }

        console.log('productData:', productData);

        const product = new productModel(productData);
        await product.save();

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(image1, image2, image3, image4);
        console.log(imagesURL);
        console.log('req.body:', req.body);
        console.log('req.files:', req.files);


        res.json({success:true, message:"Product added successfully"});


    } catch(error){

        console.log(error);
        res.json({success:false, message:error.message});  

    }

}

// function for getting all products
const getAllProducts = async (req, res) => {
    try{
        const products = await productModel.find({});   
        res.json({success:true, products});

    }catch (error){
        console.log(error);
        res.json({success:false, message:error.message});

    }

}

// function to get single product
const getProduct = async (req, res) => {

    try{
        const {productID} = req.body;
        const product = await productModel.findById(productID);
        res.json({success:true, product});

    } catch (error){
        console.log(error);
        res.json({success:false, message:error.message});   

    }

}

// function for removing a product
const removeProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Product removed successfully"});   

    }catch (error){
        console.log(error);
        res.json({success:false, message: error.message});

    }

}

export { addProduct, getAllProducts, getProduct, removeProduct };
