import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = ({ favorites = [] }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const currLang = localStorage.getItem("lang");
    if (currLang) i18n.changeLanguage(currLang);
  }, [i18n]);
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
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
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-5 w-6 h-6 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                  {favorites.length}
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
