import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isLoading) return <p className="text-center py-10">Yuklanmoqda...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">Xato: {error}</p>;
  if (!data) return <p className="text-center py-10">Mahsulot topilmadi</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-80 object-contain rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <p className="text-3xl font-bold text-green-600">${data.price}</p>
      </div>
    </div>
  );
};

export default DetailPage;
