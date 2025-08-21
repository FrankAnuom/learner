import React from "react";
import Header from "./Header";
import FeaturedGrid from "./FeaturedGrid";

function Dashboard() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800">
      {/* nav bar */}
      <Header />

      {/* main content */}
      <main className="flex-grow px-6 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-8">
          Stay consistent, Learn Smarter
        </h1>
        {/* features */}
        <FeaturedGrid/>
      </main>
    </div>
  );
}

export default Dashboard;
