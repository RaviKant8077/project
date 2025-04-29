
const btnStyles = "border-[1.2px] border-slate-800 px-4 py-1 rounded";

const SetQuantity = ({
    quantity,
    cardCunter,
    handleQtyIncrease,
    handleQtyDecrease
}) =>{
    return(
    <div className="flex items-center gap-8">
        {cardCunter ? null : <div className="font-semibold">Quantity</div>}
        <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-xl">
          <button
          disabled = {quantity <= 1 }
          className={ btnStyles }
          onClick={handleQtyDecrease}>
              -
          </button>
          <div className="text-red-500">{ quantity }</div>
          <button
          className={ btnStyles }
          onClick={handleQtyIncrease}>
              +
          </button>
        </div>
    </div>
    )
}

export default SetQuantity;