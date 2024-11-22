import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ProductResp } from "../api/products";

export default function ProductPage() {
  const [products, setProducts] = useState<ProductResp[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const maxProductsToShow = 10; // Limit to 10 products.

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        if (Array.isArray(response.data)) {
          setProducts(response.data.slice(0, maxProductsToShow)); // Show only the first 10 products.
        } else {
          throw new Error("Invalid product data");
        }
      } catch (error) {
        console.error("Error Fetch Products:", error);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return <div>LOADING.....</div>;
  }

  if (error) {
    return <main>{error}</main>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white">Our Daily Digest</h2>
      <div className="flex gap-8 overflow-x-auto text-black mt-14">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => handleProductClick(item.id)}
            className="min-w-[200px] max-w-[250px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 truncate">
                {item.name}
              </h2>
              <p className="text-base font-bold mb-2">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR'
                }).format(item.price)}/Day
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <p className="ml-1 text-sm">{new Intl.NumberFormat('en-US', {
                  style: 'decimal',
                  notation: 'compact'
                }).format(item.average_rating)}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              Check Details
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
