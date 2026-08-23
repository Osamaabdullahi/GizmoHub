"use client";
import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaNetworkWired,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaFilter,
} from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import useCartStore from "@/store";
import ProductCategorySkeleton from "@/components/skeletons/ProductCategorySkeleton";
import { toast } from "react-toastify";

const CATEGORIES = [
  { icon: FaMobileAlt, label: "Mobile Phones" },
  { icon: FaLaptop, label: "Laptops" },
  { icon: FaHeadphones, label: "Headphones" },
  { icon: FaTabletAlt, label: "Tablets" },
  { icon: FaNetworkWired, label: "Networking" },
  { icon: FaGamepad, label: "PC Gaming" },
];

const PRICE_RANGES = [
  { value: "", label: "Any price" },
  { value: "0-50", label: "$0 - $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "100-200", label: "$100 - $200" },
  { value: "200-", label: "$200 and above" },
];

const formatPrice = (price) => {
  const num = Number(price);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : price;
};

const Product = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    // A new search from the navbar should reset any category filter so the
    // results reflect what was actually typed.
    setCategory("");
  }, [query]);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setError(false);
      try {
        const params = new URLSearchParams();
        if (category) {
          params.set("category", category);
        } else if (query) {
          params.set("name", query);
        }
        if (priceRange) params.set("price_range", priceRange);

        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const result = await response.json();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(true);
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [category, query, priceRange]);

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4">
        {query && (
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing results for <span className="font-semibold">&ldquo;{query}&rdquo;</span>
          </p>
        )}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <aside className="w-full md:w-1/5 shrink-0">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden w-full flex items-center justify-between px-4 py-3 mb-3 rounded-lg bg-white dark:bg-gray-900 shadow-sm text-gray-800 dark:text-white"
            >
              <span className="flex items-center gap-2 font-medium">
                <FaFilter /> Filters
              </span>
              {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className={`${
                isFilterOpen ? "block" : "hidden"
              } md:block bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm space-y-6`}
            >
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory("")}
                      className={`flex items-center gap-2 text-sm w-full text-left ${
                        category === ""
                          ? "text-brand-600 font-semibold"
                          : "text-gray-700 dark:text-gray-300"
                      } hover:underline`}
                    >
                      All Products
                    </button>
                  </li>
                  {CATEGORIES.map(({ icon: Icon, label }) => (
                    <li key={label}>
                      <button
                        onClick={() => setCategory(label)}
                        className={`flex items-center gap-2 text-sm w-full text-left ${
                          category === label
                            ? "text-brand-600 font-semibold"
                            : "text-gray-700 dark:text-gray-300"
                        } hover:underline`}
                      >
                        <Icon /> {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  Price Range
                </h3>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {PRICE_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="w-full md:w-4/5">
            {error ? (
              <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                Couldn&apos;t load products right now. Please try again shortly.
              </div>
            ) : !data ? (
              <ProductCategorySkeleton />
            ) : data.length === 0 ? (
              <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                No products match these filters.
              </div>
            ) : (
              <ProductGrid data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const ProductGrid = ({ data }) => {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleClick = (id, name) => {
    const params = new URLSearchParams({ id });
    router.push(`/product/${name}?${params.toString()}`);
  };

  const handleAddToCart = (name, id, image, price) => {
    addItem({ id, name, price, image, quantity: 1 });
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div
          key={product.id ?? product.name}
          className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div onClick={() => handleClick(product.id, product.name)} className="cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 dark:text-white">
              {product.name}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-bold text-brand-600 dark:text-brand-400">
                {formatPrice(product.price)}
              </p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through">{formatPrice(product.oldPrice)}</p>
              )}
            </div>
            {product.discount && (
              <div className="mt-2 inline-block px-2 py-1 bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200 rounded-lg text-sm">
                {product.discount}
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() =>
                handleAddToCart(product.name, product.id, product.image, product.price)
              }
              className="bg-brand-600 text-white py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Add to Cart
            </button>
            <FaHeart className="text-red-500 cursor-pointer hover:text-red-700" />
          </div>
        </div>
      ))}
    </div>
  );
};
