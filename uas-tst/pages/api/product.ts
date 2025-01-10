import type { NextApiRequest, NextApiResponse } from 'next';

export interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  skinType: string[];
  price: number;
  description: string;
  imageUrl: string;
  ingredients: string[];
  rating: number;
  __v: number;
}

const skinmatchEndpoint = "https://skinmatch.up.railway.app/api/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_URL = skinmatchEndpoint;
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const products: Product[] = await response.json();

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    res.status(200).json(randomProduct);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
