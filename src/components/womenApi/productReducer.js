const ProductReducer = (state, action) => {
    
    if(action.type === "WOMEN_API_LOADING"){
        return{
            ...state,
            isLoading: true,
        }
    }
    
    
    if(action.type === "WOMEN_API_DATA"){
        return{
            ...state,
            isLoading: false,            
            womenProducts: action.payload,
        }
    }
    
    
    if(action.type === "WOMEN_API_ERROR"){
        return{
            ...state,
            isLoading: false,            
            isError: true,
        }
    }

    if(action.type === "SINGLE_WOMEN_LOADING"){
        return{
            ...state,
            isSingleLoading: true,
        }
    }
    
    if(action.type === "SINGLE_WOMEN_DATA"){
        return{
            ...state,
            isSingleLoading: false,            
            singleWomenProduct: action.payload,
        }
    }
    
    if(action.type === "SINGLE_WOMEN_ERROR"){
        return{
            ...state,
            isSingleLoading: false,            
            isError: true,
        }
    }
    
    return state;
}

export default ProductReducer;