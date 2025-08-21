import React from "react";

function FeaturedCard({ title, subittle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-6 bg-white rounded-2xl shadoww-md cursor-pointer flex flex-col justify-between border border-green-400
    "
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{subittle}</p>
    </div>
  );
}

export default FeaturedCard;
