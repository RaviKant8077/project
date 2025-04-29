import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";

const safeParse = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return defaultValue;
  }
};

const user = safeParse("auth", null);
const address = safeParse("addresses", []);
const cartItems = safeParse("cartItems", []);
const products = safeParse("products", []);
const categories = safeParse("categories", []);
const pagination = safeParse("pagination", {});
const errorState = safeParse("error", {
  isLoading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryError: null,
  btnLoader: false,
});

const initialState = { 
    auth: { user, address },
    carts: { cart: cartItems },
    product: { products, categories, pagination },
    error: errorState,
};

const loggerMiddleware = storeAPI => next => action => {
    console.log('Dispatching action:', action);
    let result = next(action);
    console.log('Next state:', storeAPI.getState());
    return result;
};

export const store = configureStore({
    reducer: {
        product: productReducer,
        error: errorReducer,
        carts: cartReducer,
        auth: authReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
    devTools: true,
});

// Subscribe to store changes and save to localStorage with logging
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem("auth", JSON.stringify(state.auth.user));
    localStorage.setItem("addresses", JSON.stringify(state.auth.address ?? []));
    localStorage.setItem("cartItems", JSON.stringify(state.carts.cart ?? []));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
});

export default store;
