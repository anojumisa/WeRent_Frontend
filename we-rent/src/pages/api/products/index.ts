import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts } from '@/utils/api';

export interface ProductResp {
  average_rating: number;
  id: string;
  image_url: string;
  is_active: boolean;
  name: string;
  price: number;
  store_name: string;
  total_reviews: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products: ProductResp[] = await getAllProducts();
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
