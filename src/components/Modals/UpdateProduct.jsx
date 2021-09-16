import React from "react";
import { useModal } from "../useModal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const UpdateProduct = ({ product, setProducts, products }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [popular, setPopular] = useState(product.popular);
  const [categoryId, setCategoryId] = useState(product.categoryId);
  const [categories, setCategories] = useState([]);
  const id = product.id;
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}categories`);
      setCategories(response.data.categories);
    };
    getCategories();
  }, []);
  const handleClick = () => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_DB}admin/product`,
      data: {
        id,
        name,
        price,
        stock,
        popular,
        categoryId,
        description,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setProducts(
      products.map((item) =>
        item.id === id
          ? {
              id: id,
              name: name,
              price: price,
              stock: stock,
              popular: popular,
              categoryId: categoryId,
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
              <div className="mb-3 modalForm text-dark">
                <label htmlFor="description" className="form-label text-dark">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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
                  value={popular}
                  onChange={(e) => setPopular(e.target.value)}
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
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categories &&
                    categories.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
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

export default UpdateProduct;
