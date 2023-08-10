const ProductReducer = (state, action) => {
    if (action.type === "SET_MEN_LOADING") {
      return {
        ...state,
        isLoading: true,
      };
    }
  
    if (action.type === "SET_MEN_API_DATA") {
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    }
  
    if (action.type === "MEN_API_ERROR") {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
  
    if (action.type === "SET_SINGLE_LOADING") {
      return {
        ...state,
        isSingleLoading: true,
      };
    }
  
    if (action.type === "SET_SINGLE_PRODUCT") {
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    }
  
    if (action.type === "SET_SINGLE_ERROR") {
      return {
        ...state,
       isSingleLoading: false,
       isError: true,
      };
    }
  

        return state;
    
  };
  
  export default ProductReducer;