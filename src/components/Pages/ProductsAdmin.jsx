import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import AddProduct from "../Modals/AddProduct";
import UpdateProduct from "../Modals/UpdateProduct";
import { useSelector } from "react-redux";
function ProductsAdmin() {
  const store = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}admin/products`
      );
      setProducts(response.data.products);
    };
    getProducts();
  }, []);
  const handleDelete = async (destroyProduct) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_DB}admin/product`,
      data: {
        id: destroyProduct.id,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setProducts(products.filter((item) => item.id !== destroyProduct.id));
  };
  return (
    <div className=" shadow mt-5 container ps-0">
      <div className="row gx-0">
        <Sidebar />
        <div className="text-start col-12 col-md-10  p-5 mt-2">
          <h2 className="text-dark mt-3 ms-4">PRODUCTS LIST</h2>

          <div className="table-responsive px-4">
            <AddProduct products={products} setProducts={setProducts} />
            <table class=" text-start table table-striped shadow ">
              <thead className="border tableHeader text-white ">
                <tr>
                  <th className="pe-0">NAME</th>
                  <th className="pe-0">PRICE</th>
                  <th className="px-0">STOCK</th>
                  <th className="px-0 hideOnPhone">POPULAR</th>
                  <th className="px-0 mx-0">CATEGORY</th>
                  <th className="px-0 text-center">UPDATE</th>
                  <th className="px-0 text-center">DELETE</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.map((product) => (
                    <tr className="border tableHover">
                      <td className="pe-0 ">{product.name}</td>
                      <td className="pe-0">USD {product.price}</td>
                      <td className="pe-0">{product.stock}</td>
                      <td className="pe-0 hideOnPhone">{product.popular}</td>
                      <td className="pe-0">{product.categoryId}</td>
                      <td className="pe-0 text-center">
                        <UpdateProduct
                          products={products}
                          setProducts={setProducts}
                          product={product}
                        />
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDelete(product)}
                          className="btn btn-danger py-1 px-2 deleteButton "
                        >
                          <i class="fas fa-trash-alt fs-6 py-0 px-0  "></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsAdmin;
