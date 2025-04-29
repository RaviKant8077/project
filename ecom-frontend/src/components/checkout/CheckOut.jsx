import { StepLabel, Stepper } from "@mui/material";
import Step from '@mui/material/Step';
import React, { useEffect, useState } from "react";
import AddressInfo from "./AddressInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../store/actions";

const CheckOut = () => {
    
    const [activeStep , setActiveStep ] = useState(0);  
    const dispatch  = useDispatch();
    const { address } = useSelector(
        (state) => state.auth
    );
    const steps = [
        "Address",
        "Payment Method" ,
        "Order",
        "Payment"
    ];

    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

    return (
        
        <div className="py-14 min-h-[calc(100-vh-120px)] ">
            <Stepper activeStep={activeStep} alternativeLabel>
               {
                steps.map((label, index) => (
                         <Step key= {index}>
                              <StepLabel >{label}</StepLabel>
                         </Step>
                ))}
            </Stepper>
            <div className="mt-5">
              {activeStep === 0 && <AddressInfo address={address} />}
            </div>
        </div>
    );
};
export default CheckOut;
