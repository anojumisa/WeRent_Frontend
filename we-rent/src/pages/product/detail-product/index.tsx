"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/router";
import StarRating from "./customrate";
import ReviewHeader from "@/components/review_section/header";
import FilterBar from "@/components/review_section/filter";
import ReviewBody from "@/components/review_section/review_body";

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
	review: Review[];
}

interface Dimensions {
	size: number;
	waist: number;
	length: number;
}
interface Review {
	user_avatar: string;
	user_name: string;
	comment: string;
	rating: string;
	created_at: string;
	user_height: number;
	user_weight: number;
	user_bust: number;
	user_waist: number;
	user_hip: number;
	user_rating: number;
	user_helpful: number;
	user_unhelpful: number;
}

export default function DetailProduct() {
	const router = useRouter();
	const { id } = router.query;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const modalRef = useRef<HTMLDivElement | null>(null);

	const openModal = (index: number) => {
		setCurrentImageIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => setIsModalOpen(false);

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
	const reorderedImages = [
		...product.images.slice(currentImageIndex),
		...product.images.slice(0, currentImageIndex),
	];
	

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-10 max-w-7xl mx-auto mt-10">
				<div className="mx-auto lg:max-w-lg">
					<Carousel className="w-full max-w-lg">
						<CarouselContent>
							{product.images.map((img, index) => (
								<CarouselItem key={index} onClick={() => openModal(index)}>
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
				<div className="flex flex-col justify-center">
					<div className="flex flex-col font-sans">
						<div className="divide-y">
							<h1 className="text-sm md:text-lg lg:text-3xl mb-4 font-bold text-black">
								{product.title}
							</h1>
							<div className="pt-5 flex justify-between items-center text-black">
								<div className="grid">
									<p className="text-xs md:text-sm lg:text-base">Rent Fee</p>
									<h2 className="text-sm md:text-base lg:text-lg">
										RP. {product.price.toLocaleString()} / Days
									</h2>
								</div>
								<button className="text-sm md:text-base lg:text-lg px-10 bg-yellow-500 rounded">
									ADD
								</button>
							</div>
						</div>
						<div className="text-xs md:text-base lg:text-lg grid gap-4 mt-4 text-black">
							<div className="flex justify-between items-center">
								<p className="font-bold">DESIGNERS</p>
								<p>VIEW THE COLLECTION</p>
							</div>
							<div
								className="bg-cover bg-center py-2 px-4 mb-4 w-full h-[5rem] p-3 font-Qwitcher"
								style={{ backgroundImage: `url(${product.image_designer})` }}
							>
								{product.designer_name}
							</div>
							<div className="border-t-2 border-black mt-4"></div>
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
						<div className="pt-4 px-5 text-sm md:text-base lg:text-lg text-black">
							<table className="table-auto w-full border  border-gray-800">
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

				<div className="review col-span-2 mb-0">
					<ReviewHeader comment={""} date={""} helpfulCount={0} />
					<FilterBar />
					
				</div>

				<div className="mt-8 col-span-2 space-y-12">
					{product.review && product.review.length > 0 ? (
						<ul className="space-y-4">
							{product.review.map((r, index) => (
								<li
									key={index}
									className="border border-gray-300 p-4 rounded-md flex "
								>
									<img
										src={r.user_avatar}
										alt=""
										className="w-12 h-12 rounded-full"
									/>
									<div className="ml-4 space-y-2">
										<p className="text-sm text-black font-semibold">
											{r.user_name}
										</p>
										<p className="text-sm text-yellow-500">
											<StarRating rating={parseFloat(r.rating)} />
										</p>
										<p className="text-xs text-gray-500">
											{r.user_height} cm {r.user_weight} kg {r.user_bust} cm/
											{r.user_waist} cm/{r.user_hip} cm
										</p>
										<p className="text-sm text-gray-600">{r.comment}</p>
										<p className="text-xs text-gray-400">{r.created_at}</p>
										<p className="text-sm text-yellow-500"></p>
									</div>
									<button
										className="text-sm text-gray-600 hover:text-gray-800 flex gap-2 pl-2 ml-auto mr-4"
									>
										<img src="/thumb_up.svg" alt="" /> ({r.user_helpful})
									</button>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-500">
							No reviews available for this product.
						</p>
					)}
				</div>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-opacity-65 hidden lg:flex items-center justify-center z-50">
					<div
						ref={modalRef}
						className="relative lg:max-w-lg p-3"
						style={{ width: "90vw", maxWidth: "31.25rem" }}
					>
						<Carousel className="w-full justify-center">
							<CarouselContent>
								{reorderedImages.map((img, index) => (
									<CarouselItem key={index}>
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
				</div>
			)}
		</>
	);
}
