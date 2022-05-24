import React, { useEffect, useState } from "react";
import EachBlog from "./EachBlog";

const Blogs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 mx-3 my-7">
      {items.map((item, index) => (
        <EachBlog key={item._id} item={item} index={index}></EachBlog>
      ))}
    </div>
  );
};

export default Blogs;
