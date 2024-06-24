"use client";
import React, { useState, useEffect } from "react";
import ProductDetail from "../../../components/ProductDetail";
import ProductSection from "../../../components/ProductSection";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// const product = {
//   name: "Gaming Controller",
//   price: "$29.99",
//   oldPrice: "$39.99",
//   images: [
//     "/images/controller.jpg",
//     "/images/controllerOne.jpg",
//     "/images/controllerTwo.jpg",
//     "/images/controllerThree.jpg",
//   ],
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet cursus purus, at gravida justo cursus et.",
//   discount: "25% OFF",
// };

function Page({ searchParams }) {
  const search = useSearchParams();
  const id = search.get("id");
  const [Prod, setProd] = useState({});
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const url = `http://127.0.0.1:8000/products/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setProd({
        name: result.name,
        price: result.price,
        oldPrice: result.oldPrice,
        images: [
          result.image,
          result.SecondImage,
          result.ThirdImage,
          result.FourthImage,
        ],
        description: result.description,
        discount: result.discount,
      });
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log("$$$$ Prod", Prod);
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <ProductDetail product={Prod} isDarkMode={true} />
      <ProductSection isDarkMode={true} />
    </>
  );
}

export default Page;
