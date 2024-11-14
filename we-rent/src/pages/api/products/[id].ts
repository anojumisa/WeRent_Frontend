import { NextApiRequest, NextApiResponse } from 'next';

const mockProducts = [
  {
    id: 1,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 2,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 3,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 4,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 5,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 6,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 7,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 8,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 9,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 10,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 11,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 12,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 13,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 14,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 15,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 16,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 17,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 18,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 19,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 20,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 21,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 22,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 23,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 24,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 25,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 26,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 27,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 28,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 29,
    title: "WEDDING DRESS ZALORA",
    image_designer: "https://images.pexels.com/photos/4556683/pexels-photo-4556683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"Nadila airini",
    average_rating: 4.5,
    images: ["https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 5000000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 30, waist: 40, length: 10 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 30,
    title: "BLAZZER ZARA",
    image_designer: "https://images.pexels.com/photos/7716946/pexels-photo-7716946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"bobi santoso",
    avarage_rating: 4.0,
    images: ["https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 750000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 31,
    title: "MINI DRESS PINK",
    image_designer: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"afina natalie",
    average_rating: 5.0,
    images: ["https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 3050000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
  },
  {
    id: 32,
    title: "INDIAN DRESS",
    image_designer: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designer_name:"alvin makaron",
    average_rating: 4.3,
    images: ["https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    price: 670000,
    passed:"5UK",
    fit:"turn on size",
    dimensions: { size: 20, waist: 50, length: 15 },
    review: [
      { user_name: "adela", comment: "Perfect fit and elegant design!", rating: "5", created_at:"2024-02-01 05:17"},
      { user_name: "sofia", comment: "The dress was stunning and very comfortable.", rating: "4",created_at:"2024-02-01 05:17" },
      { user_name: "mila", comment: "Loved the fabric quality. Worth the price!", rating: "3", created_at:"2024-02-01 05:17"}
    ]
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
