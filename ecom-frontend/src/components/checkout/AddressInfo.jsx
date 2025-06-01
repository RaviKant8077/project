import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "../shared/Skeleton";
import { FaAddressBook } from "react-icons/fa";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";
import { deleteUserAddress, getUserAddresses } from "../../store/actions";
import AddressList from "./AddressList";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";

const AddressInfo = ({ address }) => {
    const dispatch = useDispatch();
    const [openAddressModal, setOpenAddressModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [selectedAddress,setSelectedAddress ]  = React.useState("address");
    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

    const addNewAddressHandler = () => {
        setSelectedAddress("");
        setOpenAddressModal(true);
    };
    const deleteAddressHandler = () => {
        dispatch(deleteUserAddress(
            toast,
            selectedAddress?.addressId,
            setOpenDeleteModal
        ))
    };

    const noAddressExists = !address || address.length === 0;
    const { isLoading , btnloader } = useSelector((state) => state.errors) || "";

    return (
        <div className="pt-4">
            {noAddressExists ? (
                <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
                    <FaAddressBook size={50} className="text-gray-500 mb-4" />
                    <h1 className="mb-2 text-slate-900 text-center font-semibold text-2xl ">
                        No Address added yet
                    </h1>
                    <p className="mb-6 text-slate-800 text-center">
                        Please add your address to complete purchase
                    </p>

                    <button
                        onClick={addNewAddressHandler}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded py-2 px-4 transition-all duration-300"
                    >
                        Add Address
                    </button>
                </div>
            ) : (
                <div className="relative p-6 rounded-lg max-w-md mx-auto">
                    <h1 className="text-slate-800 text-center font-bold text-2xl ">
                        Select Address
                    </h1>
                    {isLoading ? (
                        <div className="py-4 px-8">
                            <Skeleton />
                        </div>
                    ) : (
                        <>
                        <div className="space-y-4 pt-6 ">
                            <div className="border p-4 rounded ">
                                <AddressList  
                                    addresses={address}
                                    selectedAdddress={selectedAddress}
                                    setSelectedAddress={setSelectedAddress}
                                    setOpenAddressModal={setOpenAddressModal} 
                                    setOpenDeleteModal = {setOpenDeleteModal}
                                />    
                            </div>
                        </div>

                        { address.length >0 && (
                           <div className="mt-4">
                            <button  
                                onClick={addNewAddressHandler}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded py-2 px-4 transition-all duration-300">
                                Add More
                            </button>
                           </div>
                        )}
                        </>
                    )}
                </div>
            )}

            <AddressInfoModal 
            open={openAddressModal} 
            setOpen={setOpenAddressModal}>
                <AddAddressForm 
                    address={selectedAddress} 
                    setOpenAddressModal={setOpenAddressModal} 
                />
            </AddressInfoModal>
            
            <DeleteModal 
                open = {openDeleteModal}
                loader = {btnloader}
                setOpen={setOpenDeleteModal}
                title = "Delete Address"
                onDeleteHandler = {deleteAddressHandler}

            />
        </div>
    );
};

export default AddressInfo;
