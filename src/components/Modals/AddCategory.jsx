import React from "react";
import { useModal } from "../useModal";
import { useSelector } from "react-redux";
import axios from "axios";
const AddCategory = ({ setCategories, categories }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB}admin/category`,
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
    }).then((response) => {
      setCategories([response.data, ...categories]);
    });
    closeModal();
  };
  return (
    <>
      <div>
        <button
          className="btn btnAddProduct my-2 px-4 shadow"
          onClick={openModal}
        >
          ADD CATEGORY
        </button>
        <div className="">
          <div
            className={`modal ${isOpenModal && "is-open"}`}
            onClick={closeModal}
          >
            <div
              className="modal-container text-end"
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
                    required
                  />
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

export default AddCategory;
