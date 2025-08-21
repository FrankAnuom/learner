import React from "react";

function FeaturedCard({ title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-6 bg-white shadow-md rounded-2xl cursor-pointer hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}

export default FeaturedCard;
