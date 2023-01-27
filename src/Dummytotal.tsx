import { FC } from "react";
import { withCart } from "./withProvider";

type alpha = {
  cart: [];
};
const Dummytotal = ({ cart }: alpha) => {
  console.log("cart is", cart);
  const alpha = cart.map(
    (item: { product: { price: number }; quantity: number }) => {
      const aaa = item.product.price;
      const bbb = item.quantity;

      return aaa * bbb;
    }
  );
  const totling = alpha.reduce((x: number, y: number) => {
    return x + y;
  }, 0);
  const beeta = cart.map(
    (item: {
      product: { discount_percentage: number; price: number };
      quantity: number;
    }) => {
      const ccc =
        (item.product.discount_percentage *
          item.product.price *
          item.quantity) /
        100;
      return +ccc.toFixed(0);
    }
  );
  const discounting = beeta.reduce((x: number, y: number) => {
    return x + y;
  }, 0);
  return (
    cart.length >= 1 && (
      <div className="hidden md:block">
        <div className="flex items-center justify-center space-y-3">
          <div className="flex flex-col items-start justify-start gap-4 p-4 px-20 py-4 my-4 bg-blue-300 rounded-lg">
            <div className="flex mx-auto text-2xl font-black text-white">
              Total Of All Items
            </div>{" "}
            <div className="flex text-xl font-bold w-full">
              Items: <div className="grow"></div>{" "}
              {alpha.map((item: number, index: number) => {
                return (
                  <div key={index}>
                    {index !== 0 && "+"} {item}
                  </div>
                );
              })}
            </div>
            <div className="flex text-xl font-bold gap-2 w-full">
              Subtotal: <div className="grow"></div>
              {totling}
            </div>
            <div className="flex text-xl font-bold w-full">
              Discount: <div className="grow"></div>-{discounting}
            </div>
            <div className="border-gray-700 border-t-4 rounded-full w-full "></div>
            <div className="flex text-xl font-bold w-full ">
              Total: <div className="grow"></div>
              {totling - discounting}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default withCart(Dummytotal);
