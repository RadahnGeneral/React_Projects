import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

function App() {
  const { calculateTotalPrice, calculateTotalAmount, cart, loading } =
    useGlobalContext();

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  useEffect(() => {
    calculateTotalAmount();
  }, [cart]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
