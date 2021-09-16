import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    /* <!-- Footer --> */

    <>
      <footer className="line  page-footer text-light bg-dark pt-2 Foot mobilefoot">
        {/* <!-- Footer Links --> */}

        <div className="container text-start text-md-left">
          {/*  <!-- Footer links --> */}
          <div className="row text-start text-md-left mt-3 pb-3 gx-0">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mt-3 ps-0">
              <h6 className="text-uppercase mb-4 font-weight-bold aqua">
                PC MASTER HACK
              </h6>
              <p>
                We are a developer company that seeks to develop thousands of
                pages like this and better than this
              </p>
              <h6 className="text-uppercase mb-4 font-weight-bold aqua">
                We work with
              </h6>
              <p>
                <i className="fab fa-cc-mastercard fs-1"></i>{" "}
                <i className="fab fa-cc-visa fs-1"></i>{" "}
                <i className="fab fa-cc-amex fs-1"></i>{" "}
                <i className="fab fa-cc-discover fs-1"></i>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none" />

            {/*      <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
              <h6 className="text-uppercase mb-4 font-weight-bold aqua">
                Products
              </h6>
              <div>
                <p className="foot linkHover">
                  AMD
                </p>
              </div>
              <div>
                <p className="foot linkHover">
                  Intel
                </p>
              </div>
              <div>
                <p className="foot linkHover">
                  Nvidia
                </p>
              </div>
              <div>
                <p className="foot linkHover">
                  Radeon
                </p>
              </div>
            </div>
            {/*  <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold aqua">
                Useful links
              </h6>
              <p>
                <Link className="foot linkHover" to="/shoppingCart">
                  Your Cart
                </Link>
              </p>
              <p>
                <Link className="foot linkHover" to="/login">
                  Login
                </Link>
              </p>
              <p>
                <Link className="foot linkHover" to="/register">
                  Register
                </Link>
              </p>
              <p>
                <Link className="foot linkHover" to="/aboutUs">
                  Help
                </Link>
              </p>
            </div>

            {/*  <!-- Grid column --> */}
            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold aqua">
                Contact
              </h6>
              <p>
                <i className="fas fa-home mr-3"></i> Montevideo, ST 11900, UY
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> PcMasterHa@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +598 099 33 44 67
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 2304 89 90
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/*  <!-- Footer links --> */}

          <hr />

          {/* <!-- Grid row --> */}
          <div className="row d-flex align-items-center">
            {/* <!-- Grid column --> */}
            <div className="col-md-7 col-lg-8">
              {/*  <!--Copyright--> */}
              <p className="text-start text-md-left aqua">
                © 2020 Copyright: PC MASTER HACK
              </p>
            </div>
            {/*    <!-- Grid column --> */}

            {/*  <!-- Grid column --> */}
            <div className="col-md-5 col-lg-4 ml-lg-0">
              {/* <!-- Social buttons --> */}
              <div className="text-end text-md-right ">
                <ul className="list-unstyled list-inline pe-2">
                  <li className="list-inline-item">
                    <p className="foot btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f aqua"></i>
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <p className="foot btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter aqua"></i>
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <p className="foot btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus-g aqua"></i>
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="/aboutUs"
                      className="foot btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <i className="fab fa-linkedin-in aqua"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row -->
           */}
        </div>
        {/* <!-- Footer Links --> */}
      </footer>
    </>
  );
}

export default Footer;
