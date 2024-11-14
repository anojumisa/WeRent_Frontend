"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/router";

interface Product {
  id: number;
  title: string;
  image_designer: string;
  designer_name: string;
  rating: number;
  images: string[];
  price: number;
  passed: string;
  fit: string;
  dimensions: Dimensions;
}
interface Dimensions {
  size: number;
  waist: number;
  length: number;
}

export default function DetailProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    async function fetchAllProduct() {
      if (!id) return;
      try {
        const prodRes = await fetch(`/api/products/${id}`);
        if (!prodRes.ok) {
          throw new Error("Failed to fetch product");
        }
        const prodData = await prodRes.json();
        setProducts(prodData.products);
      } catch (error) {
        console.error("Error Fetch Products:", error);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    }

    fetchAllProduct();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isModalOpen
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  if (loading) {
    return <div>LOADING.....</div>;
  }

  if (error) {
    return <main>{error}</main>;
  }

  if (!products || products.length === 0) {
    return <main>No product data available.</main>;
  }

  const product = products[0];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-10">
        <div className="mx-auto lg:max-w-lg">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index} onClick={openModal}>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <img
                      src={img}
                      alt={img}
                      className="object-cover cursor-pointer w-[25rem] h-[35rem] p-3"
                    />
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2" />
          </Carousel>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 justify-center gap-10 p-10">
          <div className="flex flex-col font-sans">
            <div className="divide-y">
              <h1 className="text-sm md:text-lg lg:text-3xl mb-4 font-bold">
                {product.title}
              </h1>
              <div className="pt-5 flex justify-between">
                <div className=" grid">
                  <p className="text-xs md:text-sm lg:text-base">Rent Fee</p>
                  <h2 className="text-sm md:text-base lg:text-lg">
                    RP. {product.price} / Days
                  </h2>
                </div>
                <button className="text-sm md:text-base lg:text-lg px-10 bg-yellow-500 rounded">
                  ADD
                </button>
              </div>
            </div>
            <div className="text-xs md:text-base lg:text-lg grid">
              <div className="py-4 flex justify-between">
                <p className="font-bold">DESIGNERS</p>
                <p>VIEW THE COLLECTION</p>
              </div>
              <p
                className="bg-cover bg-center py-2 px-4 mb-4 w-full h-[5rem] p-3 font-Qwitcher"
                style={{ backgroundImage: `url(${product.image_designer})` }}
              >
                {product.designer_name}
              </p>
              <div className="border-t-2 border-black"></div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2" colSpan={2}>
                      PRODUCT DETAIL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold text-left w-1/2">PASSED</td>
                    <td className="text-right w-1/2">{product.passed}</td>
                  </tr>
                  <tr>
                    <td className="font-bold py-2 text-left w-1/2">FIT</td>
                    <td className="py-2 text-right w-1/2">{product.fit}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-4 px-5 text-sm md:text-base lg:text-lg">
              <table className="table-auto w-full border border-gray-800">
                <thead>
                  <tr>
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      SIZE
                    </th>
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      WAIST
                    </th>
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      LENGTH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.dimensions.size}
                    </td>
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.dimensions.waist} cm
                    </td>
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.dimensions.length} cm
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="relative lg:max-w-lg p-3"
            style={{ width: "90vw", maxWidth: "31.25rem" }}
          >
            <Carousel className="w-full justify-center">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index} onClick={openModal}>
                    {/* <Card> */}
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img
                        src={img}
                        alt={img}
                        className="object-cover cursor-pointer w-[25rem] h-[35rem] p-3"
                      />
                    </CardContent>
                    {/* </Card> */}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
