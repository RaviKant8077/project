import React from "react";
import { FaBuilding, FaCheckCircle, FaCircle, FaCity, FaEdit, FaStreetView, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdPinDrop, MdPublic } from "react-icons/md";
import { selectUserCheckoutAddress } from "../../store/actions/index.js";
import truncateText from "../../utills/truncateText.jsx";

const AddressList = ({ addresses,selectedAddress,  setSelectedAddress, setOpenAddressModal , setOpenDeleteModal }) => {
    const dispatch = useDispatch();
    const selectedUserCheckoutAddress = useSelector((state) => state.auth.selectedUserCheckoutAddress) ;


    if (!Array.isArray(addresses) || addresses.length === 0) {
        return <p>No addresses found.</p>;
    }

    const onEditButtonHandler = ( e, addresses ) => {
        e.stopPropagation();
        if(typeof setSelectedAddress === "function") {
         setSelectedAddress(addresses);}
         if(typeof setOpenAddressModal === "function"){
         setOpenAddressModal(true);}
    }
    const onDeleteButtonHandler = (addresses) => {
         setSelectedAddress(addresses);
         setOpenDeleteModal(true);
    }

    const handleAddressSelection = (addresses) => {

        dispatch(selectUserCheckoutAddress(addresses));
        // Persist selected address to localStorage
        localStorage.setItem('selectedUserCheckoutAddress', JSON.stringify(addresses));

        if(typeof setSelectedAddress === "function"){
        setSelectedAddress(addresses);}
        if(typeof setOpenAddressModal === "function"){
            setOpenAddressModal(false);
        }
        // if (setOpenAddressModal) {
        //     setOpenAddressModal(true);
        // }
    };

    return (
        <div className="space-y-4 truncate">
            {addresses.map((address, index) => (
                <div
                    key={address.addressId || index}
                    onClick={() => handleAddressSelection(address)}
                    className={`mb-2 p-4 rounded-md cursor-pointer relative ${
                        selectedUserCheckoutAddress?.addressId === address.addressId
                            ? "bg-green-200"
                            : "bg-slate-200 "
                    }`}
                >
                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center ">
                                <FaBuilding size={15} className="mr-2 text-gray-600 font-semibold" />
                                <p className="font-semibold text-xl truncate">{truncateText(address.buildingName,20) }</p>
                                { selectedUserCheckoutAddress?.addressId === address.addressId && (
                                    <FaCheckCircle className="text-green-500 ml-2" />
                                )}
                            </div>
                            <div className="flex items-center truncate">
                                <FaStreetView size={15} className="mr-2 text-gray-600 font-semibold" />
                                <p>{address.street }</p>
                                
                            </div>
                            <div className="flex items-center truncate">
                                <FaCity size={15} className="mr-2 text-gray-600 font-semibold" />
                                <p>{address.city} , {address.state}</p>
                            </div>
                            <div className="flex items-center truncate">
                                <MdPinDrop size={15} className="mr-2 text-gray-600 font-semibold" />
                                <p>{address.pincode}</p>
                            </div>
                            <div className="flex items-center truncate">
                                <MdPublic size={15} className="mr-2 text-gray-600 font-semibold" />
                                <p>{address.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute top-8 right-2">
                        <button onClick={(e) => onEditButtonHandler(e,address)}>
                            <FaEdit size={18} className="text-teal-700" />
                        </button>
                        <button onClick={() => onDeleteButtonHandler()}>
                            <FaTrash size={18} className="text-rose-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddressList;
