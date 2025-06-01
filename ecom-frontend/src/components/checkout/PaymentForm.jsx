import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { formatPrice } from "../../utills/formatPrice";
import Skeleton from "../shared/Skeleton";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${import.meta.env.VITE_FRONTEND_URL}/order-confirm`,
        },
        redirect: "always",
      });

      if (error) {
        console.error("Stripe confirmPayment error:", error);
        setErrorMessage(error.message || "Payment failed.");
      } else {
        navigate("/order-confirm");
      }
    } catch (err) {
      console.error("Payment confirmation Failed ::: ", err);
      setErrorMessage("Payment confirmation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <PaymentElement options={{ layout: "tabs" }} />
{loading ? (
  <Skeleton />
) : (
  <>
    {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
    <button
      type="submit"
      className="text-white font-bold bg-black px-5 py-[10px] mt-2 rounded-md w-full disabled:opacity-50 disabled:animate-pulse"
      disabled={!stripe || !elements || loading}
    >
      {!loading ? `Pay ${formatPrice(Number(totalPrice))}` : "Processing..."}
    </button>
  </>
)}

    </form>
  );
};

export default PaymentForm;
