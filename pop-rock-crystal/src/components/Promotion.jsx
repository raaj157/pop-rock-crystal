import React from "react";
import agatePhoneGripImage from "../assets/images/promotion.png";

const Promotion = () => {
  return (
    <>
      <section className="relative text-center py-16 bg-gradient-to-b from-white to-blue-100 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-auto text-left flex flex-col items-center justify-center md:items-end md:justify-center px-2">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Best Price</h3>
          <h1 className="text-4xl font-semibold text-black">
            Agate Phone Grip
          </h1>

          <div className="flex justify-center md:justify-end mt-4">
            <p className="text-lg text-gray-500 line-through">$44.50</p>
            <p className="text-4xl text-orange-600 font-bold mr-2">$19.50</p>
          </div>

          <p className="text-gray-600 mt-4 max-w-lg text-center md:text-left">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>

          <button
            className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg"
            aria-label="Buy Agate Phone Grip"
          >
            Buy Now
          </button>
        </div>

        <div className="md:w-auto flex justify-center items-center px-2">
          <img
            src={agatePhoneGripImage}
            alt="Agate Phone Grip"
            className="w-72 md:w-96"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
      </section>

      <footer className="w-full py-8 bg-blue-900 text-white text-center"></footer>
    </>
  );
};

export default Promotion;
