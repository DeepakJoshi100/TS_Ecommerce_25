import axios from "axios";
import { FC } from "react";
type Product = {
  id: number;
  title: string;
  discription: string;
};

type API = { sortBy: string; sortType: string; search: string; page: number };

export function getProductData(id: number) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

type props = (ids: string[]) => Promise<Product[]>;
export const getProductsByIds: props = (ids) => {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: { ids: commaSepeartedIds },
    })
    .then(function (response) {
      return response.data;
    });
};
export const getProductList = (
  sortBy: string,
  sortType: string,
  search: string,
  page: number
) => {
  let params: API = {
    sortBy: "",
    sortType: "",
    search: "",
    page: 1,
  };
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (response) {
      return response.data;
    });
};

export const saveCart = (cart: { [item: number]: number }) => {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    )
    .then(function (response) {
      return response.data;
    });
};

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(function (response) {
      return response.data;
    });
}
