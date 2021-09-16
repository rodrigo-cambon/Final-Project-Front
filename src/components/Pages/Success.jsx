import { Link } from "react-router-dom";
function Success() {
  return (
    <div className="min-height d-flex justify-content-center">
      <div className="heroB py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">THANKS FOR CHOOSING US</h2>
          </div>
        </div>
      </div>
      <div className="height-success d-flex justify-content-center align-items-center">
        <div>
          {" "}
          <h1 className="text-success  mt-5">Success!</h1>
          <p className="mx-5 fs-4">Your order has been processed</p>
          <p>You can return to the home page clicking</p>
          <div>
            <Link to="/" className="mt-2 btn btn-success fs-4">
              Here
            </Link>
          </div>
        </div>
      </div>

      <div className="heroB py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">WE ARE THE MASTER RACE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
