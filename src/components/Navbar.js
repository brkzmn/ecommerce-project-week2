import React, { useState, useEffect } from "react";
import Button from "./Button";
import Loading from "./Loading";

function Navbar({ setCategory }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      setAllCategories(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav className="navbar">
      {isLoading === true && <Loading />}
      {error !== null && <div>{error.message}</div>}
      {allCategories.map((eachCategory, index) => {
        return (
          <Button
            key={index}
            eachCategory={eachCategory}
            index={index}
            setCategory={setCategory}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        );
      })}
    </nav>
  );
}

export default Navbar;
