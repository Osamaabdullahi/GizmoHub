// components/HeroSection.js
const HeroSection = () => {
  return (
    <div
      className="relative bg-gray-100 py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/controller.jpg)" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Discover the Latest in Tech
          </h1>
          <p className="text-lg lg:text-xl mb-6 text-white">
            Shop our latest products and enjoy special discounts.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default HeroSection;
