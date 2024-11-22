import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  onClick?: (newRating: number) => void; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onClick }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index + 1); 
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <FaStar
              key={index}
              className="text-yellow-500 cursor-pointer"
              onClick={() => handleClick(index)}
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <FaStarHalfAlt
              key={index}
              className="text-yellow-500 cursor-pointer"
              onClick={() => handleClick(index)}
            />
          );
        } else {
          return (
            <FaRegStar
              key={index}
              className="text-gray-400 cursor-pointer"
              onClick={() => handleClick(index)}
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;