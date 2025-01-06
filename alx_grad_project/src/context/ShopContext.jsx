import { createContext, useEffect, useState } from "react";
//import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import Cart from "../pages/Cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'MAD';
    const delivery_fee = 20;
    const backendURL = import.meta.env.VITE_BACKEND_URL;   
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);  
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts]  = useState([]);
    const navigate = useNavigate();


    const addToCart = async(itemId,size)=>{

        if (!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if ( cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};  
            cartData[itemId][size] = 1;
        }   
        setCartItems(cartData);
        
    }

    const getCartCount = ()=>{
        let totalCount = 0;

        for (const items in cartItems){
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch (error){

                }

            } 
        }
        return totalCount;
    }   

    const updateQuantity = async(itemId,size,quantity)=> {
        let cartData = structuredClone(cartItems);;

        cartData[itemId][size] = quantity;

        setCartItems(cartData); 
    }

    const getCartAmount = () => {
        let totalAmount  = 0;

        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += cartItems[items][item] * itemInfo.price;
                    }
                }catch (error){
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async() => {    
        try{

            const response = await axios.get(backendURL +"/api/product/getAllProducts"); 
            if(response.data.success){
                setProducts(response.data.products);
            }
            else{
                toast.error(response.data.error);
            }

        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])



    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendURL

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;