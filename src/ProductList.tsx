import React, { FC } from "react";
import { ProductProp } from "./model";
import Product from "./Product";
type prop = {
  products: [];
};
const ProductList: FC<prop> = ({ products }) => {
  return (
    <div className="max-w-4xl grid-cols-3 gap-2 mx-auto md:grid ">
      {products.map(function (item: ProductProp) {
        return (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail}
            price={item.price}
            rating={item.rating}
            sale={item.sale}
            id={item.id}
            description={item.description}
            brand={item.brand}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
