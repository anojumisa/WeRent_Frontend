import React from "react";

interface FilterButtonProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	label,
	isActive,
	onClick,
}) => (
	<button
		onClick={onClick}
		className={`px-4 py-1 w-4/12 h-10 flex items-center justify-center sm:flex-col md:flex-row ${
			isActive ? "bg-[#CDAA44] text-white" : "bg-[#D9D9D9] text-black"
		}`}
	>
		{label}
	</button>
);

export default FilterButton;
