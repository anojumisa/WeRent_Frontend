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
		className={`xl:px-4 md:px-3 sm:px-2 sm:text-sm px-4 py-1 ${
			isActive ? "bg-[#CDAA44] text-white" : "bg-[#D9D9D9] text-black"
		}`}
	>
		{label}
	</button>
);

export default FilterButton;
