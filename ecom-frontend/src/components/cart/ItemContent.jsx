import React from "react";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../store/actions";
import toast from "react-hot-toast";
import { formatPrice } from "../../utills/formatPrice";
import truncateText from "../../utills/truncateText";

const ItemContent = ({
       productId,
       productName,
       image,
       description,
       quantity  ,
       price,
       specialPrice = 0,
       discount,
       cartId,
}) => {
      const [ currentQuantity , setCurrentQuantity ] = useState(quantity);
      const dispatch = useDispatch();

      React.useEffect(() => {
          setCurrentQuantity(quantity);
      }, [quantity]);

      const handleQtyIncrease = (cartItems) => {
          dispatch(increaseQuantity(
            cartItems,
            toast,
            currentQuantity,
            setCurrentQuantity));
      }

      const handleQtyDecrease = (cartItems) => {
        dispatch(decreaseQuantity(
          cartItems,
          toast,
          currentQuantity,
          setCurrentQuantity
        ));
      };
     
    const removeItemFromCart = (cartItems) => {
       dispatch(removeFromCart(cartItems,toast));
     };
      
 

    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm-4 px-2 gap-4 items-center border-[1px] border-slate-200">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2 ">
                    <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                        <h1 className="lg:text-[17px] text-sm mt-2 font-semibold text-slate-600">
                             {truncateText(productName) }
                             
                        </h1>
                    </div>                   
                <div className=" justify-between">
                    <img src={image} alt={truncateText(productName)} 
                        className="md:h-36 sm:h-24 h-12 w-full object-cover rounded"> 
                    </img>
                    <div className="flex mt-3 gap-2 mb-3 items-start">
                        <button onClick={() => removeItemFromCart({
                            productId,
                            productName,
                            image,
                            description,
                            quantity ,
                            price,
                            specialPrice ,

                        })}
                             className="flex items-center font-semibold space-x-2 px-2 py-1 text-xs-8 border  border-rose-200 rounded-md hover:bg-red-50 transition-colors duration-200 ">
                             <HiOutlineTrash size={20} className="text-semibold-600" />
                             Remove
                        </button>
                    </div>
                </div>
            </div>
                <div className="justify-self-center text:lg-[17px] text-sm text-slate-600 font-somibold">
                {formatPrice(Number(specialPrice))}
            </div>
            <div className="justify-self-center ">
               <SetQuantity quantity={currentQuantity}
               cardCunter={true}
               handleQtyIncrease={() => {handleQtyIncrease(
                productId,
                productName,
                image,
                description,
                currentQuantity,
                price,
                specialPrice,
                discount,
               )}}
               handleQtyDecrease = {() => {handleQtyDecrease(
                productId,
                productName,
                image,
                description,
                currentQuantity,
                price,
                specialPrice,
                discount,
               )}}/>
            </div>
            <div className="justify-self-center text:lg-[17px] text-sm text-slate-600 font-somibold">
            {formatPrice(Number(specialPrice) * Number(currentQuantity))
                    }
            </div>
        </div>
    )

};

export default ItemContent;
