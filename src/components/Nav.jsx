import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAppContext from "../hooks/useAppContext";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useAppContext();

  const totalItems = cart.reduce((sum, item) => sum + (item.count || 0), 0);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="font-black text-2xl text-purple-600">
            Uzum Market
          </NavLink>

          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 underline"
                  : "text-gray-700 hover:text-purple-600"
              }
            >
              {t("nav.t1")}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative ${
                  isActive
                    ? "text-purple-600 underline"
                    : "text-gray-700 hover:text-purple-600"
                }`
              }
            >
              {t("nav.t2")}

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-5 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </NavLink>

            <select
              value={i18n.language}
              onChange={handleChange}
              className="bg-white border border-purple-200 rounded-xl px-2 py-1 text-sm"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
