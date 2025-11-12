import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import { Context } from "./context";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/home/detail/:id" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;
