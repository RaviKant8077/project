import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import InputFiled from "../shared/inputFields";
import { useDispatch } from "react-redux";
import { authenticateSignInUser } from "../../store/actions";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners";


import {  useEffect, useRef } from "react";
const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const safeSetLoader = (value) => {
        if (mountedRef.current) {
            setLoader(value);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onTouched",
    });

    const logInHandler = async (data) => {
        console.log("LogIn click");
        dispatch(authenticateSignInUser(data, toast, reset, navigate, safeSetLoader));
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center border-slate-500" >
            <form onSubmit={handleSubmit(logInHandler)}
               className="sm:w-[450px] w-[320px] shadow-custom py-8 sm:px-8 px-4 rounded ">
                <div className="flex flex-col items-center justify-center space-y-4 ">
                   <AiOutlineLogin className="text-slate-800 " size={40}/> 
                   <h1 
                        className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold " >LogIn here
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
                        label= "Password"
                        required
                        id = "password"
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
                   ) : ( <>LogIn</> )}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">Don't have an account? 
                    <Link to={"/register"}>
                        <span className="px-2 text-semibold underline hover:text-black">
                          SignUp
                        </span>
                    </Link>
                </p>
            </form>
        </div>
    );
};
export default LogIn;
