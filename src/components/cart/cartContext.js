import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './cartReducer';

const CartContext = createContext();

// stored cart data desplaying

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartData");
    if(localCartData === []){
        return []
    }else{
        return JSON.parse(localCartData)
    }
}
 
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: 1000,
};

const CartProvider = ({children}) => {

    const [state, dispatch]  = useReducer(reducer, initialState)
    
    // add to cart functionality
    const addToCart = (id,  title, img1, price,   singleProduct) => {
        dispatch({type: "ADD_TO_CART", payload: {id,  title, img1, price,   singleProduct}})
    };


    // remove item from cart
    const removeItem = (id) => {
        dispatch({type : "REMOVE_ITEM", payload: id})
    }

    // add cart data to local storage 

    useEffect(() => {

        dispatch({type: "CART_TOTAL_AMOUNT"});
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    }, [state.cart]);



    return <CartContext.Provider value={{...state, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
};

const useCartContext =() => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext}