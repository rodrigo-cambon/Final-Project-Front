import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}categories`);
      setCategories(response.data.categories);
    };
    getCategories();
  }, []);
  return (
    <div>
      <nav className="navbar mobilenav navbar-expand-lg navbar-dark bg-dark fixed-top text-light">
        <div className="container text-start p-0">
          <Link className="navbar-brand" to="/">
            PC MASTER HACK
          </Link>
          <button
            className="navbar-toggler mb-1 ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <Link
            className="btn btn-outline-light cartmobiletwo"
            to="/shoppingcart"
          >
            <i className=" bi-cart-fill me-1"></i>
            <i className="fas fa-shopping-cart"></i>
            <span className="badge text-dark ms-1 rounded-pill backgroundAqua border border-dark">
              {store.products.length}
            </span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/popular">
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/new">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories &&
                    categories.map((item) => (
                      <li key={item.id}>
                        <Link
                          className="dropdown-item"
                          to={`/category/${item.id}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
              {store.token !== "" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Your Profile
                  </Link>
                </li>
              )}
              {store.token !== "" && store.user.roleId > 1 && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
              {store.token === "" && (
                <Link className="nav-link text-white px-1 mt-1" to="/register">
                  Register
                </Link>
              )}
              {store.token === "" && (
                <Link className="nav-link text-white mt-1" to="/login">
                  Login
                </Link>
              )}
              {store.token !== "" && (
                <button
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    history.push("/login");
                  }}
                  className="btn rounded-pill follow text-white"
                >
                  Logout
                </button>
              )}
              <div className="pb-1 mt-1">
                <Link
                  className="btn btn-outline-light cartmobile"
                  to="/shoppingcart"
                >
                  <i className=" bi-cart-fill me-1"></i>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge text-dark ms-1 rounded-pill backgroundAqua border border-dark">
                    {store.products.length}
                  </span>
                </Link>
              </div>
              <div className="pt-2">
                {store.token !== "" && (
                  <div className="ms-3">
                    <p className="mt-1">Welcome! {store.user.username}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
