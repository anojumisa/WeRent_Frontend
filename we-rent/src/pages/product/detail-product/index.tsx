"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import StarRating from "./customrate";

interface Product {
  id: number;
  title: string;
  image_designer: string;
  designer_name: string;
  rating: number;
  images: string;
  price: number;
  fabric: string;
  fit: string;
  dimensions: Dimensions;
  review: Review[];
  total_review: number;
  average_rating: number;
}

interface Dimensions {
  size: string;
  bust: number;
  length: number;
}
interface Review {
  user_name: string;
  comment: string;
  rating: string;
  created_at: string;
}

export default function DetailProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProduct() {
      if (!id) return;
      try {
        const prodRes = await axios.get(`/api/products/${id}`);
        setProducts(prodRes.data.products);
      } catch (error) {
        console.error("Error Fetch Products:", error);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    }

    fetchAllProduct();
  }, [id]);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-0 lg:p-10 max-w-7xl mx-auto text-black bg-white ">
        <div className="relative mx-auto lg:max-w-lg w-full bg-white">
          <button
            onClick={() => router.push("/product")}
            className="sticky top-0 w-full bg-white px-8 py-4 text-lg font-bold text-left z-20 lg:hidden"
          >
            ❮
          </button>
          <img
            src={product.images}
            alt={product.title}
            className="object-cover w-full h-[35rem]"
          />
        </div>
        <div className="flex flex-col justify-center px-8 lg:p-0">
          <div className="flex flex-col font-sans">
            <div className="grid px-2">
              <h1 className="text-2xl font-bold text-gray-800 mb-2 font-sans">
                {product.title}
              </h1>

              <div className="flex items-center">
                <StarRating rating={product.average_rating} />
                <span className="ml-2 text-sm text-gray-400 ">
                  {product.total_review} REVIEWS
                </span>
              </div>
            </div>
            <div className="hidden lg:flex bottom-0 bg-white w-full z-10 py-4 flex justify-between items-center">
              <div className="grid">
                <p className="text-xs md:text-sm lg:text-base">Rent Fee</p>
                <h2 className="text-sm md:text-base lg:text-lg">
                  RP. {product.price.toLocaleString()}/ Days
                </h2>
              </div>
              <button className="text-sm md:text-base lg:text-lg px-10 bg-yellow-500 rounded">
                ADD
              </button>
            </div>
            <div className="pt-4 border-b-2 border-black flex justify-between text-xs">
              <p>{product.dimensions.size}</p> <p>VIEW SIZE GUIDE</p>
            </div>
            <div className="text-xs md:text-base lg:text-lg grid gap-4 mt-4">
              <div className="flex justify-between items-center">
                <p className="font-bold">DESIGNERS</p>
                <p>VIEW THE COLLECTION</p>
              </div>
              <div
                className="bg-cover bg-center mb-4 w-full h-[5rem] font-Qwitcher text-2xl flex items-center"
                style={{ backgroundImage: `url(${product.image_designer})` }}
              >
                <span className="pl-4">{product.designer_name}</span>
              </div>

              <div className="border-t-2 border-black mt-0"></div>
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
                    <td className="font-bold text-left w-1/2">FABRIC</td>
                    <td className="text-right w-1/2">{product.fabric}</td>
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
                      BUST
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
                      {product.dimensions.bust} cm
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
        <div className="sticky relative border border-b-0 inset-x-0 top-0 bottom-0 h-16 lg:hidden left-0 right-0 bg-white  z-10 py-10 px-8 flex justify-between items-center">
          <div className="grid">
            <p className="text-xs md:text-sm">Rent Fee</p>
            <h2 className="text-base md:text-lg font-bold">
              RP. {product.price.toLocaleString()}/ Days
            </h2>
          </div>
          <button className="text-xs md:text-sm px-4 py-2 bg-yellow-500 rounded">
            ADD
          </button>
        </div>
      </div>
     
    </>
  );
}
