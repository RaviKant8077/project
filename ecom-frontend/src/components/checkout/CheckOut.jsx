import { StepLabel, Stepper } from "@mui/material";
import Step from '@mui/material/Step';
import React, { useEffect, useState } from "react";
import AddressInfo from "./AddressInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../store/actions";
import toast from "react-hot-toast";
import Skeleton from "../shared/Skeleton";
import ErrorPage from "../shared/ErrorPage";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import StripePayment from "./StripePayment";
import UpiPayment from "./UpiPayment";

const CheckOut = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [loadingAddresses, setLoadingAddresses] = useState(false);
    const dispatch = useDispatch();
    const { errorMessage  } = useSelector((state) => state.error || {});
    const { cart, totalPrice  } = useSelector((state) => state.carts || {});
    const { address = [], selectedUserCheckoutAddress = null } = useSelector((state) => state.auth || {});

    const steps = [
        "Address",
        "Payment Method",
        "Order",
        "Payment"
    ];

    const { paymentMethod } = useSelector((state) => state.payment || {});
    console.log("Payment Selected :" , paymentMethod);
    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleNext = () => {
        if (activeStep === 0 && !selectedUserCheckoutAddress) {
            toast.error("Please select checkout address before proceeding.");
            return;
        }
        if (activeStep === 1 && (!selectedUserCheckoutAddress || !paymentMethod)) {
            toast.error("Please select payment method before proceeding.");
            return;
        }
        setActiveStep((prevStep) => prevStep + 1);
    };

    useEffect(() => {
        const fetchAddresses = async () => {
            setLoadingAddresses(true);
            try {
                await dispatch(getUserAddresses());
            } catch (error) {
                toast.error("Failed to load user addresses");
            } finally {
                setLoadingAddresses(false);
            }
        };
        fetchAddresses();
    }, [dispatch]);

    return (
        <div className="py-14 min-h-[calc(100-vh-120px)]">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            { loadingAddresses ? (
                <div className="lg:w-[80%] mx-auto py-5">
                    <Skeleton />
                </div>
            ) :
            
            (<div className="mt-5">
                {activeStep === 0 && <AddressInfo address={address} />}
                {activeStep === 1 && <PaymentMethod />}
                {activeStep === 2 && <OrderSummary 
                                            totalPrice={totalPrice}
                                            address={selectedUserCheckoutAddress}
                                            cart ={cart}
                                            paymentMethod={paymentMethod}
                                            />}
                {activeStep === 3 && (
                    paymentMethod === "STRIPE" ? (
                        <StripePayment />
                    ) : (
                        <UpiPayment />
                    )
                )}

            </div>
        )}

            

            <div
                className="flex justify-between items-center px-8 fixed z-50 h-15 bottom-0 bg-white left-0 w-full py-4 border-t border-slate-200"
                style={{ boxShadow: "0 -2px 4px rgba(100, 100, 100, 0.15)" }}
            >
                <button
                    type="button"
                    className={`flex justify-center items-center px-4 py-2 border rounded-md ${
                        activeStep === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300 text-black hover:bg-gray-100'
                    }`}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </button>

                {activeStep !== steps.length - 1 && (
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={
                            (activeStep === 0 && !selectedUserCheckoutAddress) ||
                            (activeStep === 1 && !paymentMethod)
                        }
                        className={`bg-customBlue font-semibold px-6 h-10 rounded-md text-white ${
                            (activeStep === 0 && !selectedUserCheckoutAddress) ||
                            (activeStep === 1 && !paymentMethod)
                                ? "opacity-60 cursor-not-allowed"
                                : ""
                        }`}
                        >
                        Proceed
                    </button>
                )}
            </div>
            {errorMessage && <ErrorPage message={errorMessage} />}
        </div>
    );
};

export default CheckOut;
