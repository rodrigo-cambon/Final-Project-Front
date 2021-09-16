import React from "react";
import { useModal } from "../useModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const UpdateOrder = ({ order, setOrders, orders }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [code, setCode] = useState(order.code);
  const [totalPrice, setTotalPrice] = useState(order.totalPrice);
  const [state, setState] = useState(order.state);
  const id = order.id;
  const [paymentMethod, setPaymentMethod] = useState(order.paymentMethod);
  const handleClick = () => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_DB}admin/order`,
      data: {
        id,
        code,
        totalPrice,
        state,
        paymentMethod,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setOrders(
      orders.map((item) =>
        item.id === id
          ? {
              id: id,
              code: code,
              totalPrice: totalPrice,
              state: state,
              paymentMethod: paymentMethod,
              userId: order.userId,
            }
          : item
      )
    );
    closeModal();
  };
  return (
    <>
      <div>
        <button className="btn updateButton py-1 px-2" onClick={openModal}>
          <i className="fas fa-edit fs-7"></i>
        </button>
        <div className="">
          <div
            className={`modal ${isOpenModal && "is-open"}`}
            onClick={closeModal}
          >
            <div
              className="modal-container text-end modalSize"
              onClick={handleModalContainerClick}
            >
              <button
                className="modal-close btn btn-danger "
                onClick={closeModal}
              >
                <i className="fas fa-times-circle"></i>
              </button>
              <div className="mb-3 modalForm text-dark">
                <label htmlFor="code" className="form-label text-dark">
                  Code
                </label>
                <input
                  name="code"
                  type="text"
                  className="form-control"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="totalPrice" className="form-label text-dark">
                  Total Price
                </label>
                <input
                  name="totalPrice"
                  type="num"
                  className="form-control"
                  id="totalPrice"
                  required
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="paymentMethod" className="form-label text-dark">
                  Payment Method
                </label>
                <input
                  name="paymentMethod"
                  type="text"
                  className="form-control"
                  id="paymentMethod"
                  required
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="state" className="form-label text-dark">
                  State
                </label>
                <select
                  name="state"
                  type="text"
                  className="form-control"
                  id="state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="unpaid">Unpaid</option>
                  <option value="paid">Paid</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
              <button
                onClick={() => handleClick()}
                className="btn updateButton"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateOrder;
