"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Product } from '@/pages/api/product';
import ProductCard from './product-card';

interface PhotoPopupProps {
  image: string;
  onClose: () => void;
}

const PhotoPopup: React.FC<PhotoPopupProps> = ({ image, onClose }) => {
  const [hasil, setHasil] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [imagePath, setImagePath] = useState(image);
  const [headShape, setHeadShape] = useState("None");
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const onStart = async () => {
    const data = await fetch("/api/predict", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        image: image,
        token: process.env.NEXT_PUBLIC_TOKEN }), 
    });
    const result = await data.json();
    setHasil(result);
  }

  const getProduct = async () => {
    const data = await fetch("/api/product");
    const result = await data.json();
    setProduct(result);
  }

  useEffect(() => {onStart();}, []);
  useEffect(() => {getProduct();}, []);
  useEffect(() => {
    if (hasil) {
      setLoading(false);
      if (hasil.image_url) setImagePath(process.env.NEXT_PUBLIC_ENDPOINT + hasil.image_url + `?t=${new Date().getTime()}`);  
      if (hasil.head_shape) setHeadShape(hasil.head_shape);
      console.log(hasil);
    };
  }, [hasil]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 gap-2">
      <div className="bg-white p-4 rounded-lg">
        {loading ? 
        <p className='text-black'>Loading...</p>
        :
        <>
        <h2 className="text-xl font-semibold mb-4">Your Photo</h2>
        <Image src={imagePath} 
        alt="Captured" 
        width={128}
            height={128}
            layout="responsive"
            className="object-cover rounded-lg" />
        <h1 className='text-black text-2xl text-center font-bold'>{headShape}</h1>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="btn btn-accent text-white px-4 py-2 rounded-md"
            >
            Close
          </button>
        </div>
        </>
        }
      </div>
        { product &&
          <ProductCard product={product as Product}/>
        }
    </div>
  );
};

export default PhotoPopup;
