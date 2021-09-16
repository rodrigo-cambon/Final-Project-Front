import { Link } from "react-router-dom";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
function ProductCard({ product }) {
  const [load, setLoad] = useState(false);
  return (
    <div className="col  cardHover mt-2  mobileCard ">
      <div className="productmobile position-relative card h-100 shadow borderHover">
        <Link to={`/product/${product.categoryId}/${product.slug}`}>
          {product.popular === 1 && (
            <span className="badge popular-badge">Popular</span>
          )}
          {product.stock === 0 && (
            <span className="badge out-badge">Out of stock</span>
          )}
          {!load && (
            <div className="mt-5 loader d-flex justify-content-center align-items-center">
              <RingLoader color="aqua" size={150} />
            </div>
          )}
          <img
            className="card-img-top productImg"
            onLoad={() => setLoad(true)}
            src={`${process.env.REACT_APP_IMG}${product.img}`}
            alt="..."
          />
        </Link>
        <div className="card-body mobilecardBody ">
          <h5 className="fw-bolder  fs-5 my-0 text-dark">{product.name}</h5>
          <p className=" fw-bolder mt-2 mb-0 ocultElement ">
            USD {product.price}
          </p>

          <Link to={`/product/${product.categoryId}/${product.slug}`}>
            <button className="btn  btn-outline-dark mt-3 buttonHover ocultElement">
              View product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
