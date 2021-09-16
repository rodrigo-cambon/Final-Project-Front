import "./App.css";
import Main from "./components/Pages/Main";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Pages/AboutUs";
import Footer from "./components/Footer";
import Product from "./components/Pages/Product";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/LogIn";
import ShopCart from "./components/Pages/ShoppingCart";
import Success from "./components/Pages/Success";
import Category from "./components/Pages/Category";
import Admin from "./components/Pages/Admin";
import UserAdmin from "./components/Pages/UserAdmin";
import OrderAdmin from "./components/Pages/OrderAdmin";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./components/Pages/Profile";
import ProductsAdmin from "./components/Pages/ProductsAdmin";
import CategoryAdmin from "./components/Pages/CategoryAdmin";
import PopularProducts from "./components/Pages/PopularProducts";
import NewProducts from "./components/Pages/NewProducts";

function App() {
  const store = useSelector((state) => state);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/shoppingCart" component={ShopCart}></Route>
          <Route path="/success" component={Success}></Route>
          <Route path="/AboutUs" component={AboutUs}></Route>
          <Route path="/product/:categoryId/:slug" component={Product}></Route>
          <Route path="/category/:categoryId" component={Category}></Route>
          <Route path="/products/popular" component={PopularProducts}></Route>
          <Route path="/products/new" component={NewProducts}></Route>
          <Route path="/profile">
            {store.token === "" ? <Redirect to="/" /> : <Profile />}
          </Route>
          <Route exact path="/admin">
            {store.user.roleId < 2 ? <Redirect to="/" /> : <Admin />}
          </Route>
          <Route path="/admin/users">
            {store.user.roleId < 2 ? <Redirect to="/" /> : <UserAdmin />}
          </Route>
          <Route path="/admin/products">
            {store.user.roleId < 2 ? <Redirect to="/" /> : <ProductsAdmin />}
          </Route>
          <Route path="/admin/orders">
            {store.user.roleId < 2 ? <Redirect to="/" /> : <OrderAdmin />}
          </Route>
          <Route path="/admin/categories">
            {store.user.roleId < 2 ? <Redirect to="/" /> : <CategoryAdmin />}
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
