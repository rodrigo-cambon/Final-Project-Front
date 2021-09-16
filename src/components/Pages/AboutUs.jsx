import React from "react";
import Agus from "../../img/Agus.jpg";
import Rodri from "../../img/Rodri.jpg";
import Santi from "../../img/Santi.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <header className="heroA py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">ABOUT THIS PROJECT</h1>
          </div>
        </div>
      </header>

      <div className="pt-4 container">
        <div className="row gx-0">
          <h2 className="text-center my-3"> PC MASTER HACK </h2>
          <div className="underline mb-2 m-auto"></div>
          <p className="text-dark text-center">
            PC MASTER HACK is an e-commerce simulator created in August 2021 for
            academic purposes, as a result of the final project of a Coding
            Bootcamp (full stack web development training program). Most of the
            pictures used on this site were taken from iBuyPower.
          </p>
          <div className="row my-4 gx-0">
            <h3 className="text-center pt-3">Technologies </h3>
            <div className="underline mb-2 m-auto"></div>
            <p className="text-dark text-center">
              Among others, PC MASTER HACK was created using the following
              languages, frameworks and libraries:
            </p>
            <div className="col-12 col-md-6">
              <h4 className="mt-2">Front-End</h4>
              <ul className="list-group text-center ">
                <li className="list-group-item border-0 bg-transparent">
                  JavaScript <i className="fab fa-js-square"></i>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  React.js <i className="fab fa-react"></i>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  Redux
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  CSS <i class="fab fa-css3-alt"></i>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  Bootstrap <i class="fab fa-bootstrap"></i>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="mt-2">Back-End</h4>{" "}
              <ul className="list-group text-center ">
                <li className="list-group-item border-0 bg-transparent">
                  JavaScript <i className="fab fa-js-square"></i>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  Node.js <i className="fab fa-node-js"></i>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  MySQL
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  Express.js
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  Sequelize
                </li>
              </ul>
            </div>

            <div className="row  gx-0 my-5">
              <div className="col-12 col-md-8">
                <img
                  className="w-100 hover2"
                  src="https://hrdmxylsfdxhrvmiajpd.supabase.in/storage/v1/object/public/ecommerce/img/user.PNG"
                  alt="User experience"
                />
              </div>
              <div className="col-12 col-md-4 my-auto">
                <h4 className="text-center ps-4 pt-3 fs-3 bg-transparent">
                  {" "}
                  User experience{" "}
                </h4>
                <p className="ps-4 text-dark text-center ms-1">
                  Try out PC MASTER HACK!
                </p>
                <p className="ps-4 text-dark text-center mb-0 ms-1">
                  Log in as a regular user by registring a new account{" "}
                  <strong>
                    <Link
                      to="/register"
                      className="text-dark text-decoration-underline"
                    >
                      here
                    </Link>
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="row gx-0 my-5">
              {" "}
              <div className="col-12 col-md-4 my-auto ">
                <h4 className="text-center pt-3 fs-3"> Admin experience </h4>{" "}
                <p className=" text-dark text-center  ">
                  Log in as an administrator{" "}
                  <strong>
                    {" "}
                    <Link
                      to="/login"
                      className="text-dark text-decoration-underline"
                    >
                      here
                    </Link>
                  </strong>
                  , using the following credentials:
                </p>
                <ul className="text-center">
                  <li className="list-group-item border-0 bg-transparent">
                    <strong>Email:</strong> admin@admin.com
                  </li>
                  <li className="list-group-item border-0 bg-transparent">
                    <strong>Password: </strong> admin
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-8">
                <img
                  className="w-100 hover2"
                  src="https://hrdmxylsfdxhrvmiajpd.supabase.in/storage/v1/object/public/ecommerce/img/admin.PNG"
                  alt="Admin experience"
                />
              </div>
            </div>
          </div>
        </div>
        <h4 className="d-inline-block py-2 rounded  text-center px-4  mt-4">
          MEET OUR TEAM
        </h4>
        <div className="underline mb-2 m-auto"></div>
        <div className="row justify-content-center pt-4">
          <div className="row mt-3 gx-1 mb-5">
            <div className="col-md-4 px-4">
              <img
                src={Santi}
                alt="Santi"
                className="responsive rounded hover shadow-lg mb-2"
              />
              <div>
                <h6 className="pt-3 mb-1 text-start ps-5 fs-5">
                  <strong> Santiago González Lojo </strong>
                </h6>
                <p className="text-start ps-5 mb-2">Co-founder, CEO</p>
                <div className="text-start ps-4">
                  <a href="https://linkedin.com/in/santiago-gonzalez-lojo/">
                    <i className="fab fa-linkedin btn fs-3 ps-4 iconHover"></i>
                  </a>
                  <a href="https://github.com/fenixlojo">
                    <i className="fab fa-github btn fs-3 px-2 iconHover"></i>
                  </a>
                  <a href="https://twitter.com/fenix00111">
                    <i className="fab fa-twitter btn fs-3 px-2 iconHover"></i>
                  </a>
                </div>
                <p className="text-start ps-5 pe-4">
                  Born in Montevideo, Uruguay, Fulll Stack Engineer (Jr.), 19
                  years old.Love history,strategy games and mechanical
                  keyboards. Fan of travelling and eager to try new things.
                  Autodidact and a team player.
                </p>
              </div>
            </div>
            <div className="col-md-4 px-4 border-start border-end">
              <img
                src={Agus}
                alt="Agus"
                className="responsive shadow-lg rounded hover mb-2 ps-0"
              />
              <h6 className="pt-3 mb-1 text-start ps-5 fs-5">
                <strong> Agustín Álvarez </strong>
              </h6>
              <p className="text-start ps-5 pe-1 mb-2">Co-founder, COO</p>
              <div className="text-start ps-4">
                <a href="http://linkedin.com/in/agustin-alvarez-rivero">
                  <i className="fab fa-linkedin btn fs-3 ps-4 iconHover"></i>
                </a>
                <a href="https://github.com/Agustin151">
                  <i className="fab fa-github btn fs-3 px-2 iconHover"></i>
                </a>
              </div>
              <p className="text-start ps-5 pe-4">
                I am Agustin I am 20 years old. I am a full stack developer, I
                study law and what I am most passionate about in life is
                learning.
              </p>
            </div>
            <div className="col-md-4 px-4">
              <img
                src={Rodri}
                alt="Rodri"
                className="responsive rounded hover mb-2 shadow-lg"
              />
              <h6 className="pt-3 mb-1 text-start ps-5 fs-5">
                <strong> Rodrigo Cambón </strong>{" "}
              </h6>

              <p className="text-start ps-5 mb-2">Co-founder, CFO</p>
              <div className="text-start ps-4">
                <a href="http://linkedin.com/in/rodrigo-cambon">
                  <i className="fab fa-linkedin btn fs-3 ps-4 iconHover"></i>
                </a>
                <a href="https://github.com/rodrigo-cambon">
                  <i className="fab fa-github btn fs-3 px-2 iconHover"></i>
                </a>
              </div>
              <p className="text-start ps-5 pe-4">
                Full stack web developer junior. Former diplomat with background
                in International Business. Vegetarian and an animal lover.
                Volleyball player. Amateur photographer and piano player.
                Polyglot. Inveterate traveler. Moviegoer. Fan of board and video
                games.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heroA py-5"></div>
    </div>
  );
}

export default AboutUs;
