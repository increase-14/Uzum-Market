import useAppContext from "../hooks/useAppContext";

const Card = ({ product }) => {
  const { cart, setCart } = useAppContext();
  const item = cart.find((i) => i.id === product.id);

  const add = () => {
    if (item) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, count: i.count + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const remove = () => {
    if (item.count === 1) {
      setCart(cart.filter((i) => i.id !== product.id));
    } else {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, count: i.count - 1 } : i
        )
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-3 bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        {item && (
          <div className="absolute top-5 right-5 w-7 h-7 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
            {item.count}
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-lg font-bold text-gray-900">${product.price}</p>

        {!item ? (
          <button
            onClick={add}
            className="w-full py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            Qo'shish
          </button>
        ) : (
          <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1">
            <button
              onClick={remove}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-bold text-gray-700">−</span>
            </button>

            <span className="text-base font-bold text-gray-900 px-3">
              {item.count}
            </span>

            <button
              onClick={add}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-bold text-gray-700">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
