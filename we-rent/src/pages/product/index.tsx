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
import { FaSpinner } from "react-icons/fa";
import { ProductResp } from "../api/products";
import { faker } from '@faker-js/faker';

export default function ProductPage() {
  const [products, setProducts] = useState<ProductResp[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); 
  const [rowsPerPage] = useState(5); 

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        if (Array.isArray(response.data)) {
          setProducts(response.data);
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
    return <FaSpinner />;
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-black mt-14">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item.id)}
              className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <img
                src={item.image_url}
                alt={faker.image.urlPicsumPhotos({ height: 200, width: 200 })}
                className="w-full h-56 object-cover"
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
                  currentPage === pageNumber + 1 ? "bg-teal-500 text-white" : ""
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
