import React, { useState } from "react";
import Header from "../components/Header";

export default function UploadSlides() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    // Simulate upload
    alert(`Uploading: ${file.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header always at top */}
      <Header />

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Upload Slides
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Upload your lecture slides (PDF, PPT, PPTX, Images).
          </p>

          {/* Hidden input */}
          <input
            type="file"
            id="fileInput"
            accept=".pdf,.ppt,.pptx,image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Label works as button */}
          <label
            htmlFor="fileInput"
            className="block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition mx-auto"
          >
            {file ? "Change File" : "Select Slide"}
          </label>

          {file && (
            <p className="mt-4 text-sm sm:text-base text-gray-700 truncate px-2">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}

          <button
            onClick={handleUpload}
            className="mt-6 w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
