"use client";

import React from "react";
import ProductDetail from "../../../components/ProductDetail";
import ProductSection from "../../../components/ProductSection";
const product = {
  name: "Gaming Controller",
  price: "$29.99",
  oldPrice: "$39.99",
  images: [
    "/images/controller.jpg",
    "/images/controllerOne.jpg",
    "/images/controllerTwo.jpg",
    "/images/controllerThree.jpg",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet cursus purus, at gravida justo cursus et.",
  discount: "25% OFF",
};

function page() {
  return (
    <>
      <ProductDetail product={product} />
      <ProductSection />
    </>
  );
}

export default page;
