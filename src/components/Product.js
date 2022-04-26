import React from "react";
import { Link } from "react-router-dom";

function Product({ productInfo }) {
  return (
    <li className="product-card">
      <Link to={`/product/${productInfo.id}`}>
        <div>
          <img
            className="product-image"
            src={productInfo.image}
            alt={productInfo.title}
          />
          <span className="product-title">{productInfo.title}</span>
        </div>
      </Link>
    </li>
  );
}

export default Product;
