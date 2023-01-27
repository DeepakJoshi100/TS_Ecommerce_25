import React from "react";

function Dummytop() {
  return (
    <>
      <div className="grid items-center justify-center max-w-4xl grid-cols-5 space-y-1 bg-gray-200 border-2 border-gray-300 rounded-sm">
        <div className="text-2xl font-black mx-auto">Delete</div>
        <div className="text-2xl font-black mx-auto">Products</div>
        <div className="text-2xl font-black mx-auto">Price</div>
        <div className="text-2xl font-black mx-auto">Quantity</div>
        <div className="text-2xl font-black">Total</div>
      </div>
    </>
  );
}
export default Dummytop;
