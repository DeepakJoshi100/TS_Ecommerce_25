import { FC, useEffect, useState } from "react";
import CartRow from "./CartRow";
import Loading from "./Loading";
import { maptype } from "./model";
import { withCart } from "./withProvider";
type CART = {
  cart: [];
  updateCart: (a: maptype) => void;
};
const CartList: FC<CART> = ({ cart, updateCart }) => {
  const [loading, setLoading] = useState(true);
  const [quantityMap, setQuantityMap] = useState<{ [item: number]: number }>(
    {}
  );
  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem: { product: { id: number }; quantity: number }) => ({
        ...m,
        [cartItem.product.id]: cartItem.quantity,
      }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
      setLoading(false);
    },
    [cart]
  );

  function handleQuantityChange(productId: number, newValue: number) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  const handleUpdateCartClick = () => {
    updateCart(quantityMap);
  };

  const handleRemove = (productId: number) => {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      {cart.length <= 0 ? (
        <div className="flex items-center justify-center h-screen text-4xl font-black text-blue-600 bg-blue-200">
          Please Add Something To Cart First........
        </div>
      ) : (
        <>
          <div>
            {cart.map(
              (cartItem: {
                product: {
                  id: number;
                  thumbnail: string;
                  title: string;
                  price: number;
                };
                quantity: number;
              }) => (
                <CartRow
                  key={cartItem.product.id}
                  product={cartItem.product}
                  quantity={
                    (quantityMap && quantityMap[cartItem.product.id]) ||
                    cartItem.quantity
                  }
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              )
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleUpdateCartClick}
              className="px-6 py-1 bg-blue-500 rounded-md hover:bg-blue-600 "
            >
              UpdateCart
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default withCart(CartList);
