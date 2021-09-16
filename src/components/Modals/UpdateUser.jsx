import React from "react";
import { useModal } from "../useModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const UpdateUser = ({ user, setUsers, users }) => {
  const store = useSelector((state) => state);
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.roleId);
  const id = user.id;
  const handleClick = () => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_DB}admin/user`,
      data: {
        id,
        firstname,
        lastname,
        username,
        email,
        role,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setUsers(
      users.map((item) =>
        item.id === id
          ? {
              id: id,
              firstname: firstname,
              lastname: lastname,
              username: username,
              email: email,
              roleId: role,
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
                <label htmlFor="firstname" className="form-label text-dark">
                  Firstname
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="lastname" className="form-label text-dark">
                  Lastname
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  id="lastname"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="email" className="form-label text-dark">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="username" className="form-label text-dark">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 modalForm">
                <label htmlFor="role" className="form-label text-dark">
                  Rol
                </label>
                <select
                  name="role"
                  type="number"
                  min="1"
                  max="2"
                  className="form-control"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="2">Admin</option>
                  <option value="1">User</option>
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

export default UpdateUser;
