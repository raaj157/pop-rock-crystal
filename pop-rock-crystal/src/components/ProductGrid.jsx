import React from "react";
import stone from "../assets/images/stone one.png";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Crystal Agate Phone Grip", price: "18.99$", imgSrc: stone },
    {
      id: 2,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 3,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 4,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 5,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 6,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 7,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
    {
      id: 8,
      name: "Crystal Quartz Phone Grip",
      price: "18.99$",
      imgSrc: stone,
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl text-center font-bold text-blue-900">
        All Products
      </h2>

      <div className="flex items-start mx-11 my-8">
        <div className="flex space-x-6">
          <span className="text-gray-600">
            Filter: <span className="font-bold">All Products</span>
          </span>
          <span className="text-gray-600">
            Sort: <span className="font-bold">Best Selling</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-6 lg:px-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-48 h-60 object-cover mb-4"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              {product.name}
            </h3>

            <p className="text-blue-500 font-bold text-lg mb-4 text-center">
              {product.price}
            </p>

            <button className="w-[70%] mx-auto py-2 bg-white text-blue-500 border-2 border-blue-500 text-sm font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors flex justify-center">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
