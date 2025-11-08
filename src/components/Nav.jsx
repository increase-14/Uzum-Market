import React from "react";
import { NavLink } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

const Nav = () => {
  const { cart } = useAppContext();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-600"
          >
            Uzum Market
          </NavLink>

          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-purple-600 underline underline-offset-4 decoration-2 decoration-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`
              }
            >
              Bosh sahifa
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-purple-600 underline underline-offset-4 decoration-2 decoration-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`
              }
            >
              Savat
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-5 flex items-center justify-center w-6 h-6 bg-purple-500 text-white text-xs font-bold rounded-full animate-pulse">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
