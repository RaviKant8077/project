function DialogBackDrop({ onClose }) {
    return (
      <div 
        className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
    );
  }
  
export default DialogBackDrop;

/*
{isAvailable ? (
                        <p>In Stock</p>
                       // <Status 
                         // text="In Stock"
                          //icon={MdDone}
                          //bg="bg-teal-200"
                          //color="text-teal-900" 
                       // />
                      ) : (
                        <p>Out of Stock</p>
                        //<Status
                         // text="Out of Stock"
                          //icon={MdClose}
                          //bg="bg-rose-200"
                          //color="text-rose-700" 
                        ///>  
                      )}
*/

/*
 <p className={`font-bold ${isAvailable ? 'text-teal-600' : 'text-rose-600'}`}>
                          {isAvailable ? 'In Stock' : 'Out of Stock'}
                      </p>
                      */
