import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-gray-800">
          4<span className="text-indigo-600">0</span>4
        </h1>

        <h2 className="mt-6 text-3xl font-semibold text-gray-700">NotFound</h2>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
          >
            HomPage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
