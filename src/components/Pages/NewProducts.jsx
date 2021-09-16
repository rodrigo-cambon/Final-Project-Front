import React from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import alone1 from "../../img/alone1.png";

function NewProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}new-products`
      );
      setProducts(response.data.products.rows);
    };
    getProducts();
  }, []);
  return (
    <div>
      <header className="hero py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder pt-3">NEW ARRIVALS</h1>
          </div>
        </div>
      </header>
      <div className="container px-4 my-3 text-start">
        <div className="row pb-5 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center px-2">
          {products && products.length === 0 ? (
            <>
              <h2 className="mt-5 fs-3 text-center">
                There are no new products at this moment.
                <div className="fs-5 mt-3 text-center">
                  Return to the store clicking
                  <div>
                    <Link to="/" className="mt-3 btn btn-dark">
                      Here
                    </Link>
                  </div>
                </div>
              </h2>
              <img className="imgfield" src={alone1} alt="alone" />
            </>
          ) : (
            products.map((product) => <ProductCard product={product} />)
          )}
        </div>
      </div>
      <div className="hero py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">
              ONLY THE MASTER RACE WILL DO IT
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
