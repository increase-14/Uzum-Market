import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useAppContext from "../hooks/useAppContext";

const HomePage = () => {
  const { data, isLoading } = useFetch("https://dummyjson.com/products");
  const { cart } = useAppContext();

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.count || 0) * (item.price || 0), 0);
  }, [cart]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Jami summa</span>
          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product, i) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;