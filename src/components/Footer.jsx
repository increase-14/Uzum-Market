import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const{t}=useTranslation()
  return (
    <footer className=" from-purple-50 to-transparent py-12 mt-16 border-t border-purple-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-600">
          © 2025 <span className="font-bold text-purple-600">Uzum Market</span>. {t("footer.t1")}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {t("footer.t2")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;