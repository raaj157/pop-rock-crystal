import stone from "../assets/images/stone one.png";
import heroBackground from "../assets/images/bg.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl h-full">
        <div className="md:w-3/5 text-left px-6">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Welcome to Pop Rock Crystal Shop!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Here you will find unique phone accessories, crystals, jewelry, and
            more. Free shipping inside the U.S., and our phone grips come with a
            limited warranty.
          </p>

          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-blue-600 transition shadow-lg">
              Shop Now
            </button>

            <button className="px-8 py-3 bg-transparent text-black text-lg font-bold rounded-full hover:bg-blue-500 hover:text-white transition">
              About Us
            </button>
          </div>
        </div>

        <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center h-96">
          <div className="relative p-6 bg-white rounded-lg shadow-xl h-full flex flex-col justify-center">
            <span className="absolute top-8 left-0 px-3 py-1 bg-purple-500 text-white text-xs rounded-tr-md rounded-bl-md">
              New lot
            </span>
            <img src={stone} alt="Product" className="w-48 mx-auto" />
            <p className="mt-4 text-lg font-semibold text-gray-700">
              CRYSTAL AGATE PHONE GRIP - $18.99
            </p>

            <div className="flex justify-center items-center mt-4 space-x-2">
              <div className="flex items-center">
                <FaArrowLeft size={24} className="text-violet-500" />
              </div>

              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>

              <div className="flex items-center">
                <FaArrowRight size={24} className="text-violet-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
