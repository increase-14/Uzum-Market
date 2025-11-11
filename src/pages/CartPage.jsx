import React from "react";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  const { cart, setCart } = useAppContext();

  const total = cart.reduce((s, p) => s + p.price * p.count, 0);

  const remove = (id) => setCart(cart.filter((i) => i.id !== id));
  const clear = () => setCart([]);

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
        <h2 className="text-5xl font-medium text-gray-900 mt-4">
          {t("cart.t1")}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4 pt-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4">
          {t("cart.t2")} ({cart.length})
        </h1>

        <div className="space-y-3">
          {cart.map((p) => (
            <div
              key={p.id}
              className="flex gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="flex">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-24 h-24 rounded-lg object-cover border border-gray-100"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                  {p.title}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base font-bold text-indigo-600">
                    ${p.price}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    × {p.count}
                  </span>
                </div>

                <p className="text-sm font-medium text-gray-700 mt-1">
                  {t("cart.t3")}{" "}
                  <span className="font-bold text-indigo-600">
                    ${(p.price * p.count).toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => remove(p.id)}
                  className="text-xs font-medium text-red-600 hover:text-red-700"
                >
                  {t("cart.t4")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-md">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {t("cart.t3")}
            </span>
            <span className="text-xl font-bold text-indigo-600">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={clear}
            className="w-full py-3 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 transition-colors"
          >
            {t("cart.t5")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
