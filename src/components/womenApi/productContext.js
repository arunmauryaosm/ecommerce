import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './productReducer';

const AppContext = createContext();

const API = "https://lifestyle-mock-server-api.onrender.com/women";

const initialState = {
    isLoading: false,
    isError: false,
    womenProducts: [],
    isSingleLoading: false,
    singleWomenProduct: {},

}

const AppProviderWomen = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // api for products
    const getWomenProducts = async (url) => {
            dispatch({type: "WOMEN_API_LOADING"})
        try {
            const response = await axios.get(url);
            const womenProducts = await response.data;
            dispatch({type: "WOMEN_API_DATA", payload: womenProducts});
        } catch (error) {
            dispatch({type: "WOMEN_API_ERROR"})
        }
    }

    console.log(getWomenProducts);


    // api for single product
    const getWomenSingleProduct = async (url) => {
            dispatch({type: "SINGLE_WOMEN_LOADING"})
        try {
            const response = await axios.get(url);
            const singleWomenProduct = await response.data;
            dispatch({type: "SINGLE_WOMEN_DATA", payload : singleWomenProduct})
        } catch (error) {
            dispatch({type : "SINGLE_WOMEN_ERROR"})
        }
    }


    useEffect(() => {
        getWomenProducts(API);
    }, []);


    return<AppContext.Provider value={{...state, getWomenSingleProduct}}>
        {children}
    </AppContext.Provider>
}


// custom hooks

const useProductContextWomen = () => {
    return useContext(AppContext)
}

export {AppContext, AppProviderWomen, useProductContextWomen};

