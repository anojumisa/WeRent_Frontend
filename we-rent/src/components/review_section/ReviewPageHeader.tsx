import React from "react";
import { useRouter } from "next/router";

interface ReviewProps {
	reviewCount?: number;
	rating?: number;
	sizeRatings?: {
		small?: number;
		trueToSize?: number;
		large?: number;
	};
	user?: {
		avatarUrl?: string;
		height?: number;
		weight?: number;
		measurements?: {
			bust?: number;
			waist?: number;
			hips?: number;
		};
	};
	comment: string;
	date: string;
	helpfulCount: number;
}

const ReviewPageHeader: React.FC<ReviewProps> = ({
	reviewCount = 5,
	rating = 3.8,
	sizeRatings = { small: 60, trueToSize: 90, large: 13 },
	user = {
		avatarUrl: "", // Default to an empty string or a placeholder image URL
		height: 0,
		weight: 0,
		measurements: {
			bust: 0,
			waist: 0,
			hips: 0,
		},
	},
	comment,
	date,
	helpfulCount,
}) => {
	const router = useRouter(); // Use Next.js router

	return (
		<div className="p-4">
			<div className="flex justify-between items-center border-b pb-4">
				{/* Updated Previous Button */}
				<button
					className="flex items-center rotate-90"
					onClick={() => router.back()} // Navigate to the previous page
				>
					<img src="/arrow.svg" alt="previous button" className="w-5" />
				</button>
				<h3 className="text-center text-lg font-semibold text-black flex-1">
					Reviews ({reviewCount})
				</h3>
			</div>
			<div className="flex items-center gap-2 my-2">
				<span className="text-black text-xl font-bold">{rating}</span>
				<div className="flex items-center">
					{Array.from({ length: 5 }).map((_, index) => (
						<span
							key={index}
							className={index < rating ? "text-yellow-500" : "text-gray-300"}
						>
							★
						</span>
					))}
				</div>
			</div>
			<h2 className="text-lg font-semibold text-black">Fit Scale</h2>
			<div className="flex items-center gap-4 mb-4">
				<div className="w-1/3">
					<div className="text-left text-gray-600 text-sm font-bold mb-1">
						{sizeRatings.small}%
					</div>
					<div className="relative w-full bg-gray-200 h-2 ">
						<div
							className="absolute left-0 top-0 h-2 rounded bg-green-600"
							style={{ width: `${sizeRatings.small}%` }}
						/>
					</div>
					<div className="text-gray-600 text-sm font-bold mt-1">Small</div>
				</div>
				<div className="w-1/3">
					<div className="text-left text-gray-600 text-sm font-bold mb-1">
						{sizeRatings.trueToSize}%
					</div>
					<div className="relative w-full bg-gray-200 h-2 ">
						<div
							className="absolute left-0 top-0 h-2 rounded bg-green-600"
							style={{ width: `${sizeRatings.trueToSize}%` }}
						/>
					</div>
					<div className="text-gray-600 text-sm font-bold mt-1">
						True to Size
					</div>
				</div>
				<div className="w-1/3">
					<div className="text-left text-gray-600 text-sm font-bold mb-1">
						{sizeRatings.large}%
					</div>
					<div className="relative w-full bg-gray-200 h-2 ">
						<div
							className="absolute left-0 top-0 h-2 rounded bg-green-600"
							style={{ width: `${sizeRatings.large}%` }}
						/>
					</div>
					<div className="text-gray-600 text-sm font-bold mt-1">Large</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewPageHeader;
