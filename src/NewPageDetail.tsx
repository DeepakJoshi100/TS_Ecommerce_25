import React, { useState, useEffect, FC, ChangeEvent } from "react";
import NoData from "./NoData";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";
import { withCart } from "./withProvider";
import { Product } from "./model";

type NEW = { addToCart: (a: number, b: number) => void };

const NewPageDetail = ({ addToCart }: NEW) => {
  const id = +useParams().id;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleInputInitial() {
    setCount(1);
  }

  function handleCountChange(event: ChangeEvent<HTMLInputElement>) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    addToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NoData />;
  }
  return (
    <>
      <div className="flex p-2">
        <Link
          to="/"
          className="px-2 py-2 text-xl font-bold text-red-700 bg-black border  rounded-full hover:bg-blue-900 hover:text-white"
          onClick={handleInputInitial}
        >
          <HiArrowNarrowLeft />
        </Link>
      </div>

      <div className="p-4 m-4 bg-white rounded-md">
        <div className="md:flex md:gap-4 xl:gap-0">
          <div className="md:w-1/2 ">
            <img
              src={product.thumbnail}
              className="transition-all duration-1000 hover:rounded-lg hover:scale-110"
            />
          </div>
          <div className="md:w-2/6">
            <h1 className="text-sm font-bold text-gray-500">
              {product.category}
            </h1>
            <h1 className="flex gap-2 text-sm font-bold text-gray-500">
              <span className="font-bold text-black ">Brand -- </span>
              {product.brand}
            </h1>
            <h1 className="flex gap-2 font-black">
              {" "}
              <span className="font-bold text-black">Title --</span>
              {product.title}
            </h1>
            <h1 className="flex flex-wrap font-normal gap-2text-sm">
              <span className="font-bold text-black">Description --</span>
              {product.description}
            </h1>
            <h1 className="flex gap-2 text-blue-500">
              <span className="font-bold text-black">Rating --</span>
              {product.rating}
            </h1>
            <div className="flex flex-row-reverse justify-end ">
              <h1 className="text-sm font-bold ">₹{product.price}</h1>
              <h1 className="mr-2 text-sm font-bold text-gray-500 line-through">
                {product.sale}
              </h1>
            </div>
            <div className="flex m-2 ml-2">
              <div>
                <input
                  value={count}
                  onChange={handleCountChange}
                  className="w-10 border-4 border-red-300 rounded-md hover:border-orange-600"
                  type="number"
                />
              </div>
              <div>
                <button
                  onClick={handleButtonClick}
                  className="px-6 py-1 ml-4 bg-orange-400 rounded-md text-bold hover:bg-orange-600"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-2 grow">
        <div>
          {id > 1 && (
            <Link to={"/products/" + (id - 1)} onClick={handleInputInitial}>
              <div className="flex items-center px-2 py-1 bg-blue-700 rounded-md hover:bg-blue-900 hover:text-white">
                <HiArrowNarrowLeft className="text-2xl" />
                <div>Previous</div>
              </div>
            </Link>
          )}
        </div>

        <div>
          <Link to={"/products/" + (id + 1)} onClick={handleInputInitial}>
            <div className="flex items-center px-2 py-1 bg-blue-700 rounded-md hover:bg-blue-900 hover:text-white">
              <div>Next</div>
              <HiArrowNarrowRight className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default withCart(NewPageDetail);
