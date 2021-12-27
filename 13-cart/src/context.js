import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const AppProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispath({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispath({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispath({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispath({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispath({ type: "LOADING" });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispath({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispath({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
