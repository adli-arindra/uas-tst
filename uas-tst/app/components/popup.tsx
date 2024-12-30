"use client"
import Image from 'next/image';
import React from 'react';

interface PhotoPopupProps {
  image: string;
  onClose: () => void;
}

const PhotoPopup: React.FC<PhotoPopupProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Photo</h2>
        <Image src={image} 
            alt="Captured" 
            width={128}
            height={128}
            layout="responsive"
            className="object-cover rounded-lg" />
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="btn btn-accent text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPopup;
