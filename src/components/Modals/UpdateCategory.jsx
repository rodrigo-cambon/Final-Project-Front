import React from "react";
import { useModal } from "../useModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const UpdateCategory = ({ category, setCategories, categories }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const id = category.id;
  const handleClick = () => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_DB}admin/category`,
      data: {
        id,
        name,
        description,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setCategories(
      categories.map((item) =>
        item.id === id
          ? {
              id: id,
              name: name,
              description: description,
            }
          : item
      )
    );
    closeModal();
  };
  return (
    <>
      <div>
        <button
          className="btn updateButton py-1 px-2 shadow"
          onClick={openModal}
        >
          <i className="fas fa-edit  fs-7"></i>
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
                <label htmlFor="name" className="form-label text-dark">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="description" className="form-label text-dark">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button
                onClick={() => handleClick()}
                className="btn updateButton"
              >
                {" "}
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
