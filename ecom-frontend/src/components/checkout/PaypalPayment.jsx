import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const PaypalPayment = () => {
    return (
        <div>
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Sorry , but UPI payment is not supported in this browser.
            </Alert>
        </div>
    );
};

export default PaypalPayment