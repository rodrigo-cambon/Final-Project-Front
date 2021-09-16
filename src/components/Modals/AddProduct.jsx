import React from "react";
import { useModal } from "../useModal";
import { useSelector } from "react-redux";
import axios from "axios";
const AddProduct = ({ setProducts, products }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB}admin/product`,
      data: formData,
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": [
          "Accept",
          "Authorization",
          "Content-Type",
        ],
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((response) => setProducts([response.data, ...products]));
    closeModal();
  };
  return (
    <>
      <div>
        <button
          className="btn btnAddProduct my-2 shadow px-4 "
          onClick={openModal}
        >
          ADD PRODUCT
        </button>
        <div>
          <div
            className={`modal ${isOpenModal && "is-open"}`}
            onClick={closeModal}
          >
            <div
              className="modal-container modalPaymentMobile text-end modalSize "
              onClick={handleModalContainerClick}
            >
              <div className="text-end">
                <button
                  className="modal-close fs-2 btn btn-outline-drak "
                  onClick={closeModal}
                >
                  <i className="fas  fa-times-circle"></i>
                </button>
              </div>
              <form
                onSubmit={(e) => handleSubmit(e)}
                id="addForm"
                name="addForm"
                enctype="multipart/form-data"
              >
                {" "}
                <div className="mb-3 modalForm text-dark">
                  <label htmlFor="name" className="form-label text-dark">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3 modalForm text-dark">
                  <label htmlFor="description" className="form-label text-dark">
                    Description
                  </label>
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    id="description"
                  />
                </div>
                <div className="mb-3 modalForm">
                  <label htmlFor="price" className="form-label text-dark">
                    Price
                  </label>
                  <input
                    name="price"
                    type="num"
                    className="form-control"
                    id="price"
                    required
                  />
                </div>
                <div className="mb-3 modalForm">
                  <label htmlFor="stock" className="form-label text-dark">
                    Stock
                  </label>
                  <input
                    name="stock"
                    type="number"
                    className="form-control"
                    id="stock"
                    required
                  />
                </div>
                <div className="mb-3 modalForm">
                  <label htmlFor="popular" className="form-label text-dark">
                    Popular
                  </label>
                  <select
                    name="popular"
                    type="number"
                    min="0"
                    max="1"
                    className="form-control"
                    id="popular"
                    required
                  >
                    <option value="0">Not popular</option>
                    <option value="1">Popular</option>
                  </select>
                </div>
                <div className="mb-3 modalForm">
                  <label htmlFor="category" className="form-label text-dark">
                    Category
                  </label>
                  <select
                    name="category"
                    type="number"
                    min="1"
                    max="5"
                    className="form-control"
                    id="category"
                    required
                  >
                    <option value="1">Radeon</option>
                    <option value="2">Intel</option>
                    <option value="3">AMD</option>
                    <option value="3">Nvidia</option>
                    <option value="3">MasterRace</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">
                    Select the portrait
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="img"
                    type="file"
                    name="img"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  {" "}
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
