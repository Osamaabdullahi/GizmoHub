// // components/HeroSection.js
// const HeroSection = () => {
//   return (
//     <div
//       className="relative bg-gray-100 py-16 lg:py-24 bg-cover bg-center"
//       style={{ backgroundImage: "url(/images/controller.jpg)" }}
//     >
//       <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
//         <div className="lg:w-1/2 mb-8 lg:mb-0">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
//             Discover the Latest in Tech
//           </h1>
//           <p className="text-lg lg:text-xl mb-6 text-white">
//             Shop our latest products and enjoy special discounts.
//           </p>
//           <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
//             Shop Now
//           </button>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0  z-[-1]">
          <img
            src="/images/controller.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content */}
        <div className="relative bg-opacity-75 bg-black py-24 sm:py-32 px-4 text-white text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to our E-commerce Store
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Explore the latest electronics and gadgets.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

const DescriptionComponent = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Discover the Latest in Electronics
          </h2>
          <p className="text-lg mb-8">
            Explore our curated selection of cutting-edge electronics and
            gadgets, designed to elevate your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/controller.jpg"
              alt="Product 1"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
              <h3 className="text-lg font-semibold text-white mb-2">
                Product 1 Name
              </h3>
              <p className="text-gray-300 mb-2">$99.99</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 sm:px-4 rounded-lg">
                View Product
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/controllerOne.jpg"
              alt="Product 2"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
              <h3 className="text-lg font-semibold text-white mb-2">
                Product 2 Name
              </h3>
              <p className="text-gray-300 mb-2">$79.99</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 sm:px-4 rounded-lg">
                View Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
