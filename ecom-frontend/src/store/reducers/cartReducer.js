const loadInitialCart = () => {
    try {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            // Verify cart structure
            if (!Array.isArray(parsedCart)) {
                throw new Error('Invalid cart format');
            }
            
            // Calculate total price and validate items
            const totalPrice = parsedCart.reduce((sum, item) => {
                if (!item.price || !item.quantity) {
                    throw new Error('Invalid cart item');
                }
                return sum + (item.price * item.quantity);
            }, 0);
            
            return {
                cart: parsedCart,
                totalPrice,
                cartId: null
            };
        }
    } catch (error) {
        console.error('Failed to load cart:', error);
        // Clear corrupted data
        localStorage.removeItem('cartItems');
    }
    return {
        cart: [],
        totalPrice: 0,
        cartId: null
    };
};

const initialState = loadInitialCart();

const saveCartToStorage = (cart) => {
    try {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    } catch (error) {
        console.error('Failed to save cart:', error);
    }
};

export const cartReducer = (state = initialState, action) => {
    let newState;
    
    switch (action.type) {
        case 'ADD_CART':
            const productToAdd = action.payload;
            const existingProduct = state.cart.find(
                item => item.productId === productToAdd.productId
            );

            if (existingProduct) {
                newState = {
                    ...state,
                    cart: state.cart.map(item => 
                        item.productId === productToAdd.productId 
                            ? { 
                                ...item, 
                                quantity: (item.quantity || 0) + (productToAdd.quantity || 1)
                            }
                            : item
                    )
                };
            } else {
                newState = {
                    ...state,
                    cart: [...state.cart, { 
                        ...productToAdd, 
                        quantity: productToAdd.quantity || 1 
                    }]
                };
            }
            
            // Recalculate total price
            newState.totalPrice = newState.cart.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
            
            // Persist changes
            saveCartToStorage(newState.cart);
            return newState;

        case 'REMOVE_CART':
            newState = {
                ...state,
                cart: state.cart.filter(
                    item => item.productId !== action.payload.productId
                )
            };
            
            // Recalculate total price
            newState.totalPrice = newState.cart.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
            
            // Persist changes
            saveCartToStorage(newState.cart);
            return newState;

        case "GET_USER_CART_PRODUCTS" :
            newState = {
                ...state,
                cart : action.payload,
                totalPrice : action.totalPrice,
                cartId : action.cartId
            };
            return newState;

        case "CLEAR_CART" :
            return{
                cart : [] ,
                totalPrice : 0,
                cartId : null
            };

        case 'UPDATE_QUANTITY':
            newState = {
                ...state,
                cart: state.cart.map(item => 
                    item.productId === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
            
            // Recalculate total price
            newState.totalPrice = newState.cart.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
            
            // Persist changes
            saveCartToStorage(newState.cart);
            return newState;

        default:
            return state;
    }
};
