import { Dialog } from "@headlessui/react";
import DialogBackdrop from "./DialogBackdrop";
import { Divider } from "@mui/material";
import Status from './Status';
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const { id, productName, image, description, quantity, price, discount, specialPrice } = product || {};

  function handleClickOpen() {
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <DialogBackdrop onClose={close} />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel 
             className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-w-[620px] w-full p-6">
              {image && ( 
                <div className="flex justify-center aspect-[3/2] ">
                   <img 
                     src={image} 
                     alt={productName}>
                   </img>
                </div>
              )}
              <div className="px-6 pt-10 pb-2">
                  <Dialog.Title as="h3" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4">
                     {productName}
                  </Dialog.Title>
                  
                  <div className="space-y-2 text-gray-700 pb-4">
                    <div className="items-center justify-center mt-4 gap-2">
                      {specialPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 line-through">
                            ${Number(price).toFixed(2)}
                          </span>
                          <span className="text-xl font-semibold text-slate-700 ml-2">
                            ${Number(specialPrice).toFixed(2)}
                          </span>
                        </div>
                      ):(
                        <span className="text-gray-400 font-bold">
                          { }
                          ${Number(price).toFixed(2)}
                        </span>
                      )}
                     {isAvailable ? (
                           //<p>In Stock</p>
                        <Status 
                            text="In Stock"
                            icon={MdDone}
                            bg="bg-teal-200"
                            color="text-teal-900" 
                        />
                       ) : (
                           // <p>Out of Stock</p>
                        <Status
                            text="Out of Stock"
                            icon={MdClose}
                            bg="bg-rose-200"
                            color="text-rose-700" 
                        />  
                     )}
                      </div>
                     
                     <Divider />
                     <p>{description}</p>
                  </div>
                  <div className="px-6 py-4 flex  justify-end gap-4">
                <button onClick={() => setOpen(false)}
                  type="button" 
                  className="px-4 py-2  text-sm font-semibold text-slate-700 hover:text-slate-800 hover:boader-slate-800 rounded-md ">
                  Close
                </button>
              </div>
              </div>
              
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProductViewModal;
