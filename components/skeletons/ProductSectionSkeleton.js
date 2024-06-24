import React from "react";

const ProductSectionSkeleton = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Loading Products...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skeleton Item 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
            <div className="wave-animation h-48 mb-4 rounded"></div>
            <div className="wave-animation h-4 mb-2 rounded"></div>
            <div className="wave-animation h-4 mb-4 rounded"></div>
            <div className="wave-animation h-10 rounded"></div>
          </div>
          {/* Skeleton Item 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
            <div className="wave-animation h-48 mb-4 rounded"></div>
            <div className="wave-animation h-4 mb-2 rounded"></div>
            <div className="wave-animation h-4 mb-4 rounded"></div>
            <div className="wave-animation h-10 rounded"></div>
          </div>
          {/* Skeleton Item 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
            <div className="wave-animation h-48 mb-4 rounded"></div>
            <div className="wave-animation h-4 mb-2 rounded"></div>
            <div className="wave-animation h-4 mb-4 rounded"></div>
            <div className="wave-animation h-10 rounded"></div>
          </div>
          {/* Skeleton Item 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
            <div className="wave-animation h-48 mb-4 rounded"></div>
            <div className="wave-animation h-4 mb-2 rounded"></div>
            <div className="wave-animation h-4 mb-4 rounded"></div>
            <div className="wave-animation h-10 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionSkeleton;
