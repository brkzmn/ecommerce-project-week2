import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const HomePage = ({
  category,
  setCategory,
  isLoadingFirst,
  setIsLoadingFirst,
  isLoadingSecond,
  setIsLoadingSecond,
}) => {
  return (
    <div className="App">
      <h1>Products</h1>
      <Navbar
        category={category}
        setCategory={setCategory}
        isLoadingSecond={isLoadingSecond}
        setIsLoadingSecond={setIsLoadingSecond}
      />
      <Products
        category={category}
        isLoadingFirst={isLoadingFirst}
        setIsLoadingFirst={setIsLoadingFirst}
        isLoadingSecond={isLoadingSecond}
        setIsLoadingSecond={setIsLoadingSecond}
      />
    </div>
  );
};

export default HomePage;
