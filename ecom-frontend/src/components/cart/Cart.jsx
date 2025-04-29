import { FaShoppingCart } from "react-icons/fa";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ItemContent from "./ItemContent";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "../../utills/formatPrice";

const Cart = () => {
    
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    const newCart = { ...cart };
    
    newCart.totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity) , 0
    );

    if( !cart || cart.length ===0 ) return <CartEmpty />;

    return (
        <div className="lg:px-4 sm:px-8 px-4 py-10"> 
            <div className="flex flex-col items-center mb-12 gap-3 ">
                <h1 className="text-4xl text-gray-900 font-bold flex items-center gap-3">
                    <FaShoppingCart size={30} className="text-gray-700" />
                    Your Cart
                </h1>      
                <p className="text-3xl text-gray-600 font-semibold gap-3">Find your all saved items here</p>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-4 pb-2 gap-4 font-semibold text-2xl items-center mx-10 my-5">
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg:ps-4">
                    Product
                </div>
                <div className="justify-self-center text-lg text-slate-800 ">
                    Price
                </div>
                <div className="justify-self-center text-lg text-slate-800 ">
                    Quantity
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Total Price
                </div>
            </div>

            <div>
                {cart && cart.length > 0 && 
                 cart.map(( item , i ) => <ItemContent key={i} {...item} />)}
            </div>

            <div className="border-t-[1.5px] border-slate-400 py-4 flex sm:flex-row flex-col sm:justify-between gap-4 px-2 sm:px-0">
    

    <div className="flex-1"></div>

    <div className="flex flex-col text-sm gap-1 sm:w-[400px] w-full">
        
        <div className="flex justify-between w-full md:text-lg text-sm font-semibold gap-3">
            <span>Subtotal</span>
            <span>{formatPrice(newCart?.totalPrice)}</span>
        </div>

        <p className="text-slate-500 text-base">
            Taxes and shipping calculated at checkout
        </p>

        <Link to="/checkout" className="w-full flex justify-end">
            <button 
                onClick={() => {}}
                className="font-semibold w-full sm:max-w-md py-2 px-4 rounded-sm bg-customBlue text-white flex items-center justify-center gap-2 hover:text-gray-300 transition duration-300"
            >
                <MdShoppingCart className="text-2xl" />   
                Checkout
            </button>
        </Link>

        <Link to="/products" className="flex gap-2 items-center text-xl text-slate-500 mt-2">
            <MdArrowBack />
            <span>Continue Shopping</span>
        </Link>

    </div>                 
</div>

        </div>
    )
}
export default Cart;