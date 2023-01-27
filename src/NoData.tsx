import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import MainProductList from "./MainProductList";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";

function NoData() {
  return (
    <div className="md:flex w-full bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 aspect-auto">
      <div className="flex flex-col items-center justify-center w-2/5 m-2 mx-auto">
        <h1 className="text-5xl font-black text-red-400 md:text-8xl ">404</h1>
        <h1 className="mt-3 text-3xl font-bold text-black">Page Not Found!</h1>
        <h1 className="mt-2 mb-4 text-sm text-black">
          Sorry! We Can't Find The Page.
        </h1>

        <div className="flex gap-2">
          <Link
            to={"//"}
            className="px-2 py-1 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-900 hover:text-black"
          >
            Home
          </Link>

          <Link
            to={"/ContactUs"}
            className="px-2 py-1 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-900 hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        className="w-full overflow-hidden"
      />
    </div>
  );
}
export default NoData;
