import { getProductById, getReviewByProductId } from '@/utils/api';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  image_url: string;
  username: string;
}

export interface Review {
  user: User;
  rating: number;
  product_id: string;
  like_count: number;
  id: string;
  created_at: string;
  comment: string;
}

interface District {
  district_name: string;
  id: string;
  province_id: string;
  province_name: string;
}

interface Store {
  district: District;
  id: string;
  image_url: string;
  name: string;
  store_address: string;
}

interface VariantMedia {
  format_item: string;
  id: string;
  position: number;
  url: string;
  variant_option_id: number;
}

interface Variant {
  variant_name: string;
  bust: number;
  id: string;
  length: number;
  price: number;
  product_id: string;
  total_stocks: number;
  variant_medias: VariantMedia[];
}

export interface Product {
	average_rating: number;
  description: string;
	fabric: string;
	fit: string;
  id_active: boolean;
	id: number;
	name: string;
	price: number;
  reviews: Review[]
  store: Store;
	total_review: number;
  variant_options: Variant[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product: Product = await getProductById(id as string);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json( product );
}
