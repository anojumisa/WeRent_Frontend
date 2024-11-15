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
		className={`px-10 py-2  font-medium ${
			isActive ? "bg-[#CDAA44] text-white" : "bg-[#D9D9D9] text-black"
		}`}
	>
		{label}
	</button>
);

export default FilterButton;
