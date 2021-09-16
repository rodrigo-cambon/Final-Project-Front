import React from "react";
import { useModal } from "../useModal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const FirstTime = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    closeModal();
    dispatch({ type: "FIRST_TIME" });
  };
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
      <div>
        <div className="px-3" onClick={openModal}>
          <div className="py-1 px-5 d-inline-block rounded orderSize firstTime firstTime bg-dark dashboardHover">
            <p className="d-inline text-white fs-4">First time?</p>
          </div>
        </div>
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
                onClick={() => handleClose()}
              >
                <i className="fas fa-times-circle"></i>
              </button>
              <div className="text-center">
                <h3>First time in PC Master Hack?</h3>
                <p>You can log in as:</p>
                <div className="ms-3 text-start">
                  <p className="text-muted">Email:user@user.com</p>
                  <p className="text-muted">Password:user</p>
                </div>

                <p>Or if you want to log in as admin:</p>
                <div className="ms-3 text-start">
                  {" "}
                  <p className="text-muted">Email:admin@admin.com</p>
                  <p className="text-muted">Password:admin</p>
                </div>
                <div className="mb-2 mt-4">
                  {" "}
                  <Link
                    to="/AboutUs"
                    className="btn btn-dark firstTime widthFirstTime"
                  >
                    About us
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    to="/login"
                    className="btn btn-dark firstTime widthFirstTime"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstTime;
