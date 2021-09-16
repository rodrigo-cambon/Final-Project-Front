import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import FirstTime from "../Modals/FirstTime";
import { useSelector } from "react-redux";
function Main() {
  const store = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}all-products`
      );
      setProducts(response.data.products);
    };
    getProducts();
    const getCategories = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}categories`);
      setCategories(response.data.categories);
    };
    getCategories();
  }, []);
  const [load, setLoad] = useState(false);
  return (
    <div className="text-start">
      <Carousel>
        {categories &&
          categories.map((category) => (
            <Carousel.Item key={category.id}>
              <Link to={`/category/${category.id}`}>
                {!load && (
                  <div className="mt-5 loader d-flex justify-content-center align-items-center">
                    <RingLoader color="aqua" size={300} />
                  </div>
                )}
                <img
                  onLoad={() => setLoad(true)}
                  className="d-block imgCarr w-100"
                  src={`${process.env.REACT_APP_IMG}${category.img}`}
                  alt={`${category.name} slide`}
                />
                {/* <Carousel.Caption>
                  <h3 className="text-white float-caption fs-1">
                    Get the best of {category.name} here
                  </h3>
                </Carousel.Caption> */}
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
      <div className="container min-height-body my-3">
        {store.firsttime && (
          <div className="text-center">
            <FirstTime />
          </div>
        )}
        <div className="row pb-5 gx-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products &&
            products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
      </div>
      <div className="heroC py-5"></div>
    </div>
  );
}

export default Main;
