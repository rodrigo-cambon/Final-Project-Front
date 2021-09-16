import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductInCart from "../ProductInCart";
import alone1 from "../../img/alone1.png";
import Payment from "../Modals/Payment";
function ShopCart() {
  const [shipping, setShipping] = useState(0);
  const store = useSelector((state) => state);
  useEffect(() => {
    const shipment = () => {
      setShipping(store.subtotal * 0.02);
    };
    shipment();
  }, [store.subtotal]);
  return (
    <>
      <div className="container mt-5 pt-5 min-height">
        <div className="row m-3">
          <div className="col-12 col-md-8">
            <div className="list-group mx-4">
              {store.products &&
                store.products.map((product) => {
                  return <ProductInCart key={product.slug} product={product} />;
                })}
            </div>
          </div>
          {store.products && store.products.length === 0 ? (
            <>
              <h2 className="fs-2">
                Your shopping cart is empty
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
            <div className="col-12 col-md-4 ps-5 pe-5">
              <div className="rounded shadow text-start">
                <div className="bg-dark text-light fs-5 p-2 ">
                  ORDER DETAILS
                </div>
                <div className="row d-flex justify-content-between px-2 pt-2">
                  <div className="col-4 mt-2">
                    <p className="my-1">Total</p>
                    <p className="my-1">Shipping</p>
                  </div>
                  <div className="col-8 mt-2">
                    <p className="my-1 text-dark">USD {store.subtotal}</p>
                    <p className="my-1 text-dark">USD {shipping.toFixed(2)}</p>
                  </div>
                </div>
                <hr />
                <div className="p-2 MobilePrice">
                  <h4>USD {(store.subtotal + shipping).toFixed(2)}</h4>
                  <p>TAXES INC.</p>
                </div>
              </div>
              {store.token !== "" && <Payment />}
              {store.token === "" && (
                <div className="mt-2  ">
                  <p className="text-center">
                    You must be logged in to complete the purchase.
                  </p>
                  <Link to="/register" className="btn btn-dark m-2 ">
                    Register
                  </Link>
                  <Link to="/login" className="btn btn-dark  MobileLogin">
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShopCart;
