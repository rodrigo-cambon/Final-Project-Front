import axios from "axios";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Login() {
  const scope = () =>
    toast("This functionality was not within the scope of the project!");
  const error = () => toast("Incorrect Credentials!");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB}token`,
      data: {
        password,
        email,
      },
    }).then((response) => {
      if (response.data.error) {
        error();
      } else {
        dispatch({ type: "CURRENT_USER", payload: response.data });
        dispatch({ type: "TOKEN_USER", payload: response.data.token });
        dispatch({ type: "FIRST_TIME" });
        history.push("/");
      }
    });
  };
  return (
    <div className="backImgLoRe vh-100 vw-100">
      <div className="container ">
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-light  contentInput">
            <h3 className="mb-2 mt-1 textshadow">Log in</h3>
            <form onSubmit={(e) => handleSubmit(e)} className="mb-3">
              <div className="mb-3">
                <input
                  htmlFor="email"
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  htmlFor="password"
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" value="Log In" className="btn btn-dark">
                Log In
              </button>
            </form>

            <p
              className="nav-link text-light text-dark text-decoration-none mb-0 loginForm"
              onClick={scope}
            >
              Forgot password?
            </p>
            <p>
              <Link
                to="/register"
                className=" nav-link text-dark text-decoration-none loginForm"
              >
                Don't have an account? Sign up!
              </Link>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
