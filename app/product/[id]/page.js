"use client";
import React, { useState, useEffect } from "react";
import ProductDetail from "../../../components/ProductDetail";
import ProductSection from "../../../components/ProductSection";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ProductDetailSkeleton from "@/components/skeletons/ProductDetailSkeleton";
import { useAppStore } from "@/store";

function Page() {
  const search = useSearchParams();
  const id = search.get("id");
  const [Prod, setProd] = useState({});
  const [loading, setloading] = useState(true);
  const isDarkMode = useAppStore((state) => state.night);

  const fetchData = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}/`;

    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setProd({
        name: result.name,
        price: result.price,
        oldPrice: result.oldPrice,
        image: result.image,
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

  if (loading) {
    return <ProductDetailSkeleton />;
  }
  return (
    <>
      <ProductDetail product={Prod} isDarkMode={isDarkMode} />
      <ProductSection isDarkMode={isDarkMode} />
    </>
  );
}

export default Page;
