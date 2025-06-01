import React from "react";
import ItemContent from "../cart/ItemContent";
import { formatPrice, formatPriceCalculation } from "../../utills/formatPrice";
import api from '../../api/api'; 
import { useSelector } from "react-redux";


const BASE_URL = import.meta.env.VITE_BACK_END_URL;
const OrderSummary = ({  totalPrice: propTotalPrice, address, paymentMethod }) => {
   const { cart, totalPrice } = useSelector((state) => state.carts || { cart: [], totalPrice: 0 });


   console.log("cart details", cart);
   console.log("Total Price from state:", totalPrice);

   const displayTotalPrice = totalPrice !== undefined ? totalPrice : propTotalPrice;

   return(

      <div className="container mx-auto px-4">
         <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 pr-4">
               <div className="space-y-4">
                  <div className="p-4 border rounded-lg shadow-sm mb-6"> 
                        <h2 className="text-2xl font-semibold mb-2">Billing Address</h2>
                        <p>
                           <strong>Building Name: </strong>
                           {address?.buildingName}
                        </p> 
                        <p>
                           <strong>Street: </strong>
                           {address?.street}                               
                        </p> 
                        <p>
                           <strong>State: </strong>
                           {address?.state}                               
                        </p> 
                        <p>
                           <strong>Country: </strong>
                           {address?.country}                              
                        </p>  
                        <p>
                           <strong>Pincode: </strong>
                           {address?.pincode}                               
                        </p>                                             
                  </div>
                  
                  <div className="p-4 border rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">
                           Payment Method
                        </h2>
                        <p>
                           <strong>Method:  </strong>
                           {paymentMethod}
                        </p>
                  </div>

                  <div className="p-4 rounded-lg shadow-sm">
                     <h2 className="text-2xl font-semibold mb-2">Ordered Items</h2>
                     <div className="space-y-2 ">
                          { cart?.map((item) => {
                            console.log("productImage:", item?.productImage, "image:", item?.image);
                            return (
                              <div key={item?.productId} className="flex items-center">
                                <img 
                                  src={
                                    item?.image
                                      ? (item.image.startsWith('http') || item.image.startsWith('data:')
                                        ? item.image
                                        : `${BASE_URL}/images/${item.image}`)
                                      : (item?.productImage
                                        ? (item.productImage.startsWith('http') || item.productImage.startsWith('data:')
                                          ? item.productImage
                                          : `${BASE_URL}/images/${item.productImage}`)
                                        : (() => { console.warn(`Missing image and productImage for productId: ${item.productId}`); return ''; })())
                                  }
                                  alt="Product"
                                  className="w-12 h-12 rounded"
                                />
                                <div className="text-gray-500">
                                  <p>{item?.productName}</p>
                                  <p>
                                    {item?.quantity} × ₹{item?.specialPrice} = ₹{formatPriceCalculation(item?.quantity , item?.specialPrice)}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
               <div className="border rounded-lg shadow-sm p-4 space-y-4">
                  <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
                  <div className="space-y-2">
                     <div className="flex justify-between gap-4">
                        <span>Products : </span>
                        <span>{formatPrice(Number(displayTotalPrice) || 0)}</span>
                     </div>
                     <div className="flex justify-between gap-4">
                        <span>Tax(0%) : </span>
                        <span>{formatPrice(0)}</span>
                     </div>
                     <div className="flex justify-between font-semibold gap-4">
                        <span>Subtotal : </span>
                        <span>{formatPrice(Number(displayTotalPrice) || 0)}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default OrderSummary;
