import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../api/productReducer";

const AppContext = createContext();

const API = "https://lifestyle-mock-server-api.onrender.com/men";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // MEN API DATA

  const getProducts = async (url) => {
    dispatch({ type: "SET _MEN_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_MEN_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "MEN_API_ERROR" });
    }
  };

  // SINGLE PRODUCT DATA

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };