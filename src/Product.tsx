import React from "react";
import { Link } from "react-router-dom";
const Product = ({
  thumbnail,
  category,
  title,
  rating,
  sale,
  price,
  id,
}: {
  id: number;
  thumbnail: string;
  sale: string;
  price: number;
  rating: number;
  description: string;
  title: string;
  category: string;
  brand: string;
}) => {
  return (
    <>
      <Link to={"/products/" + id}>
        <div className="max-w-xs bg-white">
          <div className="w-full aspect-square">
            <img src={thumbnail} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="text-xs text-gray-500">{category}</div>
            <div className="text-sm font-black">{title}</div>
            <div className="text-xs text-blue-400">{rating}</div>
            <div className="flex gap-1">
              <div className="text-gray-400 line-through text-xs">{sale}</div>
              <div className="font-bold text-md">₹{price}</div>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <button className="px-3 py-1 text-xs font-bold text-gray-800 bg-orange-500 border rounded-md hover:bg-orange-800 hover:text-white">
              View Detail
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Product;
