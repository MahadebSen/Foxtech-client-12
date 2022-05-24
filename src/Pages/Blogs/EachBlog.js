import React from "react";

const EachBlog = ({ item, index }) => {
  const { question, answer } = item;
  return (
    <div className="text-left border-2 rounded-xl px-4 py-3">
      <p className="font-semibold text-xl">
        <span>{index + 1}.</span> {question}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Ans.</span> {answer}
      </p>
    </div>
  );
};

export default EachBlog;
