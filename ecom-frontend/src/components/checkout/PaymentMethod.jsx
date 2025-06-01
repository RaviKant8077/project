import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, SliderValueLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod, createUserCart } from "../../store/actions";




const PaymentMethod = (address) => {

    const  dispatch = useDispatch();
    const { paymentMethod } = useSelector((state) => state.payment);
    const { cart , cartId } = useSelector((state) => state.carts);
    const { isLoading , errorMessage } = useSelector((state) => state.error);

    const paymentMethodhandler  = (method) =>{
        dispatch(addPaymentMethod(method))
    }

    useEffect(() => {
        if(cart.length && !cartId  ){
             const sendCartItems = cart.map((item) => {
                return {
                    productId : item.productId,
                    quantity : item.quantity ,
                };
             });
             dispatch(createUserCart(sendCartItems));
        }
    },[ dispatch , cartId ])
    
    return (
        <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border">
            <h1 className="text-2xl font-semibold mb-4">Select Payment Method</h1>
            <FormControl>
                    <RadioGroup
                        aria-labelledby="payment method"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => paymentMethodhandler(e.target.value)}
                    >
                        <FormControlLabel 
                            value="STRIPE" 
                            control={<Radio color="primary"/>} 
                            label="Stripe"
                            className="text-gray-700" />

                        {/* <FormControlLabel 
                            value="PAYPAL" 
                            control={<Radio color="primary"/>} 
                            label="Paypal" 
                            className="text-gray-700" /> */}

                        <FormControlLabel 
                            value="UPI PAYMENT" 
                            control={<Radio color="primary"/>} 
                            label="Upi Payment"
                            className="text-gray-700" />

                    </RadioGroup>
                </FormControl>
        </div>
    );
};

export default PaymentMethod;
