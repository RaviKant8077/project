import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const UpiPayment = () => {
    return (
        <div className="h-96 flex items-center justify-center ">
            <Alert severity="warning" variant="filled" style={{ maxWidth: "400px" }}>
                <AlertTitle>UPI Payment unavailable .</AlertTitle>
                Upi Payment method is unavailable. So please use another method option available here. We will implement it soon.
            </Alert>
      </div>
    );
};

export default UpiPayment;
