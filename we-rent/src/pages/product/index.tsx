import React, { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  rating: number;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProduct() {
      try {
        const prodRes = await fetch("https://dummyjson.com/products");
        if (!prodRes.ok) {
          throw new Error("Failed to fetch products");
        }
        const prodData = await prodRes.json();
        setProducts(prodData.products); // ambil array products dari response API
      } catch (error) {
        console.error("Error Fetch Products:", error);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    }

    fetchAllProduct(); // panggil fungsi fetchAllProduct di sini
  }, []);

  if (loading) {
    return <div>LOADING.....</div>;
  }

  if (error) {
    return <main>{error}</main>;
  }

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg mb-2">{item.title}</h2>
                <p className="text-sm"><span>⭐</span> {item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
