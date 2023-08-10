const cartReducer = (state, action) => {
    
    if(action.type === "ADD_TO_CART"){
        let {id, price, singleProduct, title, img1} = action.payload;

        console.log(singleProduct);

        // adding item to cart and displaying

        let cartProduct;

        cartProduct = {
            id,
            title,
            img1,
            price,
        };

        return{
            ...state,
            cart:[...state.cart, cartProduct],
        };

    }
    
    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter((data) => data.id !== action.payload 
        );
        return {
            ...state,
            cart : updatedCart,
        }
    }

    if(action.type === "CART_TOTAL_AMOUNT"){
        let total_price = state.cart.reduce((initialVal, curElem) => {
            let {price, amount} = curElem;

            initialVal = initialVal + (price*amount)
            
            return initialVal;
        }, 0);

        return{
            ...state,
            total_price: total_price,
        }
    }


    return state;
}

export default cartReducer
