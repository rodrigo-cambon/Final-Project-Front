import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import AddCategory from "../Modals/AddCategory";
import UpdateCategory from "../Modals/UpdateCategory";
import { useSelector } from "react-redux";
function CategoryAdmin() {
  const store = useSelector((state) => state);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_DB}admin/categories`
      );
      setCategories(response.data.categories);
    };
    getCategories();
  }, []);
  const handleDelete = async (destroyCategory) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_DB}admin/category`,
      data: {
        id: destroyCategory.id,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    setCategories(categories.filter((item) => item.id !== destroyCategory.id));
  };
  return (
    <div className=" shadow mt-5 container ps-0">
      <div className="row gx-0">
        <Sidebar />
        <div className="text-start col-12 col-md-10  p-5 mt-2">
          <h2 className="text-dark mt-3 ms-4">CATEGORIES</h2>
          <div className="table-responsive px-4">
            <AddCategory
              categories={categories}
              setCategories={setCategories}
            />
            <table class=" text-start table table-striped shadow ">
              <thead className="border tableHeader text-white ">
                <tr>
                  <th className="">ID</th>
                  <th className="">NAME</th>
                  <th className="hideOnPhone">DESCRIPTION</th>
                  <th className="">UPDATE</th>
                  <th className="">DELETE</th>
                </tr>
              </thead>

              <tbody>
                {categories &&
                  categories.map((category) => (
                    <tr className="border tableHover ">
                      <td className="">{category.id}</td>
                      <td className="">{category.name}</td>
                      <td className="hideOnPhone">{category.description}</td>
                      <td className="text-center">
                        <UpdateCategory
                          categories={categories}
                          setCategories={setCategories}
                          category={category}
                        />
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDelete(category)}
                          className="btn btn-danger py-1 px-2 deleteButton shadow"
                        >
                          <i class="fas fa-trash-alt fs-6 py-0 px-0 "></i>
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

export default CategoryAdmin;
