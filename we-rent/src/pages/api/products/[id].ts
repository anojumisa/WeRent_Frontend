import { NextApiRequest, NextApiResponse } from 'next';

const mockProducts = [
  {
    id: 1,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name: "Nadila airini",
    images: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 5000000,
    fabric: "SILK",
    fit: "TRUE TO SIZE",
    dimensions: { size: "M", bust: 50, length: 15 },
    average_rating: 4.5,
    average_review: 5,
    total_review: 3,
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at: "2024-02-01 05:17" },
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4", created_at: "2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at: "2024-02-01 05:17" }
    ]
  },
  {
    id: 2,
    title: "Black Kaftan With Embelishment",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name: "bobi santoso",
    images: "https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750000,
    fabric: "SILK",
    fit: "TRUE TO SIZE",
    dimensions: { size: "M", bust: 50, length: 15 },
    average_rating: 4.0,
    total_review: 3,
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at: "2024-02-01 05:17" },
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4", created_at: "2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at: "2024-02-01 05:17" }
    ]
  },
  // Produk lain diubah dengan cara yang sama
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ products: [product] });
}
