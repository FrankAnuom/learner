import React from "react";
import FeaturedCard from "./FeaturedCard";
import { useNavigate } from "react-router-dom";

function FeaturedGrid() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Upload Slides",
      subtitle: "Upload PDF, PPT, DOCX",
      route: "/upload",
    },
    {
      title: "Ai slide explainer",
      subtitle: "Simplify my slide",
      route: "/explainer",
    },
    {
      title: "Generate Questions",
      subtitle: "Generate question from notes",
      route: "/questions",
    },
    {
      title: "Past questions analyser",
      subtitle: "Upload PQs & predict",
      route: "/analyzer",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <FeaturedCard
          key={index}
          title={feature.title}
          subittle={feature.subtitle}
          onClick={() => navigate(feature.route)}
        />
      ))}
    </div>
  );
}

export default FeaturedGrid;
