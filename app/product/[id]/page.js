"use client";
import React, { useEffect, useState } from "react";
import ProductDetail from "@/components/ProductDetail";
import ProductSection from "@/components/ProductSection";
import { useSearchParams } from "next/navigation";
import ProductDetailSkeleton from "@/components/skeletons/ProductDetailSkeleton";

function Page() {
  const search = useSearchParams();
  const id = search.get("id");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setError(false);
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}/`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const result = await response.json();
        if (cancelled) return;
        setProduct({
          id: result.id,
          name: result.name,
          price: result.price,
          oldPrice: result.oldPrice,
          image: result.image,
          images: [result.image, result.SecondImage, result.ThirdImage, result.FourthImage],
          description: result.description,
          discount: result.discount,
        });
      } catch (err) {
        if (!cancelled) setError(true);
      }
    };
    if (id) fetchData();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (error) {
    return (
      <div className="py-24 text-center text-gray-500 dark:text-gray-400">
        Couldn&apos;t load this product right now. Please try again shortly.
      </div>
    );
  }

  if (!product) {
    return <ProductDetailSkeleton />;
  }

  return (
    <>
      <ProductDetail product={product} />
      <ProductSection title="You might also like" />
    </>
  );
}

export default Page;
