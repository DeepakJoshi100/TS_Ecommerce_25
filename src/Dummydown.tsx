import React from "react";
import { withCart } from "./withProvider";

function Dummydown({ updateCart }) {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between items-center space-y-3">
          <div className="flex items-center justify-center">
            <input
              placeholder="Submit Coupan"
              className="rounded-md border-x-2 border-orange-600 focus:border-blue-400 focus:outline-none"
            />
            <button className="bg-orange-300 px-1 rounded-md font-semibold text-white hover:animate-pulse">
              Add Coupan
            </button>
          </div>
          <div className="flex justify-end items-end">
            <button
              onClick={updateCart}
              className="bg-blue-400 px-6 py-1 rounded-md font-black hover:text-white  "
            >
              Update Cart
            </button>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col">
          <input
            placeholder="Submit Coupan"
            className="rounded-md border-x-2 border-orange-600 focus:border-blue-400 focus:outline-none"
          />
          <button className="bg-orange-300 px-1 rounded-md font-semibold text-white hover:animate-pulse">
            Add Coupan
          </button>
          <button
            onClick={updateCart}
            className="bg-blue-400 px-6 py-1 rounded-md font-black hover:text-white  "
          >
            Update Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default withCart(Dummydown);
