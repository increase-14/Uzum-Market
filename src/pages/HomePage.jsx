import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useFetch("https://dummyjson.com/products");
  const { cart } = useAppContext();

  const total = useMemo(() => {
    return cart.reduce((sum, i) => sum + i.count * i.price, 0);
  }, [cart]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="text-gray-600">{t("home.t1")}</span>
          <span className="text-2xl font-bold text-purple-700">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
