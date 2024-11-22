import React, { useState, useEffect, useRef } from "react";
import FilterButton from "@/fragments/FilterButton";

interface FilterBarProps {
	onFilterChange: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
	const [activeFilter, setActiveFilter] = useState("All Reviews");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsModalOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleFilterChange = (filter: string) => {
		if (filter === "Rating: All") {
			setIsModalOpen(true);
		} else {
			setActiveFilter(filter);
			onFilterChange(filter);
		}
	};

	const handleRatingSelect = (rating: number | null) => {
		setSelectedRating(rating);
		setIsModalOpen(false);

		if (rating === null) {
			setActiveFilter("All Reviews");
			onFilterChange("All Reviews");
		} else {
			setActiveFilter(`${rating} Stars`);
			onFilterChange(`${rating} Stars`);
		}
	};

	const StarIcon = () => (
		<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
		</svg>
	);

	return (
		<div className="relative">
			<div className="flex justify-between space-x-2 p-4 xl:space-x-4 xl:p-6 md:space-x-3 sm:space-x-2">
				<FilterButton
					label="All Reviews"
					isActive={activeFilter === "All Reviews"}
					onClick={() => handleFilterChange("All Reviews")}
				/>
				<FilterButton
					label="Photos/Videos"
					isActive={activeFilter === "Photos/Videos"}
					onClick={() => handleFilterChange("Photos/Videos")}
				/>
				<FilterButton
					label="Newest Reviews"
					isActive={activeFilter === "Newest Reviews"}
					onClick={() => handleFilterChange("Newest Reviews")}
				/>
				<FilterButton
					label={`Rating: ${
						selectedRating ? `${selectedRating} Stars` : "All"
					} ▼`}
					isActive={activeFilter.includes("Stars")}
					onClick={() => handleFilterChange("Rating: All")}
				/>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 text-black">
					<div
						ref={modalRef}
						className="bg-white rounded-lg p-6 w-80 space-y-4 shadow-lg"
					>
						<h3 className="text-lg font-semibold mb-4 text-center">Select Rating</h3>

						{[5, 4, 3, 2, 1].map((rating) => (
							<label
								key={rating}
								className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md cursor-pointer group"
							>
								<input
									type="radio"
									name="rating"
									value={rating}
									checked={selectedRating === rating}
									onChange={() => handleRatingSelect(rating)}
									className="w-4 h-4 mr-4 text-black border-gray-300 focus:ring-black accent-black"
								/>
								<div className="flex items-center flex-1">
									<div className="flex">
										{[...Array(5)].map((_, index) => (
											<div
												key={index}
												className={`${
													index < rating ? "text-yellow-400" : "text-gray-300"
												} group-hover:scale-105 transition-transform`}
											>
												<StarIcon />
											</div>
										))}
									</div>
									<span className="ml-3">{rating} Stars</span>
								</div>
							</label>
						))}

						<label className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md cursor-pointer mt-2">
							<input
								type="radio"
								name="rating"
								checked={selectedRating === null}
								onChange={() => handleRatingSelect(null)}
								className="w-4 h-4 mr-4 text-black border-gray-300 focus:ring-black accent-black"
							/>
							<span className="text-gray-600">Show All Ratings</span>
						</label>
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterBar;
