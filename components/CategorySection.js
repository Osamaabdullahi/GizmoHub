// import React from "react";
// import {
//   FaMobileAlt,
//   FaLaptop,
//   FaHeadphones,
//   FaTabletAlt,
//   FaNetworkWired,
//   FaGamepad,
// } from "react-icons/fa";

// const CategorySection = () => {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
//           Shop by Category
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           <CategoryCard icon={<FaMobileAlt />} title="Mobile Phones" />
//           <CategoryCard icon={<FaLaptop />} title="Laptops" />
//           <CategoryCard icon={<FaHeadphones />} title="Headphones" />
//           <CategoryCard icon={<FaTabletAlt />} title="Tablets" />
//           <CategoryCard icon={<FaNetworkWired />} title="Networking" />
//           <CategoryCard icon={<FaGamepad />} title="PC Gaming" />
//           {/* Add more categories as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategoryCard = ({ icon, title }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//       {icon}
//       <span className="text-lg font-semibold mt-4">{title}</span>
//     </div>
//   );
// };

// export default CategorySection;

import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaNetworkWired,
  FaGamepad,
} from "react-icons/fa";

const CategorySection = ({ isDarkMode }) => {
  return (
    <div className={`bg-${isDarkMode ? "gray-800" : "gray-100"} py-8`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 text-${
            isDarkMode ? "white" : "gray-800"
          }`}
        >
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Category Cards */}
          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a
              href="/category/mobile-phones"
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaMobileAlt />
              </div>
              <h3 className="text-base font-semibold mb-2">Mobile Phones</h3>
            </a>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a href="/category/laptops" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaLaptop />
              </div>
              <h3 className="text-base font-semibold mb-2">Laptops</h3>
            </a>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a
              href="/category/headphones"
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaHeadphones />
              </div>
              <h3 className="text-base font-semibold mb-2">Headphones</h3>
            </a>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a href="/category/tablets" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaTabletAlt />
              </div>
              <h3 className="text-base font-semibold mb-2">Tablets</h3>
            </a>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a
              href="/category/networking"
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaNetworkWired />
              </div>
              <h3 className="text-base font-semibold mb-2">Networking</h3>
            </a>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <a
              href="/category/pc-gaming"
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaGamepad />
              </div>
              <h3 className="text-base font-semibold mb-2">PC Gaming</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
