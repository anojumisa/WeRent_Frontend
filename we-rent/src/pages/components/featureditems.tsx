import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  average_rating: number;
  thumbnail: string;
  price: number;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const maxProductsToShow = 10; // Limit to 10 products.

  const handleProductClick = (id: number) => {
    router.push(`/product/detail-product?id=${id}`);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products.slice(0, maxProductsToShow)); // Show only the first 10 products.
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
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 truncate">
                {item.title}
              </h2>
              <p className="text-base font-bold mb-2">
                Rp. {item.price.toLocaleString()}/Day
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <p className="ml-1 text-sm">{item.average_rating}</p>
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
