import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
