import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header";

const ProductDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const getDetails = async () => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      setDetails(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="product-details">
      <Header pageTitle={"Product Details"} />
      {isLoading === true && <Loading />}
      {error !== null && <div> {error.message}</div>}

      {Object.keys(details).length !== 0 && (
        <div>
          <div className="details-title-container">
            <h1 className="details-title">{details.title}</h1>
          </div>
          <div className="product-details-container">
            <p className="product-details-description">{details.description}</p>
            <div className="product-image-container">
              <img
                className="product-image"
                src={details.image}
                alt={details.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
