// // "use client"; // components/Navbar.js
// // import { useState } from "react";
// // import { FaSearch, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
// // import { useAppStore } from "@/store";
// // import { useShallow } from "zustand/react/shallow";

// // const Navbar = () => {
// //   const isDarkMode = useAppStore((state) => state.night);
// //   const setNight = useAppStore((state) => state.setNight);
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const toggleDarkMode = () => {
// //     setNight();
// //   };

// //   return (
// //     <nav className={`bg-${isDarkMode ? "gray-800" : "white"} shadow-md`}>
// //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         <div
// //           className={`text-2xl font-bold text-${
// //             isDarkMode ? "white" : "gray-800"
// //           }`}
// //         >
// //           GizmoHub
// //         </div>
// //         <div className="hidden lg:flex items-center space-x-4">
// //           <a
// //             href="/"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Home
// //           </a>
// //           <a
// //             href="/product"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Shop
// //           </a>
// //           <a
// //             href="/product"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Deals
// //           </a>
// //           <a
// //             href="#"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             About
// //           </a>
// //           <a
// //             href="/blog"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Blog
// //           </a>
// //           <a
// //             href="/product/cart"
// //             className={`text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Cart
// //           </a>
// //           <div className="relative">
// //             <input
// //               type="text"
// //               className={`border border-${
// //                 isDarkMode ? "gray-700" : "gray-300"
// //               } rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
// //                 isDarkMode ? "white" : "black"
// //               }`}
// //               placeholder="Search..."
// //             />
// //             <FaSearch className="absolute top-2 left-3 text-gray-400" />
// //           </div>
// //           <button
// //             className={`px-4 py-2 rounded-lg ${
// //               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
// //             } hover:bg-blue-700 focus:outline-none`}
// //           >
// //             Login
// //           </button>
// //           <button
// //             onClick={toggleDarkMode}
// //             className={`px-4 py-2 rounded-lg ${
// //               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
// //             } hover:bg-blue-700 focus:outline-none`}
// //           >
// //             {isDarkMode ? <FaSun /> : <FaMoon />}
// //           </button>
// //         </div>
// //         <div className="lg:hidden flex items-center">
// //           <button
// //             onClick={toggleMenu}
// //             className={`text-${
// //               isDarkMode ? "white" : "gray-800"
// //             } focus:outline-none`}
// //           >
// //             {isOpen ? (
// //               <FaTimes className="text-2xl" />
// //             ) : (
// //               <FaBars className="text-2xl" />
// //             )}
// //           </button>
// //         </div>
// //       </div>
// //       {isOpen && (
// //         <div
// //           className={`lg:hidden bg-${
// //             isDarkMode ? "gray-800" : "white"
// //           } px-4 py-4`}
// //         >
// //           <a
// //             href="/"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Home
// //           </a>
// //           <a
// //             href="/product"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Shop
// //           </a>
// //           <a
// //             href="/product"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Deals
// //           </a>
// //           <a
// //             href="#"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             About
// //           </a>
// //           <a
// //             href="/blog"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Blog
// //           </a>
// //           <a
// //             href="/product/cart"
// //             className={`block py-2 text-${
// //               isDarkMode ? "white" : "black"
// //             } hover:text-blue-600`}
// //           >
// //             Cart
// //           </a>
// //           <div className="relative py-2">
// //             <input
// //               type="text"
// //               className={`border border-${
// //                 isDarkMode ? "gray-700" : "gray-300"
// //               } rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
// //                 isDarkMode ? "white" : "black"
// //               }`}
// //               placeholder="Search..."
// //             />
// //             <FaSearch className="absolute top-3 left-4 text-gray-400" />
// //           </div>
// //           <button
// //             className={`w-full mt-2 px-4 py-2 ${
// //               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
// //             } rounded-lg`}
// //           >
// //             Login
// //           </button>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client";
// import { useState } from "react";
// import { FaSearch, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
// import { useAppStore } from "@/store";
// import { useShallow } from "zustand/react/shallow";
// import { useCartStore } from "@/store";

// const Navbar = () => {
//   const isDarkMode = useAppStore((state) => state.night);
//   const setNight = useAppStore((state) => state.setNight);
//   const [isOpen, setIsOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState(
//   //   useAppStore((state) => state.cartObjects).length
//   // ); // Example state for cart items
//   const cartItems = useCartStore((state) => state.cart);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDarkMode = () => {
//     setNight();
//   };

//   return (
//     <nav className={`bg-${isDarkMode ? "gray-800" : "white"} shadow-md`}>
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div
//           className={`text-2xl font-bold text-${
//             isDarkMode ? "white" : "gray-800"
//           }`}
//         >
//           GizmoHub
//         </div>
//         <div className="hidden lg:flex items-center space-x-4">
//           <a
//             href="/"
//             className={`text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Home
//           </a>
//           <a
//             href="/product"
//             className={`text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Shop
//           </a>
//           <a
//             href="/product"
//             className={`text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Deals
//           </a>
//           <a
//             href="#"
//             className={`text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             About
//           </a>
//           <a
//             href="/blog"
//             className={`text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Blog
//           </a>
//           <a
//             href="/product/cart"
//             className={`relative text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Cart
//             <sup className="absolute -top-3 right-0 bg-red-600 text-white rounded-full text-xs px-1">
//               {cartItems}
//             </sup>
//           </a>
//           <div className="relative">
//             <input
//               type="text"
//               className={`border border-${
//                 isDarkMode ? "gray-700" : "gray-300"
//               } rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
//                 isDarkMode ? "white" : "black"
//               }`}
//               placeholder="Search..."
//             />
//             <FaSearch className="absolute top-2 left-3 text-gray-400" />
//           </div>
//           <button
//             className={`px-4 py-2 rounded-lg ${
//               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//             } hover:bg-blue-700 focus:outline-none`}
//           >
//             Login
//           </button>
//           <button
//             onClick={toggleDarkMode}
//             className={`px-4 py-2 rounded-lg ${
//               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//             } hover:bg-blue-700 focus:outline-none`}
//           >
//             {isDarkMode ? <FaSun /> : <FaMoon />}
//           </button>
//         </div>
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className={`text-${
//               isDarkMode ? "white" : "gray-800"
//             } focus:outline-none`}
//           >
//             {isOpen ? (
//               <FaTimes className="text-2xl" />
//             ) : (
//               <FaBars className="text-2xl" />
//             )}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div
//           className={`lg:hidden bg-${
//             isDarkMode ? "gray-800" : "white"
//           } px-4 py-4`}
//         >
//           <a
//             href="/"
//             className={`block py-2 text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Home
//           </a>
//           <a
//             href="/product"
//             className={`block py-2 text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Shop
//           </a>
//           <a
//             href="/product"
//             className={`block py-2 text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Deals
//           </a>
//           <a
//             href="#"
//             className={`block py-2 text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             About
//           </a>
//           <a
//             href="/blog"
//             className={`block py-2 text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Blog
//           </a>
//           <a
//             href="/product/cart"
//             className={`block py-2 relative text-${
//               isDarkMode ? "white" : "black"
//             } hover:text-blue-600`}
//           >
//             Cart
//             <sup className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-1">
//               {cartItems.length}
//             </sup>
//           </a>
//           <div className="relative py-2">
//             <input
//               type="text"
//               className={`border border-${
//                 isDarkMode ? "gray-700" : "gray-300"
//               } rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
//                 isDarkMode ? "white" : "black"
//               }`}
//               placeholder="Search..."
//             />
//             <FaSearch className="absolute top-3 left-4 text-gray-400" />
//           </div>
//           <button
//             className={`w-full mt-2 px-4 py-2 ${
//               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//             } rounded-lg`}
//           >
//             Login
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
// import { useAppStore } from "@/store";
// import { useRouter } from "next/navigation";
// import { getCart } from "@/store";

// export default function Cart() {
//   const isDarkMode = useAppStore((state) => state.night);
//   const router = useRouter();
//   const cartObjects = useAppStore((state) => state.cartObjects);
//   const removeCart = useAppStore((state) => state.removeCart);

//   const calculateTotal = () => {
//     return 100;
//   };

//   const handleclick = () => {
//     router.push("cart/checkout");
//   };

//   const handleRemove = (id) => {
//     removeCart(id);
//     return getCart();
//   };

//   console.log(cartObjects);

//   return (
//     <>
//       <>
//         <div
//           className={`py-16 ${
//             isDarkMode ? "bg-gray-900" : "bg-gray-100"
//           } min-h-screen`}
//         >
//           <div className="container mx-auto  px-4 md:max-w-3xl lg:max-w-4xl">
//             <h2
//               className={`text-3xl font-bold text-center mb-8 ${
//                 isDarkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Shopping Cart
//             </h2>
//             <div
//               className={`bg-white p-6 rounded-lg shadow-md ${
//                 isDarkMode ? "dark:bg-gray-800" : ""
//               }`}
//             >
//               <div className="hidden md:grid grid-cols-5 gap-4 mb-4 border-b-2 pb-2">
//                 <div className="col-span-2 text-left">Product</div>
//                 <div className="text-center">Price</div>
//                 <div className="text-center">Quantity</div>
//                 <div className="text-center">Total</div>
//               </div>
//               {cartObjects.map((item) => (
//                 <div
//                   key={item.name}
//                   className={`flex flex-col md:grid md:grid-cols-5 gap-4 items-center border-b-2 py-4 ${
//                     isDarkMode ? "border-gray-700" : "border-gray-300"
//                   }`}
//                 >
//                   <div className="col-span-2 flex items-center">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg mr-4"
//                     />
//                     <span
//                       className={`text-lg font-semibold ${
//                         isDarkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {item.name}
//                     </span>
//                   </div>
//                   <div
//                     className={`text-center text-lg ${
//                       isDarkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     ${item.price}
//                   </div>
//                   {/* <div className="flex items-center justify-center">
//                     <button
//                       onClick={() => decrement()}
//                       className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-400 ${
//                         isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
//                       }`}
//                     >
//                       <FaMinus />
//                     </button>
//                     <span
//                       className={`px-4 ${
//                         isDarkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {Quantity}
//                     </span>
//                     <button
//                       onClick={() => Increment()}
//                       className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-r-lg hover:bg-gray-400 ${
//                         isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
//                       }`}
//                     >
//                       <FaPlus />
//                     </button>
//                   </div> */}
//                   <CartItems price={item.price} />
//                   {/* <div
//                     className={`text-center text-lg ${
//                       isDarkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {item.price * Quantity}
//                   </div> */}
//                   <div className="text-center">
//                     <button
//                       onClick={() => handleRemove(item.id)}
//                       className={`text-red-600 hover:text-red-800 ${
//                         isDarkMode ? "dark:text-gray-400" : ""
//                       }`}
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex flex-col md:flex-row justify-between items-center mt-6">
//                 <button
//                   onClick={() => router.push("/product")}
//                   className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 mb-4 md:mb-0 ${
//                     isDarkMode ? "dark:bg-gray-600 dark:hover:bg-gray-700" : ""
//                   }`}
//                 >
//                   Continue Shopping
//                 </button>
//                 <div
//                   className={`text-xl font-bold ${
//                     isDarkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Total: ${calculateTotal()}
//                 </div>
//                 <button
//                   onClick={handleclick}
//                   className={`bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 ${
//                     isDarkMode ? "dark:bg-gray-600 dark:hover:bg-gray-700" : ""
//                   }`}
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }

// const CartItems = ({ price }) => {
//   const isDarkMode = useAppStore((state) => state.night);
//   const [Quantity, setQuantity] = useState(1);

//   const Increment = () => {
//     setQuantity((c) => c + 1);
//   };

//   const decrement = () => {
//     setQuantity((c) => {
//       if (Quantity === 1) {
//         return 1;
//       }
//       return c - 1;
//     });
//   };
//   return (
//     <>
//       <div className="flex items-center justify-center">
//         <button
//           onClick={() => decrement()}
//           className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-400 ${
//             isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
//           }`}
//         >
//           <FaMinus />
//         </button>
//         <span className={`px-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//           {Quantity}
//         </span>
//         <button
//           onClick={() => Increment()}
//           className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-r-lg hover:bg-gray-400 ${
//             isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
//           }`}
//         >
//           <FaPlus />
//         </button>
//       </div>
//       <div
//         className={`text-center text-lg ${
//           isDarkMode ? "text-white" : "text-gray-900"
//         }`}
//       >
//         {price * Quantity}
//       </div>
//     </>
//   );
// };

// "use client";
// import React, { useEffect, useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import ProductSectionSkeleton from "./skeletons/ProductSectionSkeleton";
// import { useRouter } from "next/navigation";
// import Messages from "./notification/Message";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAppStore, useCartStore } from "@/store";

// const ProductSection = ({ title }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const night = useAppStore((state) => state.night);
//   const setNight = useAppStore((state) => state.setNight);
//   const setMessage = useAppStore((state) => state.setMessage);
//   const addToCart = useAppStore((state) => state.addToCart);
//   const [Quantity, setQuantity] = useState(1);
//   const cartObjects = useAppStore((state) => state.cartObjects);

//   const addItem = useCartStore((state) => state.addItem);
//   const removeItem = useCartStore((state) => state.removeItem);
//   const cart = useCartStore((state) => state.cart);

//   const handleAddToCart = (item) => {
//     addItem(item);
//   };

//   console.log(cart, "****");

//   const isDarkMode = night;

//   const fetchData = async () => {
//     const url = "http://127.0.0.1:8000/products/";
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(response);
//     console.log(result);
//     if (response.ok) {
//       setData(result);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleClick = (id, name) => {
//     const params = new URLSearchParams({ id: id });
//     router.push(`/product/${name}?${params.toString()}`);
//   };

//   // const handleAddToCart = (name, id, image, price) => {
//   //   const cartDetails = { name, id, image, price };
//   //   setMessage("cart");
//   //   addToCart(cartDetails);
//   //   console.log(cartObjects);
//   // };

//   if (loading) {
//     return <ProductSectionSkeleton />;
//   }
//   console.log(cartObjects);
//   return (
//     <div className={`py-16  ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
//       <div className="container mx-auto ">
//         <h2
//           className={`text-2xl font-bold text-center mb-8 ${
//             isDarkMode ? "text-white" : "text-gray-800"
//           }`}
//         >
//           {title}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
//           {data?.map((product) => (
//             <div
//               key={product.name}
//               className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 ${
//                 isDarkMode ? "dark:bg-gray-700 dark:text-white" : ""
//               }`}
//             >
//               <div
//                 onClick={() => handleClick(product.id, product.name)}
//                 className="cursor-pointer"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-lg font-semibold line-clamp-2">
//                   {product.name}
//                 </h3>
//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-xl font-bold text-blue-600">
//                     {product.price}
//                   </p>
//                   <p className="text-gray-500 line-through">
//                     {product.oldPrice}
//                   </p>
//                 </div>
//                 <div
//                   className={`mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg ${
//                     isDarkMode ? "bg-blue-600 text-white" : ""
//                   }`}
//                 >
//                   {product.discount}
//                 </div>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={() =>
//                     handleAddToCart(
//                       product.name,
//                       product.id,
//                       product.image,
//                       product.price
//                     )
//                   }
//                   className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
//                     isDarkMode ? "dark:bg-gray-600" : ""
//                   }`}
//                 >
//                   Add to Cart
//                 </button>

//                 <FaHeart
//                   className={`text-red-500 cursor-pointer hover:text-red-700 ${
//                     isDarkMode ? "dark:text-red-400 hover:text-red-600" : ""
//                   }`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

"use client";
// import ProductSection from "@/components/ProductSection";
// import ProductSectionSkeleton from "@/components/skeletons/ProductSectionSkeleton";
// import React, { useEffect, useState } from "react";
// import {
//   FaMobileAlt,
//   FaLaptop,
//   FaHeadphones,
//   FaTabletAlt,
//   FaNetworkWired,
//   FaGamepad,
//   FaChevronDown,
//   FaChevronUp,
//   FaChevronRight,
//   FaHeart,
// } from "react-icons/fa";
// import ProductCategorySkeleton from "@/components/skeletons/ProductCategorySkeleton";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useAppStore } from "@/store";
// import Messages from "@/components/notification/Message";

// const Product = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const isDarkMode = useAppStore((state) => state.night);
//   const setNight = useAppStore((state) => state.setNight);
//   const cartObjects = useAppStore((state) => state.cartObjects);

//   console.log("$$$$$$$$$", cartObjects);

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const url = "http://127.0.0.1:8000/products/";
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(response);
//     console.log(result);
//     if (response.ok) {
//       setData(result);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // if (loading) {
//   //   return <ProductSectionSkeleton />;
//   // }

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//   };

//   const handleAddToCart = (productName) => {
//     alert(`Added ${productName} to cart!`); // Replace with actual add to cart functionality
//   };

//   return (
//     <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row">
//           {/* Redesigned Filter Section */}
//           <div
//             className={`${
//               isFilterOpen ? "block" : "hidden"
//             } md:block w-full md:w-1/5 bg-white h-[100%] p-4 rounded-lg shadow-md fixed md:sticky top-16 z-20 transition-all duration-300 ease-in-out ${
//               isDarkMode ? "dark:bg-gray-800" : ""
//             }`}
//           >
//             <div className="flex justify-between items-center mb-4 md:hidden">
//               <h2
//                 className={`text-lg font-semibold ${
//                   isDarkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 Filter By
//               </h2>
//               <button
//                 onClick={toggleFilter}
//                 className={`text-blue-600 hover:text-blue-700 ${
//                   isDarkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//             </div>

//             <div className="space-y-6">
//               {/* Category Filter */}
//               <div className="space-y-4">
//                 <h3
//                   className={`text-sm font-semibold flex items-center ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   <span className="mr-2">
//                     <FaMobileAlt />
//                   </span>
//                   Categories
//                 </h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaLaptop />
//                       </span>
//                       Laptops
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaHeadphones />
//                       </span>
//                       Headphones
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaTabletAlt />
//                       </span>
//                       Tablets
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaNetworkWired />
//                       </span>
//                       Networking
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaGamepad />
//                       </span>
//                       PC Gaming
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Price Range Filter */}
//               <div className="space-y-2">
//                 <h3
//                   className={`text-sm font-semibold flex items-center ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   <span className="mr-2">
//                     <FaChevronRight />
//                   </span>
//                   Price Range
//                 </h3>
//                 <select
//                   className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
//                     isDarkMode ? "bg-gray-800 text-white" : ""
//                   }`}
//                 >
//                   <option value="">Select</option>
//                   <option value="0-50">$0 - $50</option>
//                   <option value="50-100">$50 - $100</option>
//                   <option value="100-200">$100 - $200</option>
//                   <option value="200+">$200 and above</option>
//                 </select>
//               </div>

//               {/* Apply Filters Button */}
//               <button
//                 className={`bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
//                   isDarkMode ? "dark:bg-gray-700" : ""
//                 }`}
//               >
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Products Section */}
//           {loading ? (
//             <ProductCategorySkeleton />
//           ) : (
//             <ProductPage data={data} isDarkMode={isDarkMode} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// const ProductPage = ({ isDarkMode, data }) => {
//   const messageType = useAppStore((state) => state.messageType);
//   const setMessage = useAppStore((state) => state.setMessage);
//   const addToCart = useAppStore((state) => state.addToCart);
//   const router = useRouter();
//   const [Quantity, setQuantity] = useState(1);

//   const handleClick = (id, name) => {
//     const params = new URLSearchParams({ id: id });
//     router.push(`/product/${name}?${params.toString()}`);
//   };

//   const handleAddToCart = (name, id, image, price) => {
//     const cartDetails = { name, id, image, price, total: Quantity * price };
//     setMessage("cart");
//     addToCart(cartDetails);
//   };
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ml-4 ">
//       {data?.map((product) => (
//         <div
//           key={product.name}
//           className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 ${
//             isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
//           }`}
//         >
//           <div
//             onClick={() => handleClick(product.id, product.name)}
//             className="cursor-pointer"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4 rounded-lg"
//             />
//             <h3
//               className={`text-lg font-semibold line-clamp-2 ${
//                 isDarkMode ? "dark:text-white" : ""
//               }`}
//             >
//               {product.name}
//             </h3>
//             <div className="flex justify-between items-center mt-2">
//               <p className="text-xl font-bold text-blue-600">{product.price}</p>
//               <p className="text-gray-500 line-through">{product.oldPrice}</p>
//             </div>
//             <div
//               className={`mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg ${
//                 isDarkMode ? "bg-blue-600 text-white" : ""
//               }`}
//             >
//               {product.discount}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() =>
//                 handleAddToCart(
//                   product.name,
//                   product.id,
//                   product.image,
//                   product.price
//                 )
//               }
//               className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
//                 isDarkMode ? "dark:bg-gray-600" : ""
//               }`}
//             >
//               Add to Cart
//             </button>
//             <FaHeart
//               className={`text-red-500 cursor-pointer hover:text-red-700 ${
//                 isDarkMode ? "dark:text-red-400 hover:text-red-600" : ""
//               }`}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const useCartStore = create(
//   persist(
//     (set, get) => ({
//       night: false,
//       cart: [],
//       addItem: (item) => {
//         const { cart } = get();
//         const existingItem = cart.find((cartItem) => cartItem.id === item.id);
//         if (existingItem) {
//           const updatedCart = cart.map((cartItem) =>
//             cartItem.id === item.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           );
//           set({ cart: updatedCart });
//         } else {
//           set({ cart: [...cart, { ...item, quantity: 1 }] });
//         }
//       },

//       removeItem: (itemId) => {
//         const { cart } = get();
//         const updatedCart = cart.filter((item) => item.id !== itemId);
//         set({ cart: updatedCart });
//       },

//       incrementItem: (itemId) => {
//         const { cart } = get();
//         const updatedCart = cart.map((item) =>
//           item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         set({ cart: updatedCart });
//       },
//       decrementItem: (itemId) => {
//         const { cart } = get();
//         const updatedCart = cart.map((item) =>
//           item.id === itemId && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
//         set({ cart: updatedCart });
//       },
//     }),
//     {
//       name: "cart-storage", // Name for local storage persistence
//       getStorage: () => localStorage, // Specify local storage as the storage medium
//     }
//   )
// );

// export const useAppStore = create((set) => ({
//   night: false,
//   setNight: () => set((state) => ({ night: !state.night })),
// }));

// "use client";
// import ProductSection from "@/components/ProductSection";
// import ProductSectionSkeleton from "@/components/skeletons/ProductSectionSkeleton";
// import React, { useEffect, useState } from "react";
// import {
//   FaMobileAlt,
//   FaLaptop,
//   FaHeadphones,
//   FaTabletAlt,
//   FaNetworkWired,
//   FaGamepad,
//   FaChevronDown,
//   FaChevronUp,
//   FaChevronRight,
//   FaHeart,
// } from "react-icons/fa";
// import ProductCategorySkeleton from "@/components/skeletons/ProductCategorySkeleton";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useAppStore } from "@/store";
// import Messages from "@/components/notification/Message";

// const Product = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const isDarkMode = useAppStore((state) => state.night);
//   const setNight = useAppStore((state) => state.setNight);
//   const cartObjects = useAppStore((state) => state.cartObjects);

//   console.log("$$$$$$$$$", cartObjects);

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const url = "http://127.0.0.1:8000/products/";
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(response);
//     console.log(result);
//     if (response.ok) {
//       setData(result);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // if (loading) {
//   //   return <ProductSectionSkeleton />;
//   // }

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//   };

//   const handleAddToCart = (productName) => {
//     alert(`Added ${productName} to cart!`); // Replace with actual add to cart functionality
//   };

//   return (
//     <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row">
//           {/* Redesigned Filter Section */}
//           <div
//             className={`${
//               isFilterOpen ? "block" : "hidden"
//             } md:block w-full md:w-1/5 bg-white h-[100%] p-4 rounded-lg shadow-md fixed md:sticky top-16 z-20 transition-all duration-300 ease-in-out ${
//               isDarkMode ? "dark:bg-gray-800" : ""
//             }`}
//           >
//             <div className="flex justify-between items-center mb-4 md:hidden">
//               <h2
//                 className={`text-lg font-semibold ${
//                   isDarkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 Filter By
//               </h2>
//               <button
//                 onClick={toggleFilter}
//                 className={`text-blue-600 hover:text-blue-700 ${
//                   isDarkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//             </div>

//             <div className="space-y-6">
//               {/* Category Filter */}
//               <div className="space-y-4">
//                 <h3
//                   className={`text-sm font-semibold flex items-center ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   <span className="mr-2">
//                     <FaMobileAlt />
//                   </span>
//                   Categories
//                 </h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaLaptop />
//                       </span>
//                       Laptops
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaHeadphones />
//                       </span>
//                       Headphones
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaTabletAlt />
//                       </span>
//                       Tablets
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaNetworkWired />
//                       </span>
//                       Networking
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className={`flex items-center ${
//                         isDarkMode ? "text-white" : "text-gray-800"
//                       } hover:underline`}
//                     >
//                       <span className="mr-2">
//                         <FaGamepad />
//                       </span>
//                       PC Gaming
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Price Range Filter */}
//               <div className="space-y-2">
//                 <h3
//                   className={`text-sm font-semibold flex items-center ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   <span className="mr-2">
//                     <FaChevronRight />
//                   </span>
//                   Price Range
//                 </h3>
//                 <select
//                   className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
//                     isDarkMode ? "bg-gray-800 text-white" : ""
//                   }`}
//                 >
//                   <option value="">Select</option>
//                   <option value="0-50">$0 - $50</option>
//                   <option value="50-100">$50 - $100</option>
//                   <option value="100-200">$100 - $200</option>
//                   <option value="200+">$200 and above</option>
//                 </select>
//               </div>

//               {/* Apply Filters Button */}
//               <button
//                 className={`bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
//                   isDarkMode ? "dark:bg-gray-700" : ""
//                 }`}
//               >
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Products Section */}
//           {loading ? (
//             <ProductCategorySkeleton />
//           ) : (
//             <ProductPage data={data} isDarkMode={isDarkMode} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// const ProductPage = ({ isDarkMode, data }) => {
//   const messageType = useAppStore((state) => state.messageType);
//   const setMessage = useAppStore((state) => state.setMessage);
//   const addToCart = useAppStore((state) => state.addToCart);
//   const router = useRouter();
//   const [Quantity, setQuantity] = useState(1);

//   const handleClick = (id, name) => {
//     const params = new URLSearchParams({ id: id });
//     router.push(`/product/${name}?${params.toString()}`);
//   };

//   const handleAddToCart = (name, id, image, price) => {
//     const cartDetails = { name, id, image, price, total: Quantity * price };
//     setMessage("cart");
//     addToCart(cartDetails);
//   };
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ml-4 ">
//       {data?.map((product) => (
//         <div
//           key={product.name}
//           className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 ${
//             isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
//           }`}
//         >
//           <div
//             onClick={() => handleClick(product.id, product.name)}
//             className="cursor-pointer"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4 rounded-lg"
//             />
//             <h3
//               className={`text-lg font-semibold line-clamp-2 ${
//                 isDarkMode ? "dark:text-white" : ""
//               }`}
//             >
//               {product.name}
//             </h3>
//             <div className="flex justify-between items-center mt-2">
//               <p className="text-xl font-bold text-blue-600">{product.price}</p>
//               <p className="text-gray-500 line-through">{product.oldPrice}</p>
//             </div>
//             <div
//               className={`mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg ${
//                 isDarkMode ? "bg-blue-600 text-white" : ""
//               }`}
//             >
//               {product.discount}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() =>
//                 handleAddToCart(
//                   product.name,
//                   product.id,
//                   product.image,
//                   product.price
//                 )
//               }
//               className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
//                 isDarkMode ? "dark:bg-gray-600" : ""
//               }`}
//             >
//               Add to Cart
//             </button>
//             <FaHeart
//               className={`text-red-500 cursor-pointer hover:text-red-700 ${
//                 isDarkMode ? "dark:text-red-400 hover:text-red-600" : ""
//               }`}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cart: [],
//       totalAmount: 0,

//       addItem: (item) => {
//         const existingItemIndex = get().cart.findIndex(
//           (i) => i.name === item.name
//         );
//         if (existingItemIndex !== -1) {
//           const updatedCart = [...get().cart];
//           updatedCart[existingItemIndex].quantity += item.quantity;
//           updatedCart[existingItemIndex].total += item.price * item.quantity;
//           set({ cart: updatedCart });
//         } else {
//           set((state) => ({
//             cart: [
//               ...state.cart,
//               { ...item, total: item.price * item.quantity },
//             ],
//           }));
//         }
//         get().calculateTotalAmount();
//       },

//       calculateTotalAmount: () => {
//         const total = get().cart.reduce((acc, item) => acc + item.total, 0);
//         set({ totalAmount: total });
//       },

//       removeItem: (name) => {
//         set((state) => ({
//           cart: state.cart.filter((item) => item.name !== name),
//         }));
//         get().calculateTotalAmount();
//       },

//       clearCart: () => {
//         set({ cart: [], totalAmount: 0 });
//       },
//     }),
//     {
//       name: "cart-storage", // name of the item in the storage (must be unique)
//       getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
//     }
//   )
// );

// export default useCartStore;

// "use client";

// import { useAppStore } from "@/store";
// import React, { useState } from "react";
// import { FaGoogle, FaFacebookF } from "react-icons/fa";

// const SignIn = () => {
//   const isDarkMode = useAppStore((state) => state.night);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign in
//     alert("Sign-In form submitted!");
//   };

//   const handleGoogleSignIn = () => {
//     // Handle Google sign-in
//     alert("Google sign-in!");
//   };

//   const handleFacebookSignIn = () => {
//     // Handle Facebook sign-in
//     alert("Facebook sign-in!");
//   };

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
//       } py-12 px-4 sm:px-6 lg:px-8`}
//     >
//       <div className="max-w-sm w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold">
//             {isDarkMode ? "Create your account" : "Create your account"}
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
//                   isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
//                 } placeholder-gray-500 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
//                   isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
//                 } placeholder-gray-500 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 name="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember_me"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Forgot your password?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
//                 isDarkMode
//                   ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               }`}
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center justify-center mt-6">
//           <div
//             className={`w-full border-t border-gray-300 ${
//               isDarkMode ? "border-gray-700" : ""
//             }`}
//           ></div>
//           <span
//             className={`mx-4 ${isDarkMode ? "text-gray-500" : "text-gray-700"}`}
//           >
//             OR
//           </span>
//           <div
//             className={`w-full border-t border-gray-300 ${
//               isDarkMode ? "border-gray-700" : ""
//             }`}
//           ></div>
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handleGoogleSignIn}
//             className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
//               isDarkMode
//                 ? "text-gray-700 hover:bg-gray-700 hover:text-white"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FaGoogle className="mr-2" />
//             Sign in with Google
//           </button>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleFacebookSignIn}
//             className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
//               isDarkMode
//                 ? "text-gray-700 hover:bg-gray-700 hover:text-white"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FaFacebookF className="mr-2" />
//             Sign in with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// "use client";
// import { useAppStore } from "@/store";
// import React, { useState } from "react";
// import { FaGoogle, FaFacebookF } from "react-icons/fa";
// import Link from "next/link"; // Import Link from Next.js

// const SignIn = () => {
//   const isDarkMode = useAppStore((state) => state.night);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign in
//     alert("Sign-In form submitted!");
//   };

//   const handleGoogleSignIn = () => {
//     // Handle Google sign-in
//     alert("Google sign-in!");
//   };

//   const handleFacebookSignIn = () => {
//     // Handle Facebook sign-in
//     alert("Facebook sign-in!");
//   };

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
//       } py-12 px-4 sm:px-6 lg:px-8`}
//     >
//       <div className="max-w-sm w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold">
//             {isDarkMode ? "create account" : "create account"}
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or{" "}
//             <Link
//               href="/sighin"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               sign in to an existing account
//             </Link>{" "}
//             if you already have one.
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
//                   isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
//                 } placeholder-gray-500 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
//                   isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
//                 } placeholder-gray-500 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 name="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember_me"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Forgot your password?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
//                 isDarkMode
//                   ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               }`}
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center justify-center mt-6">
//           <div
//             className={`w-full border-t border-gray-300 ${
//               isDarkMode ? "border-gray-700" : ""
//             }`}
//           ></div>
//           <span
//             className={`mx-4 ${isDarkMode ? "text-gray-500" : "text-gray-700"}`}
//           >
//             OR
//           </span>
//           <div
//             className={`w-full border-t border-gray-300 ${
//               isDarkMode ? "border-gray-700" : ""
//             }`}
//           ></div>
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handleGoogleSignIn}
//             className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
//               isDarkMode
//                 ? "text-gray-700 hover:bg-gray-700 hover:text-white"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FaGoogle className="mr-2" />
//             Sign in with Google
//           </button>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleFacebookSignIn}
//             className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
//               isDarkMode
//                 ? "text-gray-700 hover:bg-gray-700 hover:text-white"
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             <FaFacebookF className="mr-2" />
//             Sign in with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// "use client";

// import { useAppStore } from "@/store";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

// const Products = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const isDarkMode = useAppStore((state) => state.night);
//   const router = useRouter();

//   const fetchData = async () => {
//     setLoading(true);
//     const url = "http://127.0.0.1:8000/products/";
//     const response = await fetch(url);
//     const result = await response.json();
//     if (response.ok) {
//       setData(result);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleEdit = (
//     name,
//     price,
//     oldprice,
//     discount,
//     description,
//     category
//   ) => {
//     const params = new URLSearchParams({
//       name,
//       price,
//       oldprice,
//       discount,
//       description,
//       category,
//     });
//     router.push(`Dashboard/editproducts/?${params.toString()}`);
//   };

//   if (loading) {
//     return <ProductSkeleton />;
//   }

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Products</h2>
//         <button
//           onClick={() => router.push("Dashboard/addproducts")}
//           className="bg-green-500 text-white p-2 rounded"
//         >
//           Add New Product
//         </button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {data.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded shadow flex flex-col"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-32 object-cover mb-2 rounded"
//             />
//             <h3 className="text-xl font-bold line-clamp-3">{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Old Price: ${product.oldPrice}</p>
//             <p>Discount: {product.discount}%</p>
//             <div className="flex justify-between mt-auto pt-4">
//               <button
//                 onClick={() =>
//                   handleEdit(
//                     product.name,
//                     product.price,
//                     product.oldPrice,
//                     product.discount,
//                     product.description,
//                     product.category
//                   )
//                 }
//                 className="bg-blue-500 text-white p-2 rounded"
//               >
//                 Edit
//               </button>
//               <button className="bg-red-500 text-white p-2 rounded">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

// const ProductSkeleton = () => {
//   const skeletonItems = Array(6).fill(0); // Change the number to the number of skeleton items you want to display

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {skeletonItems.map((_, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded shadow animate-pulse"
//           >
//             <div className="bg-gray-300 h-32 mb-2 rounded"></div>
//             <div className="h-6 bg-gray-300 mb-2 rounded"></div>
//             <div className="h-4 bg-gray-300 mb-2 rounded"></div>
//             <div className="h-4 bg-gray-300 mb-2 rounded"></div>
//             <div className="flex justify-between mt-auto pt-4">
//               <div className="h-8 bg-gray-300 w-1/2 mr-2 rounded"></div>
//               <div className="h-8 bg-gray-300 w-1/2 rounded"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// "use client";
// import React, { useState } from "react";
// import { FaSearch, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
// import useCartStore, { useAppStore, useAuthStore } from "@/store";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// import Image from "next/image";

// const Navbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const user = useAuthStore((state) => state.user);
//   const isAdmin = user ? user.admin : false;
//   const isDarkMode = useAppStore((state) => state.night);
//   const setNight = useAppStore((state) => state.setNight);
//   const [isOpen, setIsOpen] = useState(false);
//   const cartItems = useCartStore((state) => state.cart);
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDarkMode = () => {
//     setNight();
//   };

//   const linkStyle = (path) => {
//     return `py-2 px-3 rounded ${
//       pathname === path
//         ? isDarkMode
//           ? "bg-gray-700 text-white"
//           : "bg-blue-600 text-white"
//         : isDarkMode
//         ? "text-white hover:text-blue-600"
//         : "text-black hover:text-blue-600"
//     }`;
//   };
//   console.log("$$$@@@@", pathname);
//   return (
//     <nav className={`bg-${isDarkMode ? "gray-800" : "white"} shadow-md`}>
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div
//           onClick={() => router.push("/")}
//           className={`text-2xl cursor-pointer font-bold text-${
//             isDarkMode ? "white" : "gray-800"
//           }`}
//         >
//           GizmoHub
//         </div>
//         {/* erro */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <Link href="/" className={linkStyle("/")}>
//             Home
//           </Link>
//           <Link href="/product" className={linkStyle("/product")}>
//             Shop
//           </Link>
//           <Link href="/about" className={linkStyle("/about")}>
//             About
//           </Link>
//           <Link href="/blog" className={linkStyle("/blog")}>
//             Blog
//           </Link>
//           {isAdmin && (
//             <Link href="/admin/Dashboard" className={linkStyle("/admin")}>
//               Admin
//             </Link>
//           )}
//           <Link
//             href="/product/cart"
//             className={`relative ${linkStyle("/product/cart")}`}
//           >
//             Cart
//             <sup className="absolute -top-2 right-0 bg-red-600 text-white rounded-full text-xs px-1">
//               {cartItems.length}
//             </sup>
//           </Link>
//           <div className="relative">
//             <input
//               type="text"
//               className={`border border-${
//                 isDarkMode ? "gray-700" : "gray-300"
//               } rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
//                 isDarkMode ? "white" : "black"
//               }`}
//               placeholder="Search..."
//             />
//             <FaSearch className="absolute top-2 left-3 text-gray-400" />
//           </div>
//           {isLoggedIn ? (
//             <div className="relative">
//               <Image
//                 src="/images/controller.jpg"
//                 alt="Profile Avatar"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 onClick={() => router.push("/profile")}
//                 width={100}
//                 height={100}
//               />
//             </div>
//           ) : (
//             <button
//               onClick={() => router.push("sighin")}
//               className={`px-4 py-2 rounded-lg ${
//                 isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//               } hover:bg-blue-700 focus:outline-none`}
//             >
//               Login
//             </button>
//           )}
//           <button
//             onClick={toggleDarkMode}
//             className={`px-4 py-2 rounded-lg ${
//               isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//             } hover:bg-blue-700 focus:outline-none`}
//           >
//             {isDarkMode ? <FaSun /> : <FaMoon />}
//           </button>
//         </div>
//         {/* error  */}
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className={`text-${
//               isDarkMode ? "white" : "gray-800"
//             } focus:outline-none`}
//           >
//             {isOpen ? (
//               <FaTimes className="text-2xl" />
//             ) : (
//               <FaBars className="text-2xl" />
//             )}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div
//           className={`lg:hidden bg-${
//             isDarkMode ? "gray-800" : "white"
//           } px-4 py-4`}
//         >
//           <Link href="/" className={`block ${linkStyle("/")}`}>
//             Home
//           </Link>
//           <Link href="/product" className={`block ${linkStyle("/product")}`}>
//             Shop
//           </Link>

//           <Link href="/about" className={`block ${linkStyle("/about")}`}>
//             About
//           </Link>
//           <Link href="/blog" className={`block ${linkStyle("/blog")}`}>
//             Blog
//           </Link>
//           {isAdmin && (
//             <Link
//               href="/admin/Dashboard"
//               className={`block ${linkStyle("/admin")}`}
//             >
//               Admin
//             </Link>
//           )}
//           <Link
//             href="/product/cart"
//             className={`block relative ${linkStyle("/product/cart")}`}
//           >
//             Cart
//             <sup className="absolute -top-2 right-0 bg-red-600 text-white rounded-full text-xs px-1">
//               {cartItems.length}
//             </sup>
//           </Link>
//           <div className="relative py-2">
//             <input
//               type="text"
//               className={`border border-${
//                 isDarkMode ? "gray-700" : "gray-300"
//               } rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
//                 isDarkMode ? "white" : "black"
//               }`}
//               placeholder="Search..."
//             />
//             <FaSearch className="absolute top-3 left-4 text-gray-400" />
//           </div>
//           {isLoggedIn ? (
//             <div className="w-full mt-2">
//               <button
//                 onClick={() => router.push("/profile")}
//                 className={`w-full px-4 py-2 ${
//                   isDarkMode
//                     ? "bg-gray-700 text-white"
//                     : "bg-blue-600 text-white"
//                 } rounded-lg`}
//               >
//                 Profile
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => router.push("sighin")}
//               className={`w-full mt-2 px-4 py-2 ${
//                 isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
//               } rounded-lg`}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
