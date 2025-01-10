import { Product } from "@/pages/api/product";
import Image from "next/image";

const ProductCard = ({ product } : { product: Product }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-gray-800 p-4 rounded-xl shadow-lg bg-white">
            <h1 className="text-2xl font-bold">RECOMMENDED SKIN PRODUCT</h1>
            <h1 className="text-xl">{product.name}</h1>
            <Image
            src={product.imageUrl}
            alt=""
            width={300}
            height={50}
            />
            <div className="flex flex-row gap-4 italic">
            <p>{product.category}</p>
            <p>.</p>
            <p>{product.brand}</p>
            </div>
            <p className="font-bold">Rp {product.price}</p>
        </div>
    );
};

export default ProductCard