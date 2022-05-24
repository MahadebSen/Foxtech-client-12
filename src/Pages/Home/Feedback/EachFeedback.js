import React from "react";

const EachFeedback = ({ item }) => {
  const { name, img, feedback } = item;
  return (
    <section className="border-2 p-6 rounded-lg">
      <div>
        <p className="text-left">
          <q>
            {feedback.length > 230 ? feedback.slice(0, 230) + "..." : feedback}
          </q>
        </p>
      </div>
      <div className="flex items-center flax-row gap-4 mt-5 ml-2">
        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className="rounded-full" src={img} alt={name} />
        </div>
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </section>
  );
};

export default EachFeedback;
