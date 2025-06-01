import { selectUserCheckoutAddress } from "../actions";

const initialState = {
    user: null,
    address : [],
    clientSecret : null,
    selectedUserCheckoutAddress : null,
}

export const authReducer = (state = initialState, action) => {
    console.log("authReducer action:", action.type, "payload:", action.payload);
    switch (action.type) {
        case "LOGIN_USER":
            const newStateLogin = {...state, user: action.payload};
            return newStateLogin;

        case "USER_ADDRESS":
            const newStateAddress = {...state, address: action.payload};
            return newStateAddress;
        case "SELECT_CHECKOUT_ADDRESS":
             return {
                ...state, 
                selectedUserCheckoutAddress: action.payload};
        case "REMOVE_CHECKOUT_ADDRESS":
            return{
                ...state,
                selectedUserCheckoutAddress : null
            };
        case "CLIENT_SECRET":
            return{
                ...state,
                clientSecret : action.payload
            };

        case "REMOVE_CLIENT_SECRET_ADDRESS":
            return{
                ...state,
                clientSecret : null ,
                selectedUserCheckoutAddress : null
            };

            


        case "LOG_OUT":
            const newStateLogout = {...state,
                user: null,
                address : [],    
            };

            return newStateLogout;

        default:
            return state;
    }

}
