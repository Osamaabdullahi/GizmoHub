// components/ProductSection.js
const ProductSection = () => {
  const products = [
    {
      name: "Gaming Controller",
      price: "$29.99",
      oldPrice: "$39.99",
      image: "/images/controller.jpg",
      discount: "25% OFF",
    },
    {
      name: "Mechanical Keyboard",
      price: "$59.99",
      oldPrice: "$79.99",
      image: "/images/controller.jpg",
      discount: "25% OFF",
    },
    {
      name: "Smart Camera",
      price: "$99.99",
      oldPrice: "$129.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
    {
      name: "Wireless Speakers",
      price: "$49.99",
      oldPrice: "$69.99",
      image: "/images/controller.jpg",
      discount: "30% OFF",
    },
    {
      name: "Smart Watch",
      price: "$199.99",
      oldPrice: "$249.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
    {
      name: "Gaming Headset",
      price: "$79.99",
      oldPrice: "$99.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Explore our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold text-blue-600">
                  {product.price}
                </p>
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
              </div>
              <div className="mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg">
                {product.discount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
