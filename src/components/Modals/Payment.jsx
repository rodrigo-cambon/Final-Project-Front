import { useModal } from "../useModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Payment() {
  const [payment, setPayment] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(0);
  const [address, setAddress] = useState("");
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  useEffect(() => {
    const shipment = () => {
      setShipping(store.subtotal * 0.02);
    };
    shipment();
  }, [store.subtotal]);
  const handleBuy = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB}order`,
      data: {
        products: store.products,
        user: store.user.id,
        price: store.subtotal + shipping,
        address: address,
        payment: payment,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    }).then(() => {
      dispatch({ type: "ORDER_PLACED" });
      dispatch({ type: "CLEAR_TOTAL" });
      history.push("/success");
    });
  };
  return (
    <div>
      <button
        className="MobileOrder mt-2 fs-5 w-100 py-3 mt-2 btn btn-dark launch"
        onClick={openModal}
      >
        Complete Order
      </button>
      <div className="MobileModal">
        <div
          className={`MobileModal modal ${isOpenModal && "is-open"}`}
          onClick={closeModal}
        >
          <div className="modal-container " onClick={handleModalContainerClick}>
            <div className="text-end ">
              <button
                className="modal-close fs-5 btn btn-outline-drak "
                onClick={closeModal}
              >
                <i className="fas  fa-times-circle"></i>
              </button>
            </div>
            <form
              onSubmit={(e) => handleBuy(e)}
              className="mb-3 modalForm text-dark"
            >
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <span className="text-uppercase">Pay Now</span>{" "}
                <i className="fa fa-close close" data-dismiss="modal"></i>{" "}
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    {" "}
                    <small>User</small>{" "}
                    <span className="font-weight-bold">
                      {store.user.firstname} {store.user.lastname}
                    </span>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    {" "}
                    <small>Tuition Fee Due Date</small>{" "}
                    <span className="font-weight-bolder">12/10/2020</span>{" "}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center fee align-items-center bg-dark">
                <h3 className="mb-0 font-weight-light text-light">
                  ${store.subtotal + shipping}
                </h3>
              </div>
              <div className="mt-3 me-2">
                <div className="row g-2">
                  <div className="inputbox">
                    {" "}
                    <small>Address</small>{" "}
                    <input
                      required
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      name=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                {" "}
                <small>Payment Method</small>
                <div className="d-flex flex-row">
                  {" "}
                  <label
                    onClick={() => setPayment("debit_card")}
                    className="radio1 "
                  >
                    {" "}
                    <input type="radio" required name="payment" />{" "}
                    <span>
                      <i className="fa fa-bank"></i> DEBIT CARD
                    </span>{" "}
                  </label>{" "}
                  <label
                    onClick={() => setPayment("credit_card")}
                    className="radio1"
                  >
                    {" "}
                    <input type="radio" required name="payment" />{" "}
                    <span>
                      <i className="fa fa-credit-card-alt"></i> CREDIT CARD
                    </span>{" "}
                  </label>{" "}
                </div>
                <div className="mt-1 mx-2 text-center">
                  <p>WE WORK WITH</p>
                </div>
                <div className="mb-1 mx-2 d-flex flex-row justify-content-between">
                  <i className="fab fa-cc-mastercard fs-1"></i>{" "}
                  <i className="fab fa-cc-visa fs-2"></i>{" "}
                  <i className="fab fa-cc-amex fs-2"></i>{" "}
                  <i className="fab fa-cc-discover fs-2"></i>
                </div>
              </div>
              <div className="mt-2 me-2">
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="inputbox">
                      {" "}
                      <small>Card Number</small>{" "}
                      <input
                        required
                        type="text"
                        className="form-control"
                        name=""
                        // minLength="14"
                        // maxLength="16"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox">
                      {" "}
                      <small>Card Name</small>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 me-2">
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="row g-2">
                      <div className="col">
                        <div className="inputbox">
                          {" "}
                          <small>Expiration Date</small>{" "}
                          <input
                            required
                            type="date"
                            className="form-control"
                            name=""
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox">
                      {" "}
                      <small>CVV</small>{" "}
                      <input
                        required
                        type="text"
                        className="form-control"
                        name=""
                        maxLength="3"
                        minLength="3"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="me-2 mt-4" />
              <div className="mt-3 me-2 d-flex justify-content-end align-items-center">
                {" "}
                <div className="cancel me-3" onClick={closeModal}>
                  Cancel
                </div>{" "}
                <button type="submit" className="btn btn-success mt-2 fs-5 ">
                  PAY NOW
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
