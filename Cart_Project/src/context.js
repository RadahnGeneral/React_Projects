import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function calculateTotalAmount() {
    const total = cart.map((item) => item.amount);
    const totalPhones = total.reduce((a, b) => a + b, 0);
    setTotalAmount(totalPhones);
  }

  function calculateTotalPrice() {
    let amountArray = [];
    let priceArray = [];
    let totalPrice = 0;
    cart.map((item) => {
      amountArray = cart.map((item) => item.amount);
      priceArray = cart.map((item) => item.price);
    });
    for (let i = 0; i < amountArray.length; i++) {
      totalPrice = totalPrice + amountArray[i] * priceArray[i];
    }
    setTotalPrice(totalPrice);
  }

  function clearCart() {
    setCart([]);
    setTotalAmount(0);
  }

  function increaseItem(id) {
    setCart((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.amount = item.amount + 0.5;
        }
        return item;
      });
    });
  }

  function decreaseItem(id) {
    setCart((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.amount = item.amount - 0.5;
          if (item.amount === 0) {
            removeItem(id);
          }
        }
        return item;
      });
    });
  }

  function removeItem(id) {
    const filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        setCart,
        calculateTotalAmount,
        totalAmount,
        increaseItem,
        decreaseItem,
        removeItem,
        calculateTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
