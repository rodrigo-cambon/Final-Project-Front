import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import UpdateOrder from "../Modals/UpdateOrder";

function OrderAdmin() {
  const store = useSelector((state) => state);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getorders = async () => {
      const response = await axios.get(`${process.env.REACT_APP_DB}admin/orders`);
      setOrders(response.data.orders);
      console.log(response.data);
    };
    getorders();
  }, []);
  const handleDelete = async (destroyOrder) => {
    console.log("entre al destroy");
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_DB}admin/order`,
      data: {
        id: destroyOrder.id,
      },
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    setOrders(orders.filter((item) => item.id !== destroyOrder.id));
  };
  return (
    <div className=" shadow mt-5 container ps-0">
    <div className="row gx-0">
      <Sidebar />
      <div className="text-start tableHeight col-12 col-md-10  p-5 mt-2">
        <h2 className="text-dark mt-3 ms-4">ORDERS LIST</h2>
        <div className="table-responsive px-4">
          <table class=" text-start table table-striped shadow ">
            <thead className="border tableHeader text-white ">
              <tr>
                <th className="">ID</th>
                <th className="hideOnPhone">CODE</th>
                <th className="">TOTAL PRICE</th>
                <th className="">USER ID</th>
                <th className="">STATE</th>
                <th className="">UPDATE</th>
                <th className="">DELETE</th>
              </tr>
            </thead>

            <tbody>
            {orders &&
                orders.map((order) => (
                  <tr className="border tableHover">
                    <td className="">{order.id}</td>
                    <td className="hideOnPhone">{order.code}</td>
                    <td className="">{order.totalPrice}</td>
                    <td className="">{order.userId}</td>
                    <td className="">{order.state}</td>
                    <td className="text-center">
                      <UpdateOrder
                        orders={orders}
                        setOrders={setOrders}
                        order={order}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDelete(order)}
                        className="btn btn-danger py-1 px-2 deleteButton "
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

export default OrderAdmin;
