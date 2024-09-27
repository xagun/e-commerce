import React from "react";
import { Product } from "../types/Iproducts";
// import { useCartStore } from "../store/CartStore";
// import StarRating from "./Star";

interface ProductBoxProps {
  product: Product;
  handleClick: (product:Product) => void;
}

const ProductBox = ({ product, handleClick }: ProductBoxProps) => {
  // const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="h-[320px] w-full sm:w-[300px] md:h-[320px] md:w-[190px] lg:h-[400px] lg:w-[210px] xl:h-[420px] xl:w-[240px] mb-4">
      <div className="group relative bg-gray-200 h-[200px] lg:h-[260px] rounded-2xl overflow-hidden hover-overlay">
        <img
          className="h-full w-full object-contain p-4 mix-blend-multiply"
          src={product.image}
          alt="No preview"
        />
        <button
          onClick={() => handleClick(product)}
          className="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-transparent text-white"
        >
          <span className="bg-black text-white py-2 px-4 rounded-[25px]">
            View Details
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
          {product.title}
        </h2>

        <h4>$ {product.price}</h4>
        {/* <StarRating rating={product.rating.rate} /> */}
      </div>
    </div>
  );
}

export default ProductBox;
