import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Header from "../components/Header";

const HomePage = () => {
  const [category, setCategory] = useState(null);
  const [isAllProductsLoading, setIsAllProductsLoading] = useState(false);
  const [isSelectedProductsLoading, setIsSelectedProductsLoading] =
    useState(false);

  return (
    <div className="App">
      <Header pageTitle={"Products"} />

      <Navbar
        category={category}
        setCategory={setCategory}
        isSelectedProductsLoading={isSelectedProductsLoading}
        setIsSelectedProductsLoading={setIsSelectedProductsLoading}
      />
      <Products
        category={category}
        isAllProductsLoading={isAllProductsLoading}
        setIsAllProductsLoading={setIsAllProductsLoading}
        isSelectedProductsLoading={isSelectedProductsLoading}
        setIsSelectedProductsLoading={setIsSelectedProductsLoading}
      />
    </div>
  );
};

export default HomePage;
