import React, { useEffect, useState } from "react";

import Product from "./Product";
import Loading from "./Loading";

function Products({
  category,
  isLoadingFirst,
  isLoadingSecond,
  setIsLoadingFirst,
  setIsLoadingSecond,
}) {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    setIsLoadingFirst(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw "HTTP Error";
      const data = await response.json();
      setProductList(data);
      setIsLoadingFirst(false);
    } catch (error) {
      setIsLoadingFirst(false);
      setError(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getProducts = async () => {
    setIsLoadingSecond(true);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (!response.ok) throw "HTTP Error";
      const data = await response.json();
      setProductList(data);
      setIsLoadingSecond(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  if (productList == null) {
    return null;
  }
  if (error != null) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className="products-container">
      {(isLoadingFirst === true || isLoadingSecond === true) && <Loading />}

      {isLoadingFirst === false &&
        isLoadingSecond === false &&
        productList.map((eachProduct, index) => {
          return <Product key={index + 1} productInfo={eachProduct} />;
        })}
    </ul>
  );
}

export default Products;
