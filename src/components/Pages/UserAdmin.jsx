import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import UpdateUser from "../Modals/UpdateUser";
function UserAdmin() {
  const store = useSelector((state) => state);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getusers = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}admin/users`);
      setUsers(response.data.users);
    };
    getusers();
  }, []);
  const handleDelete = async (destroyUser) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_DB}admin/user`,
      data: {
        id: destroyUser.id,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    setUsers(users.filter((item) => item.id !== destroyUser.id));
  };
  return (
    <div className=" shadow mt-5 container ps-0">
      <div className="row gx-0">
        <Sidebar />
        <div className="text-start col-12 col-md-10  p-5 mt-2">
          <h2 className="text-dark mt-3 ms-4">USERS LIST</h2>
          <div className="table-responsive px-4">
            <table class=" text-start table table-striped shadow ">
              <thead className="border tableHeader text-white ">
                <tr>
                  <th className="">ID</th>
                  <th className="">USERNAME</th>
                  <th className="hideOnPhone">FIRSTNAME</th>
                  <th className="hideOnPhone">LASTNAME</th>
                  <th className="hideOnPhone">EMAIL</th>
                  <th className="hideOnPhone">ROLE</th>
                  <th className="">UPDATE</th>
                  <th className="">DELETE</th>
                </tr>
              </thead>

              <tbody>
                {users &&
                  users.map((user) => (
                    <tr className="border tableHover ">
                      <td className="">{user.id}</td>
                      <td className="">{user.username}</td>
                      <td className="hideOnPhone">{user.firstname}</td>
                      <td className="hideOnPhone">{user.lastname}</td>
                      <td className="hideOnPhone">{user.email}</td>
                      <td className="text-center hideOnPhone">{user.roleId}</td>
                      <td className="text-center">
                        <UpdateUser
                          users={users}
                          setUsers={setUsers}
                          user={user}
                        />
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDelete(user)}
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
export default UserAdmin;
