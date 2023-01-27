import React, { ChangeEvent, FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type CartRow = {
  product: { id: number; thumbnail: string; title: string; price: number };
  quantity: number;
  onQuantityChange: (a: number, b: number) => void;
  onRemove: (a: number) => void;
};
const CartRow: FC<CartRow> = ({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  console.log(onQuantityChange);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleRemove() {
    onRemove(product.id);
  }

  return (
    <>
      <div className="hidden md:block">
        <div className="grid items-center justify-center max-w-4xl grid-cols-6 mx-auto my-2 space-y-5 bg-blue-200 border-2 border-blue-300 rounded-sm">
          <div className="mx-auto text-2xl text-red-600 hover:text-red-800 hover:animate-bounce">
            <button onClick={handleRemove}>
              <AiOutlineDelete className="font-black" />
            </button>
          </div>
          <div className="w-20 aspect-square">
            <img
              src={product.thumbnail}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="text-xs font-black text-orange-400">
              {product.title}
            </div>
          </div>

          <div className="flex gap-1">
            <div className="text-sm font-semibold">₹{product.price}</div>
          </div>

          <div>
            <input
              value={quantity}
              className="flex items-center justify-center w-12 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-600"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-1">
            <span className="font-bold">₹</span>
            {product.price * quantity}
          </div>
        </div>
      </div>
      <div className="block md:hidden ">
        <div className="flex flex-col mx-4">
          <div className="flex flex-col gap-2 px-2 border-2 border-gray-500">
            <button onClick={handleRemove}>
              <AiOutlineDelete className="font-black" />
            </button>
            <div className="w-28 aspect-square">
              <img
                src={product.thumbnail}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-xs font-black text-orange-400">
              {product.title}
            </div>
            <div className="text-sm font-semibold">₹{product.price}</div>
            <div>
              <input
                value={quantity}
                className="flex items-center justify-center w-12 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-600"
                type="number"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-1">
              <span className="font-bold">₹</span>
              {product.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartRow;
