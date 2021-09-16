import Sidebar from "../Sidebar";
import AddProduct from "../Modals/AddProduct";
import AddCategory from "../Modals/AddCategory";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Admin() {
  const scope = () =>
    toast.dark("This functionality was not within the scope of the project!");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <>
      <div className="mt-5 shadow container px-0">
        <div className="row gx-0">
          <Sidebar />
          <div className="col-12 col-md-10 tableHeight ">
            <div className="row gx-0 mt-0 pt-5">
              <div className="col-12 col-md-4 mt-5 px-3">
                <Link to="/admin/users">
                  <div className="border d-inline-block py-5 px-3 rounded userDashboard dashboardHover dashboardSize text-center">
                    <p className="d-inline pe-3 text-white fs-4">USERS</p>
                    <p className="d-inline text-white fs-3">
                      <i class="fas fa-users"> </i>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 mt-5 px-3">
                <Link to="/admin/products">
                  <div className="border d-inline-block py-5 px-3 rounded productsDashboard dashboardSize dashboardHover">
                    <p className="d-inline pe-3 text-white fs-4">PRODUCTS</p>
                    <p className="d-inline text-white fs-3">
                      <i class="far fa-chart-bar"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-4 mt-5 px-3">
                <Link to="/admin/categories">
                  <div className="border d-inline-block py-5 px-3 rounded categoriesDashboard dashboardSize dashboardHover text-center">
                    <p className="d-inline pe-3 text-white fs-4">CATEGORIES</p>
                    <p className="d-inline text-white fs-3">
                      <i class="fas fa-list"></i>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row gx-0 text-center">
              <div className="col-12 col-md-4 mt-3 px-3">
                <Link to="/admin/orders">
                  <div className="border d-inline-block py-5 px-3 rounded dashboardSize ordersDashboard dashboardHover text-center">
                    <p className="d-inline pe-3 text-white fs-4">ORDERS</p>
                    <p className="d-inline text-white fs-3">
                      <i class="fas fa-file-invoice-dollar"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-4 mt-3 px-3" onClick={scope}>
                <div className="border py-5 px-3 d-inline-block rounded dashboardSize revenueDashboard dashboardHover">
                  <p className="d-inline pe-3 text-white fs-4">REVENUE</p>
                  <p className="d-inline text-white fs-3">
                    <i class="fas fa-dollar-sign"></i>
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4 mt-3 px-3" onClick={scope}>
                <div className="border py-5 d-inline-block px-3 rounded dashboardSize metricsDashboard dashboardHover text-center">
                  <p className="d-inline pe-3 text-white fs-4">METRICS</p>
                  <p className="d-inline text-white fs-3">
                    <i class="fas fa-chart-line"></i>
                  </p>
                </div>
              </div>

              <div className="row mt-5 gx-0">
                <div className="col-12 col-6">
                  <AddProduct products={products} setProducts={setProducts} />
                </div>
                <div className="col-12 col-6">
                  <AddCategory
                    categories={categories}
                    setCategories={setCategories}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
