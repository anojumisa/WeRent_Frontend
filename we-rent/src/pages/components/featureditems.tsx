"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface FeaturedProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

const FeaturedItems: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("/api/featured-products");
        setFeaturedProducts(response.data);
      } catch (err) {
        console.error("Error fetching featured products:", err);
        setError("Unable to load featured products.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (featuredProducts.length === 0) {
    return <div>No featured products available.</div>;
  }

  return (
    <div className="featured-products-container p-5">
      <h2 className="text-xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="featured-product-card border border-gray-300 rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-40 rounded-md"
            />
            <div className="mt-3">
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">Rp. {product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
