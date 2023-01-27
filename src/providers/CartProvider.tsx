import React, { FC, useEffect, useState } from "react";
import { getCart, getProductsByIds, saveCart } from "../api";
import { CartContext } from "../Context";
import Loading from "../Loading";
import { withUser } from "../withProvider";

type CartProviderProp = {
  children: JSX.Element;
  isLoggedIn: boolean;
};
type CART = {
  product: { id: number };
  quantity: number;
};

const CartProvider: FC<CartProviderProp> = ({ isLoggedIn, children }) => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CART[]>([]);
  useEffect(
    function () {
      if (isLoggedIn) {
        getCart().then(function (savedCart) {
          setCart(savedCart);
          setLoading(false);
        });
      } else {
        const savedDataString = localStorage.getItem("my-cart") || "{}";
        const savedData = JSON.parse(savedDataString);
        quantityMapToCart(savedData);
        setLoading(false);
      }
    },
    [isLoggedIn]
  );

  function quantityMapToCart(quantityMap: { [item: number]: number }) {
    getProductsByIds(Object.keys(quantityMap)).then((products) => {
      let newCart: CART[] = [];

      products.map((p) => {
        const a = { product: p, quantity: quantityMap[p.id] };
        newCart = [...newCart, a];
      });

      setCart(newCart);
    });
  }

  function addToCart(productId: number, count: number) {
    const quantityMap: { [item: number]: number } = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

    const oldCount = quantityMap[productId] || 0;

    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(quantityMap: { [item: number]: number }) {
    if (isLoggedIn) {
      saveCart(quantityMap).then(function (response) {
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("my-cart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }
  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default withUser(CartProvider);
