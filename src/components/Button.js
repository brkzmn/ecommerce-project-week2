import React from "react";

function Button({
  eachCategory,
  index,
  setCategory,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <button
      key={index}
      className={`navbar-item ${activeIndex === index ? "active" : null}`}
      onClick={() => {
        setCategory(eachCategory);
        setActiveIndex(index);
      }}
    >
      {eachCategory}
    </button>
  );
}

export default Button;
