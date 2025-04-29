import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputFiled from "../shared/inputFields";
import { registerNewUser } from "../../store/actions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners";


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        console.log("Register click");
        dispatch(registerNewUser(data , toast , reset , navigate ,setLoader));  
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center border-slate-500" >
            <form onSubmit={handleSubmit(registerHandler)}
               className="sm:w-[450px] w-[320px] shadow-custom py-8 sm:px-8 px-4 rounded ">
                <div className="flex flex-col items-center justify-center space-y-4 ">
                   <FaUserPlus className="text-slate-800 " size={40}/> 
                   <h1 
                        className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold " >Register here
                   </h1>                   
                </div>
                <h1 className="mt-2 mb-5 text-black"></h1>
                <div className="flex flex-col gap-3 ">
                    <InputFiled 
                        label= "UserName"
                        required
                        id = "username"
                        type = "text"
                        message={"*User name is required"}
                        placeholder={"Enter your username here "}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "Email"
                        required
                        id = "email"
                        type = "email"
                        message={"*Email is required"}
                        placeholder={"Enter your email here "}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "Password"
                        required
                        id = "password"
                        min= {6}
                        type = "password"
                        message={"*Password is required"}
                        placeholder={"Enter your password here "}
                        register = {register}
                        errors = {errors}
                    />
                </div>
                <button 
               disabled = {loader}
                className= " bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white py-2 w-full hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                type= "submit">
                   {loader ? (
                      <>
                         <Spinners /> Loading...
                      </>
                   ) : ( <>Register</> )}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">Already have an account? 
                    <Link to={"/login"}>
                        <span className="px-2 text-semibold underline hover:text-black">
                          LogIn
                        </span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
