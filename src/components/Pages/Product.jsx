import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../ProductCard";
import RingLoader from "react-spinners/RingLoader";
toast.configure();
function Product() {
  const dispatch = useDispatch();
  const handleBuy = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: product.id,
        name: product.name,
        description: product.description,
        slug: product.slug,
        stock: product.stock,
        quantity: quantity,
        categoryId: Number(product.categoryId),
        price: product.price,
        img: product.img,
      },
    });
    dispatch({ type: "ADD_TOTAL", payload: product.price * quantity });
  };
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { slug } = useParams();
  const { categoryId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(1);
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}${slug}`);
      await setProduct(response.data.product);
      await setStock(response.data.product.stock);
    };
    getProduct();
    const getRelated = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}${categoryId}/category`
      );
      setRelatedProducts(response.data.products);
    };
    getRelated();
  }, [slug, categoryId]);
  const [load, setLoad] = useState(false);
  return (
    <div>
      <header className="hero py-5">
        <div className="container px-4 px-lg-5 my-5 ">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">PC MASTER HACK</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              The best place to build your PC.
            </p>
          </div>
        </div>
      </header>
      <div className="container mt-3 ">
        <div className="row align-items-center py-3  ">
          <div className="col-md-6 position-relative">
            {!load && (
              <div className="d-flex loader justify-content-center align-items-center">
                <RingLoader color="aqua" size={300} />
              </div>
            )}
            <img
              className="card-img-top mb-5 mb-md-0 px-3 py-3"
              onLoad={() => setLoad(true)}
              src={`${process.env.REACT_APP_IMG}${product.img}`}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className=" mb-1  text-start">
              {product.category && product.category.name}
            </div>
            <h1 className="display-5 fw-bolder  text-start">{product.name}</h1>
            <div className="fs-5 mb-3  text-start">
              <span>USD {product.price}</span>
            </div>
            <p className="lead text-start">{product.description}</p>
            <div className="row">
              <div className="col">
                {" "}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleBuy(product);
                    toast.dark(
                      ` ${product.name} (${quantity} ) has been added to the cart!`
                    );
                  }}
                  className="d-flex"
                >
                  <input
                    className="form-control text-start me-3 maxWidth d-inlinex"
                    id="inputQuantity"
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    required
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0 d-inline"
                    type="submit"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </form>
              </div>
              <div className="col">
                {" "}
                {stock === 0 ? (
                  <div className="rounded-pill bg-danger pt-1 mt-1 text-start text-white px-3 fw-bolder d-inline-block shadow">
                    Sorry! Currently out of stock.
                  </div>
                ) : (
                  <div className="rounded-pill bg-info pt-1 mt-1 text-start text-white px-3 fw-bolder d-inline-block shadow">
                    Only {stock} left!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="pt-2 bg-light my-5 text-start">
          <h2 className="fw-bolder text-start mb-0 ">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relatedProducts &&
              relatedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
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

export default Product;
