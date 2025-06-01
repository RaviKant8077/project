import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { createStripePaymentSecret } from "../../store/actions";
import {  useState } from "react";
import { Skeleton } from "@mui/material";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const StripePayment = () => {

    const dispatch = useDispatch();
    const { clientSecret } = useSelector((state) => state.auth);
    const { totalPrice }  = useSelector((state) => state.carts);
    const { isLoading , errorMessage } = useSelector((state) => state.error );
    const [loading, setLoading] = useState(false);

    console.log("StripePayment clientSecret:", clientSecret);
    console.log("StripePayment stripePromise:", stripePromise);
    console.log("StripePayment component rendered");

    useEffect(() => {
        const fetchClientSecret = async () => {
            setLoading(true);
            await dispatch(createStripePaymentSecret(totalPrice));
            setLoading(false);
        };
        if (!clientSecret) {
            fetchClientSecret();
        }
    }, [clientSecret, totalPrice])

    if (loading && !clientSecret) {
        return <div>Loading payment details...</div>;
    }

    if (errorMessage) {
        return <div className="text-red-500 text-center">{errorMessage}</div>;
    }

    return (
        <>
           { clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm 
                   // clientSecret={clientSecret}
                    totalPrice={totalPrice} 
                    />
            </Elements>
        //    ) : (
        //     <div>Loading payment details...</div>
           )}
        </>
    );
};

export default StripePayment;