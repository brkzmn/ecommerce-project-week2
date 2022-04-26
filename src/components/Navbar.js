import React, { useState, useEffect } from "react";
import Button from "./Button";

function Navbar({ setCategory, setIsLoading }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState(null);

  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) throw "HTTP error";
      const data = await response.json();
      setAllCategories(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (error != null) {
    return <div> {error.message}</div>;
  }

  return (
    <nav className="navbar">
      {allCategories.map((eachCategory, index) => {
        return (
          <Button
            key={index}
            eachCategory={eachCategory}
            index={index}
            setCategory={setCategory}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            setIsLoading={setIsLoading}
          />
        );
      })}
    </nav>
  );
}

export default Navbar;
