import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaNetworkWired,
  FaGamepad,
} from "react-icons/fa";

const CategorySection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard icon={<FaMobileAlt />} title="Mobile Phones" />
          <CategoryCard icon={<FaLaptop />} title="Laptops" />
          <CategoryCard icon={<FaHeadphones />} title="Headphones" />
          <CategoryCard icon={<FaTabletAlt />} title="Tablets" />
          <CategoryCard icon={<FaNetworkWired />} title="Networking" />
          <CategoryCard icon={<FaGamepad />} title="PC Gaming" />
          {/* Add more categories as needed */}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
      {icon}
      <span className="text-lg font-semibold mt-4">{title}</span>
    </div>
  );
};

export default CategorySection;
