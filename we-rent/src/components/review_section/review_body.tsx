import React, { useState } from "react";
import { mockProducts } from "@/pages/api/products/[id]"; 

interface ReviewProps {
	user?: {
		avatarUrl?: string;
		height?: number;
		weight?: number;
		measurements?: {
			bust?: number;
			waist?: number;
			hips?: number;
		};
		productUrl?: string;
	};
	rating: number;
	comment?: string;
	date: string;
	helpfulCount: number;
}

const ReviewBody: React.FC<ReviewProps> = ({
	user = {
		avatarUrl: "https://skrol.id/pictures/logo/65/6537283712d45.png",
		height: 170,
		weight: 70,
		measurements: { bust: 88, waist: 78, hips: 110 },
	},
	rating = 3,
	comment = "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
	date = "2023-06-01",
	helpfulCount = 6,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	// Toggle function for "Read more" / "Read less"
	const handleToggleReadMore = () => {
		setIsExpanded((prev) => !prev);
	};

	// Show full comment if expanded, otherwise show truncated
	const displayedComment = isExpanded ? comment : `${comment.slice(0, 150)}...`;
	const showReadMore = comment.length > 150;

	return (
		<div className="p-4 border rounded-md bg-white shadow-sm">
			<div className="flex items-start">
				<img
					src={user.avatarUrl || "/path/to/placeholder-image.jpg"}
					alt="User avatar"
					className="w-12 h-12 rounded-full mr-4"
				/>
				<div className="flex-1">
					{/* Rating */}
					<div className="flex items-center mb-1">
						{Array.from({ length: 5 }).map((_, index) => (
							<span
								key={index}
								className={index < rating ? "text-yellow-500" : "text-gray-300"}
							>
								★
							</span>
						))}
					</div>

					{/* User Info */}
					<div className="text-gray-400 text-xs mb-2">
						{user.height} CM {user.weight} KG {user.measurements?.bust} /{" "}
						{user.measurements?.waist} / {user.measurements?.hips} CM
					</div>

					{/* Comment */}
					<p className="text-gray-800 mb-2">
						{displayedComment}
						{comment.length > 150 && (
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleToggleReadMore();
								}}
								className="text-green-600 ml-1"
							>
								{isExpanded ? " Read less" : " Read more >"}
							</a>
						)}
					</p>

					<img src="https://skrol.id/pictures/logo/65/6537283712d45.png" alt="" className="w-20"/>

					{/* Date */}
					<div className="flex items-center text-gray-400 text-xs">
						<span>{date}</span>
					</div>
				</div>

				<div>
					{/* Helpful Count */}
					<div className="ml-auto flex items-end">
						<img src="/thumb_up.svg" alt="Thumb Up" />

						<span className="text-gray-900 text-sm ml-1">({helpfulCount})</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewBody;