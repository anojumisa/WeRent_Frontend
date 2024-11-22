// @ts-ignore
import React, { useState } from 'react';
import Modal from 'react-modal';

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedRating, setSelectedRating] = useState(0); 

const RatingModal = () => {
	const handleRatingClick = (rating: number) => {
		setSelectedRating(rating);
		setIsModalOpen(false); // Close the modal after selecting a rating
		// Handle the selected rating here, e.g., update the filter or API call
	};

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={() => setIsModalOpen(false)}
			contentLabel="Select Rating"
		>
			<h2>Select a Rating</h2>
			<div className="star-rating">
				{[1, 2, 3, 4, 5].map((i) => (
					<button
						key={i}
						onClick={() => handleRatingClick(i)}
						className={`star ${i <= selectedRating ? "selected" : ""}`}
					>
						★
					</button>
				))}
			</div>
		</Modal>
	);
};
