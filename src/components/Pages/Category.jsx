/* eslint-disable no-useless-concat */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import alone1 from "../../img/alone1.png";
function Category() {
  const { categoryId } = useParams();
  const { slug } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [category, setCategory] = useState({});
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}${categoryId}/category`
      );
      setCategoryProducts(response.data.products);
      setCategory(response.data.category);
    };
    getCategory();
  }, [slug, categoryId]);
  // const background = {
  //   backgroundImage:
  //     "url(" + `${process.env.REACT_APP_IMG}${category.img}` + ")",
  // };
  return (
    <div className="text-start">
      <header className="heroCategory py-5">
        <div className="container pt-3 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder pt-2">
              {category && category.name}
            </h1>
          </div>
        </div>
      </header>
      <div className="container my-3">
        <div className="row pb-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {categoryProducts && categoryProducts.length === 0 ? (
            <>
              <h2 className="mt-5 fs-3 text-center">
                This category is empty
                <div className="fs-5 mt-3 text-center">
                  Return to the store clicking
                  <div>
                    {" "}
                    <Link to="/" className="mt-3 btn btn-dark">
                      Here
                    </Link>
                  </div>
                </div>
              </h2>
              <img className="imgfield" src={alone1} alt="alone" />
            </>
          ) : (
            categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))
          )}
        </div>
      </div>
      <div className="heroCategory py-5">
        <div className="container pt-3 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder pt-2">
              ONLY THE MASTER RACE WILL DO IT
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
