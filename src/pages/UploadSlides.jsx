import React, { useState } from "react";
import Header from "../components/Header";
import { UploadCloudIcon, X } from "lucide-react";

function UploadSlides() {
  const [file, setFile] = useState(null);

  const HandleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select file");
      return;
    }
    alert(`Uploaded: ${file.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* main content body */}
      <div className="max-w-3xl mx-auto mt-12 p-8">
        <h1 className="text-gray-600 text-3xl font-bold text-center mt-12">
          Upload Your Slides
        </h1>
        <p className="text-center mt-4 text-gray-600 font-semibold">
          Upload PDF, PPT or DOCX to generate question
        </p>

        {/* Upload Box */}
        <div className="bg-white rounded-xl text-center mt-4 border border-dashed border-gray-300">
          <label className="items-center flex flex-col justify-center cursor-pointer">
            <UploadCloudIcon className="mt-7 text-gray-400" size={40} />
            <span className="text-gray-600 font-semibold">
              Drag and drop your material here or click to upload
            </span>
            <span className="text-gray-600 mt-4 mb-4">
              Supported file types: PDF, PPTX, DOCX
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.pptx,.png,.jpg"
              onChange={HandleFileChange} 
            />
          </label>
        </div>

        <p className="font-bold text-gray-800 mt-4">Uploaded Material</p>

        {/* Uploaded File Display */}
        {file && (
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-6 mt-2">
            <div>
              <p className="text-red-600 font-medium">{file.name}</p>
              <p className="text-red-600 text-sm">
                {(file.size / (1024 * 1024)).toFixed(1)} MB
              </p>
            </div>
            <button
              className="cursor-pointer text-gray-800"
              onClick={() => setFile(null)}
            >
              <X />
            </button>
          </div>
        )}

        {/* generate button */}
        <div className="text-center">
          <button
            onClick={handleUpload}
            className={`px-6 py-3 rounded-xl shadow transition-all ${
              file
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!file}
          >
            Generate Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadSlides;
