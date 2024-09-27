import React from 'react'
import { Product } from "../types/Iproducts";


interface ProductBoxProps {
    product: Product;
    handleClick: (product:Product) => void;
  }

const ProductListItem = ({ product, handleClick }: ProductBoxProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg w-full flex-col sm:flex-row">
  <div className='bg-gray-200 p-3 rounded-2xl'>
  <img
      src={product.image}
      alt={product.title}
      className="w-32 h-32 object-contain mix-blend-multiply"
    />
  </div>
   <div className='flex w-full flex-wrap gap-5'>
   <div className="flex-grow">
      <h3 className="text-lg font-semibold">
        {product.title}
      </h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>
    </div>
    <button
      onClick={() => handleClick(product)}
      className="ml-auto"
    >
      <span className="bg-black text-white py-2 px-4 rounded-[25px]">
        View Details
      </span>
    </button>
   </div>
  </div>
  )
}

export default ProductListItem