import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import InputFiled from "../shared/inputFields";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addUpdateUserAddress } from "../../store/actions";
import toast from "react-hot-toast";


const AddAddressForm = ( {address,setOpenAddressModal}) => {
  
    const dispatch = useDispatch();
    const { btnLoader } = useSelector((state) => state.errors || {} );
    const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm({
            mode: "onTouched",
    });
    useEffect(() => {
        if (address) {
          reset({
            buildingName: address.buildingName || "",
            City: address.city || "",
            Country: address.country || "",
            Pincode: address.pincode || "",
            State: address.state || "",
            Street: address.street || "",
          });
        } else {
          reset({
            buildingName: "",
            City: "",
            Country: "",
            Pincode: "",
            State: "",
            Street: "",
          });
        }
      }, [address, reset]);

    const onSaveAddressHandler = async (data) => {
        // Map form data keys to backend expected keys
        const payload = {
            buildingName: data.buildingName || data.BuildingName || data.buildingname,
            city: data.City || data.city,
            country: data.Country || data.country,
            pincode: data.Pincode || data.pincode,
            state: data.State || data.state,
            street: data.Street || data.street,
            addressId: address?.addressId || null,
        };
        dispatch(addUpdateUserAddress(
            
            payload,
            toast,
            address?.addressId,
            setOpenAddressModal
        ));
    };

    return (
        <div className="" >
            <form onSubmit={handleSubmit(onSaveAddressHandler)}
               className="">
                <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4 ">
                   <FaAddressCard className="mr-2 text-2xl " size={40}/> 
                   { !address?.addressId ?
                     "Add Address" : "Update Address"
                     
                   }                   
                </div>
                <div className="flex flex-col gap-4 ">
                    <InputFiled 
                        label= "Building Name"
                        required
                        id = "buildingName"
                        type = "text"
                        message={"*Building Name is required"}
                        placeholder={"Enter Building Name"}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "City"
                        required
                        id = "City"
                        type = "text"
                        message={"*City is required"}
                        placeholder={"Enter City."}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "Country"
                        required
                        id = "Country"
                        type = "text"
                        message={"*Country is required"}
                        placeholder={"Enter Country."}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "Pincode"
                        required
                        id = "Pincode"
                        type = "text"
                        message={"*Pincode is required"}
                        placeholder={"Enter Pincode."}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "State"
                        required
                        id = "State"
                        type = "text"
                        message={"*State is required"}
                        placeholder={"Enter State."}
                        register = {register}
                        errors = {errors}
                    />
                    <InputFiled 
                        label= "Street"
                        required
                        id = "Street"
                        type = "text"
                        message={"*Street is required"}
                        placeholder={"Enter Street."}
                        register = {register}
                        errors = {errors}
                    />

                </div>
                <button 
                    disabled = {btnLoader}
                    className= " text-white bg-customBlue px-4 py-2 rounded-md mt-4"
                    type= "submit">
                    {  btnLoader ? (
                      <>
                        <Spinners /> Loading...
                      </>
                   ) : ( <>Save</> )}
                </button>

                {/* <p className="text-center text-sm text-slate-700 mt-6">Don't have an account? 
                    <Link to={"/register"}>
                        <span className="px-2 text-semibold underline hover:text-black">
                          SignUp
                        </span>
                    </Link>
                </p> */}
            </form>
        </div>
    );
};

export default AddAddressForm;