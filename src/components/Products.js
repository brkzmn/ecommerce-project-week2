import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

function Products({
  category,
  isAllProductsLoading,
  isSelectedProductsLoading,
  setIsAllProductsLoading,
  setIsSelectedProductsLoading,
}) {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    setIsAllProductsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      setProductList(data);
      setIsAllProductsLoading(false);
    } catch (error) {
      setIsAllProductsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getProducts = async () => {
    setIsSelectedProductsLoading(true);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      setProductList(data);
      setIsSelectedProductsLoading(false);
    } catch (error) {
      setError(error);
      setIsSelectedProductsLoading(false);
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
      {(isAllProductsLoading === true ||
        isSelectedProductsLoading === true) && <Loading />}

      {isAllProductsLoading === false &&
        isSelectedProductsLoading === false &&
        productList.map((eachProduct, index) => {
          return <Product key={index + 1} productInfo={eachProduct} />;
        })}
    </ul>
  );
}

export default Products;
