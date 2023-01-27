import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";
import ApnaKart from "/src/ApnaKart.jpeg";

function Navbar({ cartCount, user }: { cartCount: number; user: string }) {
  return (
    <>
      <div className="bg-gray-500 flex-col">
        <div className="flex justify-between max-w-4xl mx-auto bg-gray-500 ">
          <img
            src={ApnaKart}
            className="w-16 rounded-full hover:scale-150 transition-all duration-1000 cursor-zoom-in bg-gray-500"
          />

          <div className="flex items-center mx-4 gap-4">
            <div className="flex max-w-4xl gap-4 mx-auto my-1 font-black rounded-xl">
              {user && (
                <div className="flex gap-4 items-end ">
                  <Link className=" hover:text-white" to="/">
                    Home
                  </Link>
                  <Link className=" hover:text-white" to="/cart">
                    Cart
                  </Link>
                </div>
              )}
              {!user && (
                <div className="flex gap-5">
                  <Link className=" hover:text-white" to="/LoginPage">
                    Login
                  </Link>
                  <Link className=" hover:text-white" to="/SignUp">
                    Signup
                  </Link>
                </div>
              )}
            </div>
            <Link to="/cart">
              {user && (
                <div className="flex flex-col items-center static">
                  <RiShoppingCartLine className="text-4xl text-black " />
                  <span className="-mt-8 font-bold text-white bg-black border-white rounded-full lg:text-sm hover:bg-red-700 lg :px-1 lg:ml-1 lg:border-2 hover:border-black">
                    {cartCount}
                  </span>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default withUser(withCart(Navbar));
