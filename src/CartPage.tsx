import React from "react";
import { Link } from "react-router-dom";
import Dummytop from "./Dummytop";
import Dummytotal from "./Dummytotal";
import { withCart } from "./withProvider";
import CartList from "./CartList";

function CartPage() {
  return (
    <>
      <Link to="/cart"></Link>

      <div className="h-full max-w-4xl p-2 mx-auto bg-gray-200 flex flex-col">
        <div className="hidden md:block">
          <Dummytop />
        </div>
        <div className="p-4 my-2 bg-white rounded-lg">
          <CartList />
        </div>

        <Dummytotal />
      </div>
    </>
  );
}
export default withCart(CartPage);
