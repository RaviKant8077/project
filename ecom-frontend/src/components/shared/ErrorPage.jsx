
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
 
const ErrorPage = ( {message} ) => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-14"> 
            <FaExclamationTriangle size={50} className="text-6xl text-red-500 mb-4"/>
            <p className="text-gray-600 mb-6 text-2xl text-center ">
                {message  ? message : "An unexpected error has occured."}
            </p>
        </div>
        );
};

export default ErrorPage;