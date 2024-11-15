'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); 
  const [rowsPerPage] = useState(5); 

  const handleProductClick = (id: number) => {
    router.push(`/product/detail-product?id=${id}`);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
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

 
  const indexOfLastProduct = currentPage * productsPerPage * rowsPerPage;
  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage * rowsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    products.length / (productsPerPage * rowsPerPage)
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item.id)}
              className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover"
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

  
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                if (currentPage === 1)
                  e.preventDefault();
                else handlePageChange(currentPage - 1);
              }}
              className={currentPage === 1 ? "cursor-not-allowed" : ""}
            />
          </PaginationItem>

          {[...Array(totalPages).keys()].map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(pageNumber + 1)}
                className={
                  currentPage === pageNumber + 1 ? "bg-blue-500 text-white" : ""
                }
              >
                {pageNumber + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                if (currentPage === totalPages)
                  e.preventDefault(); 
                else handlePageChange(currentPage + 1);
              }}
              className={currentPage === totalPages ? "cursor-not-allowed" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
