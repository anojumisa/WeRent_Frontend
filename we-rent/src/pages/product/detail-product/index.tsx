"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import StarRating from "./customrate";
import ReviewHeader from "@/components/review_section/header";
import FilterBar from "@/components/review_section/filter";

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
	user_helpful: number;
	user_unhelpful: number;
	media: string[];
}

interface ImageModalProps {
	isOpen: boolean;
	imageSrc: string;
	onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
	isOpen,
	imageSrc,
	onClose,
}) => {
	if (!isOpen) return null;

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).id === "modal-overlay") {
			onClose();
		}
	};

	return (
		<div
			id="modal-overlay"
			onClick={handleClickOutside}
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative bg-white p-4 rounded"
			>
				<button onClick={onClose} className="absolute top-2 right-2 text-black">
					&times;
				</button>
				<img
					src={imageSrc}
					alt="Review media"
					className="max-w-full max-h-screen"
				/>
			</div>
		</div>
	);
};

export default function DetailProduct() {
	const router = useRouter();
	const { id } = router.query;

	// States
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
	const [filterType, setFilterType] = useState<string>("All Reviews");

	const [currentPage, setCurrentPage] = useState(1);
	const reviewsPerPage = 5;

	// Modal State
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	// Fetch Product Data
	useEffect(() => {
		async function fetchProduct() {
			if (!id) return;
			try {
				const prodRes = await axios.get(`/api/products/${id}`);
				const productData = prodRes.data.products[0];
				setProducts(prodRes.data.products);
				setFilteredReviews(productData.review); // Initialize with all reviews
			} catch (error) {
				console.error("Error Fetching Product:", error);
				setError("Error loading product.");
			} finally {
				setLoading(false);
			}
		}
		fetchProduct();
	}, [id]);

	// Filter Change Handler
	const handleFilterChange = (filter: string) => {
		setFilterType(filter);
		const product = products[0];
		if (!product) return;

		let filtered = product.review;

		if (filter === "Photos/Videos") {
			filtered = product.review.filter((r) => r.media && r.media.length > 0);
		} else if (filter === "Newest Reviews") {
			filtered = [...product.review].sort(
				(a, b) =>
					new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			);
		} else if (filter === "Rating") {
			filtered = product.review.filter((r) => parseFloat(r.rating) >= 4);
		} else if (filter.includes("Stars")) {
			const rating = parseInt(filter.split(" ")[0]);
			filtered = product.review.filter(
				(r) => Math.round(parseFloat(r.rating)) === rating
			);
		}

		setFilteredReviews(filtered);
		setCurrentPage(1); // Reset pagination to the first page
	};

	// Pagination logic
	const totalReviews = filteredReviews.length;
	const indexOfLastReview = currentPage * reviewsPerPage;
	const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
	const currentReviews = filteredReviews.slice(
		indexOfFirstReview,
		indexOfLastReview
	);
	const totalPages = Math.ceil(totalReviews / reviewsPerPage);

	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) setCurrentPage(page);
	};

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedImage("");
	};

	// Loading State
	if (loading) {
		return <div>Loading...</div>;
	}

	// Error State
	if (error) {
		return <main>{error}</main>;
	}

	// No Product Data
	if (!products || products.length === 0) {
		return <main>No product data available.</main>;
	}

	const product = products[0];

	return (
		<>
			{/* Product Details Section */}
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 p-0 lg:p-10 max-w-7xl mx-auto text-black bg-white mt-20">
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
					{/* Product Info */}
					<div className="flex flex-col font-sans">
						<div className="grid px-2">
							<h1 className="text-2xl font-bold text-gray-800 mb-2 font-sans">
								{product.title}
							</h1>
							<div className="flex items-center">
								<StarRating rating={product.average_rating} />
								<span className="ml-2 text-sm text-gray-400">
									{product.total_review} REVIEWS
								</span>
							</div>
						</div>
						{/* Additional Info */}
						<div className="pt-4 border-b-2 border-black flex justify-between text-xs">
							<p>{product.dimensions.size}</p>
							<p>VIEW SIZE GUIDE</p>
						</div>

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

					{/* Size and Details */}
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
			<div className="fixed bottom-0 inset-x-0 h-16 lg:hidden left-0 right-0 bg-white z-10 py-10 px-8 flex justify-between items-center border-t text-black">
				<div className="grid">
					<p className="text-xs md:text-sm">Rent Fee</p>
					<h2 className="text-base md:text-lg font-bold">
						Rp {product.price.toLocaleString("id-ID")}/ Day
					</h2>
				</div>
				<button className="text-xs md:text-sm px-4 py-2 bg-yellow-500 rounded">
					ADD
				</button>
			</div>

			{/* Reviews Section */}
			<div className="review col-span-2 mb-0 p-10">
				<ReviewHeader comment="" date="" helpfulCount={0} />
				<FilterBar onFilterChange={handleFilterChange} />
			</div>

			{/* Filtered Reviews */}
			<div className="mt-8 col-span-2 space-y-6 p-10 text-black">
				{currentReviews.map((review, index) => (
					<div key={index} className="border p-4 rounded-md flex">
						<img
							src={review.user_avatar}
							alt={review.user_name}
							className="w-12 h-12 rounded-full"
						/>
						<div className="ml-4 place-items-start">
							<h4 className="font-semibold">{review.user_name}</h4>
							<StarRating rating={parseFloat(review.rating)} />
							<p className="text-sm text-gray-500">
								{review.user_height} cm, {review.user_weight} kg,{" "}
								{review.user_bust} cm/
								{review.user_waist} cm/{review.user_hip} cm
							</p>
							<p>{review.comment}</p>
							<div className="w-24">
								<img
									src={review.media[0]}
									alt=""
									onClick={() => handleImageClick(review.media[0])}
									className="cursor-pointer"
								/>
							</div>

							<p className="text-xs text-gray-400">{review.created_at}</p>
						</div>
						<div className="flex justify-end ml-auto">
							<button className="text-sm text-gray-600 hover:text-gray-800 flex gap-2 pl-2 ml-auto mr-4">
								<img src="/thumb_up.svg" alt="" /> ({review.user_helpful})
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="mt-6 flex justify-center items-center space-x-4 text-black mb-10">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
				>
					Previous
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
			<ImageModal
				isOpen={isModalOpen}
				imageSrc={selectedImage}
				onClose={handleCloseModal}
			/>
		</>
	);
}
