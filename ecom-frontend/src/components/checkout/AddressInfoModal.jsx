import {  Dialog  } from "@headlessui/react";
import React from "react";
import { FaTimes } from "react-icons/fa";


const AddressInfoModal = ({ open , setOpen , children }) => {
    return (
       
       <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            {/* Replace DialogBackDrop with a regular div */}
            <div className="fixed inset-0 bg-black/30 bg-gray-500 bg-opacity-75 transition " aria-hidden="true" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                {/* Use Dialog.Panel, Dialog.Title inside */}
                <Dialog.Panel className="relative w-full max-w-md mx-auto transform overflow-hidden bg-white rounded-lg shadow-xl transition-all">
                <div className="px-6 py-6"> 
                    {children}
                </div>
                
                <div className="flex gap-4 justify-end absolute right-4 top-2">
                   <button onClick = {() => setOpen(false)} type="button">
                      <FaTimes className="text-slate-900 " size={25}/>
                   </button>
                </div>
                </Dialog.Panel>
            </div>
        </Dialog>   
    );
};

export default AddressInfoModal;