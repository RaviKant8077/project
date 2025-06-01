import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../shared/Skeleton";
import { FaCheckCircle } from "react-icons/fa";
import { stripePaymentConfermation } from "../../store/actions";
import toast from "react-hot-toast";

const PaymentConfirmation = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const [ errorMessage , setErrorMessage ] = useState("");
    const cart = useSelector((state) => state.carts.cart || {});
    const [ loading , setLoading ] = useState(false);

    const paymentIntent = searchParams.get("payment_intent");
    const clientSecret = searchParams.get("payment_intent_client_secret");
    const redirectStatus = searchParams.get("redirect_status");
    const selectedUserCheckoutAddress   = localStorage.getItem("CHECKOUT_ADDRESS") 
            ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS")) : [];

    useEffect(() => {
        console.log("PaymentConfirmation useEffect triggered with params:", {paymentIntent, clientSecret, redirectStatus, cart});
        console.log("selectedUserCheckoutAddress:", selectedUserCheckoutAddress);
        console.log("Cart contents:", cart);
        if (paymentIntent && clientSecret && redirectStatus && cart && cart?.length >0 ) {
            if (!selectedUserCheckoutAddress || !selectedUserCheckoutAddress.addressId) {
                console.error("selectedUserCheckoutAddress or addressId is missing");
                setErrorMessage("Checkout address is missing or invalid.");
                return;
            }
            const sendData = {
                "addressId":selectedUserCheckoutAddress.addressId,
                "pgName":"UPIPayment",
                "pgPaymentId":"pi_eyJzdWIiOiJ1c2VyM",
                "pgStatus":"succeeded",
                "pgResponseMessage":"Payment Successful",
                "cart": cart
            };
            console.log("Dispatching stripePaymentConfermation with sendData:", sendData);
            dispatch(stripePaymentConfermation(sendData,setErrorMessage , setLoading, toast))
        } else {
            console.warn("useEffect condition not met:", {paymentIntent, clientSecret, redirectStatus, cart});
        }
    },[paymentIntent,clientSecret,redirectStatus,cart])


    return (
        <div className="min-h-screen flex items-center justify-center">
            {
               loading ? (
                <div className="max-w-xl mx-auto">
                    <Skeleton />
                </div>
               ) :
               (
                <div className="p-8 rounded-lg shadow-lg text-center max-w-md ">
                    {errorMessage ? (
                        <div className="text-red-500 mb-4">{errorMessage}</div>
                    ) : (
                        <>
                            <div className="text-green-500 mb-4 flex justify-center ">
                                <FaCheckCircle size={64}/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Payment Successful!
                            </h2 >
                            <p className="text-gray-600 mb-5">Thank you for your purchase! Your payment was successful , and we are working on your order .</p>
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/')}
                            >
                                okk
                            </button>
                        </>
                    )}
                </div>
               )
            }
        </div>
    );
};

export default PaymentConfirmation;
