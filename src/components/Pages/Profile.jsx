import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import alone2 from "../../img/alone2.png";
import { Link } from "react-router-dom";
import UpdateYourProfile from "../Modals/UpdateYourProfile";
function Profile() {
  const store = useSelector((state) => state);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}${store.user.slug}/orders`
      );
      setOrders(response.data.orders);
    };
    getOrders();
  }, [store.user.slug]);
  return (
    <div className="container mt-5 pt-5 min-height mb-3">
      <div className="row">
        <div className="col-12 col-md-6 mb-5">
          <h2 className="fs-1">Your data</h2>
          <div className="my-4 text-start px-5">
            {" "}
            <p>Firstname:{store.user.firstname}</p>
            <p>Lastname:{store.user.lastname}</p>
            <p>Username:{store.user.username}</p>
            <p>Email:{store.user.email}</p>
          </div>
          <UpdateYourProfile user={store.user} />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="fs-1">Your orders</h2>
          {orders && orders.length === 0 && (
            <>
              <h2 className="fs-2">
                You don't have any orders
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
              <img className="imgfield" src={alone2} alt="alone2" />
            </>
          )}
          <div className="row">
            {orders &&
              orders.map((order) => (
                <div className="col-12 my-2">
                  <div
                    className={
                      order.state === "unpaid"
                        ? "card bg-light border-2 border-danger mb-3"
                        : order.state === "paid"
                        ? "card bg-light border-2 border-primary mb-3"
                        : "card bg-light border-2 border-success mb-3"
                    }
                  >
                    <div className="card-header">Order Code: {order.code}</div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Price: USD {order.totalPrice}
                      </h5>
                      <p>Date: {order.createdAt}</p>
                      <p className="card-text">State: {order.state}.</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
