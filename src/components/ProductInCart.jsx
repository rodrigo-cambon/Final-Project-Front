import { useState } from "react";
import { useDispatch } from "react-redux";
import RingLoader from "react-spinners/RingLoader";
function ProductInCart({ product }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_TOTAL",
      payload: product.price * product.quantity,
    });
    dispatch({
      type: "ADD_TOTAL",
      payload: product.price * updateQuantity,
    });
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id: product.id, updateQuantity: updateQuantity },
    });
  };
  const [updateQuantity, setUpdateQuantity] = useState(product.quantity);
  const [load, setLoad] = useState(false);
  return (
    <div key={product.id} className=" mb-3 mx-auto px-4">
      <div className="itemInCart  row shadow mb-2  p-2">
        <div className="col-md-2 p-2 imgMovail">
          {!load && (
            <div className="mt-5 loader d-flex justify-content-center align-items-center">
              <RingLoader color="aqua" size={50} />
            </div>
          )}
          <img
            className="imgcar"
            src={`${process.env.REACT_APP_IMG}${product.img}`}
            onLoad={() => setLoad(true)}
            alt=""
          />
        </div>
        <div className="col-md-10">
          <div className="row border-bottom">
            <div className="col-md-10">
              <h4 className="text-start my-0">{product.name} </h4>
            </div>
            <div className="col-md-2 fs-4 text-end MobileTrash">
              <i
                className="trash fas fa-trash-alt fs-6 pe-2 "
                onClick={() => {
                  dispatch({
                    type: "DELETE_PRODUCT",
                    payload: product.id,
                  });
                  dispatch({
                    type: "REMOVE_TOTAL",
                    payload: product.price * product.quantity,
                  });
                }}
              ></i>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-10 ">
                <div className="text-start">
                  <p className="my-0 fs-6">UNIT PRICE USD {product.price}</p>
                  <p className="my-0 fs-6">
                    TOTAL PRICE USD {product.price * product.quantity}
                  </p>
                  <p className="my-0 fs-6">TAXES INC.</p>
                </div>
              </div>
              <div className="qty col-md-2 pt-4 mt-1">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="d-flex align-items-center justify-content-center"
                >
                  <button
                    onClick={() => {
                      updateQuantity > 1 &&
                        setUpdateQuantity((prev) => prev - 1);
                    }}
                    className="btn btn-dark px-1 py-0 quantityButton"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <p className="fs-5 mx-2 pt-2 mt-1 text-dark">
                    {updateQuantity}
                  </p>
                  <button
                    onClick={() => {
                      updateQuantity < product.stock &&
                        setUpdateQuantity((prev) => prev + 1);
                    }}
                    className="btn btn-dark px-1 py-0 quantityButton"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
