import axios from 'axios';
import api from '../../api/api'; 
import { useRef } from 'react';

// Access the environment variable
const BASE_URL = import.meta.env.VITE_BACK_END_URL;

export const fetchProducts = (queryString) => async (dispatch) => {
  try {
      
    dispatch({type: 'IS_FETCHING'});
    const { data } = await api.get(`${BASE_URL}/api/public/products?${queryString}`); // Use the base URL
    console.log("API Response Data:", data); // Log the API response data for debugging
    const paginationData = {

        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElement: data.totalElements,
        totalPages: data.totalPages,
        lastPage: data.lastPage,
    };

    
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElement: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({type: 'IS_SUCCESS'});
    
  } catch (error) {
    console.log("Error fetching products:", error);
    dispatch({
      type: 'IS_ERROR',
      payload : error?.response?.data?.message || 'Failed fetching products',
    });

  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
      
    dispatch({type: 'CATEGORY_LOADER'});
    const { data } = await api.get(`${BASE_URL}/api/public/categories`); // Use the base UR
    
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElement: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({type: 'CATEGORY_SUCCESS'});
    
  } catch (error) {
    console.log("Error fetching Category:", error);
    dispatch({
        
      type: 'IS_ERROR',
      payload : error?.response?.data?.message || 'Failed fetching category',
    });

  }
};


export const addToCart = (data , qty =1 , toast) => 
  (dispatch , getState) => {
    
    //find the products 
    const {products } = getState().product;
    const getProduct = products.find((item) => item.productId === data.productId);

    //check for quantity
    const isQuantityExist = getProduct ? getProduct.quantity >= qty : true;

    //if in stock -> add to cart 
     if(isQuantityExist ){
      dispatch({ type :"ADD_CART" , payload : { ...data , quantity : qty }});
      toast.success(`${data?.productName} added to cart`);
      localStorage.setItem("cartItems" , JSON.stringify(getState().carts.cart));
     }

     else {
      toast.error("Oops,out of stock")
     }

}

export const updateQuantity = (data, newQuantity) => (dispatch) => {
    dispatch({
        type: "UPDATE_QUANTITY",
        payload: { ...data, quantity: newQuantity },
    });
};

export const increaseQuantity = 
   (data, toast, currentQuantity, setCurrentQuantity) => 
    (dispatch, getState) => {
      const { products } = getState().product;
      const getProduct = products.find(
        (item) => item.productId === data.productId
      );

      const isQuantityExist = getProduct ? getProduct.quantity >= currentQuantity : true;
      if (isQuantityExist) {
          const newQuantity = currentQuantity + 1;
          setCurrentQuantity(newQuantity);
          dispatch(updateQuantity(data, newQuantity));
          const updatedCart = getState().carts.cart;
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          console.log('Cart updated:', updatedCart);
      } else {
          toast.error("Oops, out of stock");
      }

    };


export const decreaseQuantity = 
  (data, toast, currentQuantity, setCurrentQuantity) => (dispatch, getState) => {
      const newQuantity = Math.max(1, currentQuantity - 1);
      setCurrentQuantity(newQuantity);
      dispatch(updateQuantity(data, newQuantity));
      const updatedCart = getState().carts.cart;
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      console.log('Cart updated:', updatedCart);

    };


export const removeFromCart = (data, toast, ) => (dispatch, getState) =>{
  dispatch({type:"REMOVE_CART" , payload: data});
  toast.success(`${data?.productName} removed from cart`);
  const updatedCart = getState().carts.cart;
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  console.log('Cart updated:', updatedCart);

}

export const authenticateSignInUser = ( sendData , toast , reset ,navigate , setLoader ) => async (dispatch) => {
  
  try {
    setLoader(true)
   // const { data } = await axios.post("/auth/signin", sendData);
    const { data } = await api.post(`${BASE_URL}/api/auth/signin`, sendData);
    dispatch({type : "LOGIN_USER", payload: data});
    localStorage.setItem("auth",JSON.stringify(data));
    // Explicitly store token if present
    if(data.token) {
      localStorage.setItem("token", data.token);
    }
    // Store cookie value in localStorage if accessible (not HttpOnly)
    const getCookieValue = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
    const cookieValue = getCookieValue('your_cookie_name'); // Replace 'your_cookie_name' with actual cookie name
    if(cookieValue) {
      localStorage.setItem('cookie', cookieValue);
    }
    reset()
    toast.success("Login Successfully");
    navigate("/");
   } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Failed to login" );
   } finally{
        setLoader(false);
   }
  
}

export const registerNewUser = ( sendData , toast , reset ,navigate , setLoader ) => async (dispatch) => {
  
  try {
    setLoader(true)
    const { data } = await api.post(`${BASE_URL}/api/auth/signup`, sendData);
    reset()
    toast.success(data?.message || "User Register Successfully");
    navigate("/login");
   } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || error?.response?.data?.password ||"Failed to login" );
   } finally{
        setLoader(false);
   }
  
};


export const logOutUser =  (navigate) => (dispatch) => {
    dispatch({type : "LOG_OUT"});
    localStorage.removeItem("auth");
    navigate("/login");
};


export const addUpdateUserAddress = 
 (sendData, toast,  addressId, setOpenAddressModal ) => async (dispatch , getState) => {
  const { user } = getState().auth;
  dispatch({type : "BUTTON_LOADER"});
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };
    if (addressId) {
      await api.put(`${BASE_URL}/api/addresses/${addressId}`, sendData, config);
    } else {
      const { data } = await api.post(`${BASE_URL}/api/addresses`, sendData, config);
    }
   dispatch(getUserAddresses());
    toast.success( "Address saved successfully");
    dispatch({type : "IS_SUCCESS"});
   } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message ||"Failed to login" );
    dispatch({type: "IS_ERROR" , payload : null })
   } finally{
    setOpenAddressModal(false);
   }
};



export const getUserAddresses = () => async (dispatch ,getState ) => {
  try {
      
    dispatch({type: 'IS_FETCHING'});
    const { data } = await api.get(`${BASE_URL}/api/addresses`); // Use the base UR
    console.log("Dispatching USER_ADDRESS with data:", data);
    // Dispatch only the addresses array from data.content
    dispatch({type: 'USER_ADDRESS' , payload : data});
    dispatch({type: 'IS_SUCCESS'});
    
  } catch (error) {
    console.log("Error fetching Category:", error);
    dispatch({
      type: 'IS_ERROR',
      payload : error?.response?.data?.message || "Failed fetching user addresses",
    });

  }
};

export const selectUserCheckoutAddress = (address) => {
  return {
    type : "SELECT_CHECKOUT_ADDRESS",
    payload : address
  }
}