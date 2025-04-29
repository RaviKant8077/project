import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartEmpty = () => {

    return (
        <div className="min-h-[800px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center ">
                <MdShoppingCart size={80} className="mb-4 text-slate-500 " />
                <div className=" text-slate-700 font-bold text-3xl"> Oop's ! Your cart is empty</div>
                <div className=" text-slate-500 mt-2 text-xl"> Add some-thing to get started </div>
            </div>
            <div className="mt-6">
                <Link  to={"/ "}
                className="flex gap-2 text-blue-500 items-center hover:text-blue-700 transition duration-300"> 
                <MdArrowBack size={30}/>
                <span className="font-medium">Start shopping here</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;
