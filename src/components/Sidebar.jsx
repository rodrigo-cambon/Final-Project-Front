import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="col-12 col-md-2 text-white pt-5 sidebarHeight sidebAdmin mt-2 text-center shadow bg-dark ">
      <div className="mt-3 px-0 ">
        <h1 className="ocultMobile">ADMIN</h1>
      </div>
      <Link to="/admin">
        <div className="sidebarHover ocultMobile py-2 fs-4 mt-4">Home</div>
      </Link>
      <Link to="/admin/orders">
        <div className="sidebarHover Mobileorden py-2 fs-4 mt-1">Orders</div>
      </Link>
      <Link to="/admin/products">
        <div className="sidebarHover Mobileorden py-2 mt-1 fs-4">Products</div>
      </Link>
      <Link to="/admin/users">
        <div className="sidebarHover Mobileorden mt-2 py-1 fs-4">Users</div>
      </Link>
      <Link to="/admin/categories">
        <div className="sidebarHover Mobileorden mt-2 py-1 fs-4">
          Categories
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
