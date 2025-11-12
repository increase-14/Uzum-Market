import React from "react";
import useAppContext from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useAppContext();

  const remove = (id) => setCart(cart.filter((i) => i.id !== id));

  const totalPrice = cart.reduce((sum, i) => sum + i.count * i.price, 0);
  const totalCount = cart.reduce((sum, i) => sum + i.count, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center p-16">
        <h2 className="text-2xl font-bold text-gray-600">Savat bo'sh</h2>
        <Link to="/" className="text-purple-600 hover:underline">
          Bosh sahifaga
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Savat</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm mb-4"
        >
          <img
            src={item.thumbnail}
            alt=""
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">
              {item.count} ta × ${item.price}
            </p>
          </div>
          <button
            onClick={() => remove(item.id)}
            className="text-red-500 hover:text-red-700 text-xl"
          >
            x
          </button>
        </div>
      ))}

      <div className="border-t pt-4 mt-6">
        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Jami mahsulotlar:</span>
          <span>{totalCount} ta</span>
        </div>
        <div className="flex justify-between text-2xl font-bold text-purple-700 mt-2">
          <span>Jami narx:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
