import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import EachProduct from "./Pages/EachProduct/EachProduct";
import Home from "./Pages/Home/Home";
import Inventories from "./Pages/Inventories/Inventories";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Pages/Navbar/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./CustomHooks/RequireAuth";
import NotFound from "./Pages/404/NotFound";
import RequireAdmin from "./CustomHooks/RequireAdmin";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventories" element={<Inventories />}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <EachProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route
            path="manageusers"
            element={
              <RequireAdmin>
                <ManageUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
