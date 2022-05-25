import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import EachBlog from "./EachBlog";

const Blogs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mx-3 my-7">
        {items.map((item, index) => (
          <EachBlog key={item._id} item={item} index={index}></EachBlog>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
