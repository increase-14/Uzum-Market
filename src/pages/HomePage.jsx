import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useFetch("https://dummyjson.com/products");
  const { cart } = useAppContext();

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + (item.count || 0) * (item.price || 0),
      0
    );
  }, [cart]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">{t("home.t1")}</span>
          <span className="text-2xl font-bold text-purple-700">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
