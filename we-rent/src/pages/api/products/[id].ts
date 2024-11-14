import { NextApiRequest, NextApiResponse } from 'next';

const mockProducts = [
  {
    id: 1,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 }
  },
  {
    id: 2,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
  },
  {
    id: 3,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
  },
  {
    id: 4,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

 
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ products: [product] });
}
