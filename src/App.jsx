import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { Context } from "./context";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </Context.Provider>
  );
};

export default App;