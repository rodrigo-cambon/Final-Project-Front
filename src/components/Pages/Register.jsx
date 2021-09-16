import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const error = () => toast("This user already exists!");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB}register`,
      data: {
        username,
        firstname,
        lastname,
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
      <div className="container   ">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 flex-column text-light contentInput ">
            <h3 className="mt-2 textshadow">Sign up</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  Firstname
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Lastname
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="8"
                />
              </div>

              <button type="submit" className="btn btn-dark mb-3">
                Sign up
              </button>
            </form>
            <p className="text-dark loginForm mb-0">
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy.
            </p>
            <p>
              <Link
                to="/login"
                className=" nav-link text-dark font-weight-bold loginForm"
              >
                Already have an account? Log in!
              </Link>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
