import React, { ChangeEvent, FC, useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { Link, useSearchParams } from "react-router-dom";
import { range } from "lodash";
import { TiArrowForwardOutline } from "react-icons/ti";
import { TiArrowBackOutline } from "react-icons/ti";

type Person = { data: []; meta: { last_page: number } };
const MainProductList: FC = () => {
  const [productData, setProductData] = useState<Person>();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const param = Object.fromEntries([...searchParams]);

  let { query, sort, page } = param;

  query = query || "";
  sort = sort || "default";
  const pageNumber = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort === "name") {
        sortBy = "title";
      } else if (sort === "pricelow") {
        sortBy = "price";
      } else if (sort === "pricehigh") {
        sortBy = "price";
        sortType = "desc";
      }
      getProductList(sortBy, sortType, query, page).then(function (products) {
        setProductData(products);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchParams(
      { ...param, query: event.target.value, page: "1" }, //errror line any
      { replace: false }
    );
  }
  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSearchParams({ ...param, sort: event.target.value }, { replace: false });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {productData && (
        <div>
          <Link to="/"></Link>

          <div className="pt-8 pb-4 mx-4 mt-8 mb-4 bg-white grow">
            <div className="max-w-4xl mx-auto mb-4 sm:flex sm:justify-between sm:mb-12">
              <div>
                <input
                  className="m-2 border-2 border-black rounded-md sm:m-0"
                  value={query}
                  placeholder="Search"
                  onChange={handleQueryChange}
                />
              </div>

              <div>
                <select
                  onChange={handleSortChange}
                  value={sort}
                  className="border-2 border-black rounded-md "
                >
                  <option value="default">Default Sort:</option>
                  <option value="name">Sort By Title</option>
                  <option value="pricelow">Sort By Price: Low To High</option>
                  <option value="pricehigh">Sort By Price: High To Low</option>
                </select>
              </div>
            </div>
            {productData.data.length > 0 && (
              <ProductList products={productData.data} />
            )}
            {productData.data.length == 0 && <NoMatching />}
            <div className="flex items-center max-w-4xl p-2 mx-auto mt-3">
              {pageNumber !== 1 && (
                <div>
                  <Link
                    to={
                      "?" +
                      new URLSearchParams({
                        ...param,
                        page: JSON.stringify(pageNumber - 1),
                      })
                    } // error line any
                  >
                    <TiArrowBackOutline className="text-2xl font-black text-red-400 hover:text-red-600" />
                  </Link>
                </div>
              )}

              {range(1, productData.meta.last_page + 1).map((pageNo) => (
                <Link
                  to={
                    "?" +
                    new URLSearchParams({
                      ...param,
                      page: JSON.stringify(pageNo),
                    })
                  } // error line any
                  key={pageNo}
                  className={
                    "px-2 py-1 font-semibold rounded-md " +
                    (pageNo === pageNumber
                      ? "bg-white border border-red-500"
                      : "bg-red-500 border-2 border-white")
                  }
                >
                  {pageNo}
                </Link>
              ))}
              {pageNumber !== productData.meta.last_page && (
                <Link
                  to={
                    "?" +
                    new URLSearchParams({ ...param, page: page + 1 } as any)
                  }
                >
                  <TiArrowForwardOutline className="text-2xl font-black text-red-400 hover:text-red-600" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainProductList;
