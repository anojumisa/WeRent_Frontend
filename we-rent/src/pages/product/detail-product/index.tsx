"use client";
import { useState } from "react";
interface Product {
  id: number;
  name: string;
  image: { src: string; alt: string; bgColor: string }[];
  fee: string;
  Desainer: string;
  designerImage: string;
  passed: string;
  Fit: string;
  size: string;
  width: number;
  length: number;
}

const product: Product = {
  id: 1,
  name: "Lorem Ipsum",
  image: [
    {
      src: "https://via.placeholder.com/400",
      alt: "PRODUCT 1",
      bgColor: "bg-green-500",
    },
    {
      src: "https://via.placeholder.com/400",
      alt: "PRODUCT 2",
      bgColor: "bg-yellow-500",
    },
    {
      src: "https://via.placeholder.com/400",
      alt: "PRODUCT 3",
      bgColor: "bg-red-500",
    },
  ],
  fee: "300.000",
  Desainer: "n atelier",
  designerImage: "https://via.placeholder.com/400",
  passed: "5UK",
  Fit: "TRUN FIT-SIZE",
  size: "M",
  width: 36,
  length: 39,
};

export default function DetailProduct() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === product.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 justify-center gap-10 p-10">
          <div className="relative">
            <div
              className={`flex justify-center overflow-hidden p-5 ${product.image[currentSlide].bgColor}`}
              onClick={openModal}
            >
              <img
                src={product.image[currentSlide].src}
                alt={product.image[currentSlide].alt}
                className="object-cover cursor-pointer"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            <a
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white cursor-pointer z-10"
              onClick={prevSlide}
            >
              &#10094;
            </a>
            <a
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white cursor-pointer z-10"
              onClick={nextSlide}
            >
              &#10095;
            </a>
          </div>
          <div className="flex flex-col font-sans">
            <div className="divide-y">
              <h1 className="text-3xl mb-4 font-bold ">{product.name}</h1>
              <div className="flex justify-between">
                <div className="grid">
                  <p className="text-sm">Rent Fee</p>
                  <h2>RP. {product.fee}/ Day</h2>
                </div>
                <div className="p-2">
                  {" "}
                  <button className="px-6 bg-yellow-500 rounded">ADD</button>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex justify-between">
                <p className="font-bold ">DESIGNERS</p>
                <p>VIEW THE COLECTION</p>
              </div>
              <div>
                <p
                  className="bg-cover bg-center py-2 px-4 mb-4 font-Qwitcher"
                  style={{ backgroundImage: `url(${product.designerImage})` }}
                >
                  {product.Desainer}
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
                      <td className=" font-bold text-left w-1/2">PASSED</td>
                      <td className="text-right w-1/2">{product.passed}</td>
                    </tr>
                    <tr>
                      <td className=" font-bold py-2 text-left w-1/2">FIT</td>
                      <td className=" py-2 text-right w-1/2">{product.Fit}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 px-5">
              {" "}
              <table className="table-auto w-full border border-gray-800">
                {" "}
                <thead>
                  {" "}
                  <tr>
                    {" "}
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      SIZE
                    </th>{" "}
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      WIDTH
                    </th>{" "}
                    <th className="border-b border-gray-800 px-4 py-2 text-center">
                      LENGTH
                    </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  <tr>
                    {" "}
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.size}
                    </td>{" "}
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.width} cm
                    </td>{" "}
                    <td className="border-b border-gray-800 px-4 py-2 text-center">
                      {product.length} cm
                    </td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>
          </div>
        </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-4 bg-white rounded">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={product.image[currentSlide].src}
              alt={product.image[currentSlide].alt}
              className="object-cover"
              style={{ maxWidth: "90vw", maxHeight: "80vh" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
