import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const currLang = localStorage.getItem("lang");
    i18n.changeLanguage(currLang);
  }, [i18n]);
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
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
              {t("nav.t1")}
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
              {t("nav.t2")}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-5 flex items-center justify-center w-6 h-6 bg-purple-500 text-white text-xs font-bold rounded-full animate-pulse">
                  {cart.length}
                </span>
              )}
            </NavLink>
            <div className="flex items-center gap-1 bg-white border border-purple-200 rounded-xl px-2 py-1.5">
              <select
                value={i18n.language}
                onChange={handleChange}
                className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer appearance-none pr-6 relative"
              >
                <option value="uz" className="flex items-center gap-2">
                  <span className="text-xs">UZ</span> O'zbekcha
                </option>
                <option value="ru" className="flex items-center gap-2">
                  <span className="text-xs">RU</span> Русский
                </option>
                <option value="en" className="flex items-center gap-2">
                  <span className="text-xs">US</span> English
                </option>
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
