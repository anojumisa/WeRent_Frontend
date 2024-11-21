// FilterBar.tsx
import React, { useState } from "react";
import FilterButton from "@/fragments/FilterButton";

const FilterBar: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("All Reviews");

	const handleFilterChange = (filter: string) => {
		setActiveFilter(filter);
	};

	return (
		<div className="flex justify-between space-x-2 p-4 xl:space-x-4 xl:p-6 md:space-x-3 sm:space-x-2 ">
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
				label="Rating: All ▼"
				isActive={activeFilter === "Rating"}
				onClick={() => handleFilterChange("Rating")}
			/>
		</div>
	);
};

export default FilterBar;
