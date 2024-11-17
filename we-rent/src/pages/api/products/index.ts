import { NextApiRequest, NextApiResponse } from 'next';

const mockProducts = [
  {
    id: 1,
    title: "WEDDING DRESS ZALORA",
    thumbnail: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    average_rating: 4.5,
    price: 5000000,
  },
  {
    id: 2,
    title: "BLAZZER ZARA",
    average_rating: 4.0,
    thumbnail: "https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750000,
  },
  {
    id: 3,
    title: "MINI DRESS PINK",
    average_rating: 5.0,
    thumbnail: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 3050000,
  },
  {
    id: 4,
    title: "INDIAN DRESS",
    average_rating: 4.3,
    thumbnail: "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 670000,
  },
  {
    id: 5,
    title: "WEDDING DRESS ZALORA",
    thumbnail: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    average_rating: 4.5,
    price: 5000000,
  },
  {
    id: 6,
    title: "BLAZZER ZARA",
    average_rating: 4.0,
    thumbnail: "https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750000,
  },
  {
    id: 7,
    title: "MINI DRESS PINK",
    average_rating: 5.0,
    thumbnail: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 3050000,
  },
  {
    id: 8,
    title: "INDIAN DRESS",
    average_rating: 4.3,
    thumbnail: "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 670000,
  },
  {
    id: 9,
    title: "WEDDING DRESS ZALORA",
    thumbnail: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    average_rating: 4.5,
    price: 5000000,
  },
  {
    id: 10,
    title: "BLAZZER ZARA",
    average_rating: 4.0,
    thumbnail: "https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750000,
  },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ products: mockProducts });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
