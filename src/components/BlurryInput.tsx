import React, { useState } from "react";

const BlurryInputButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-4 bg-white/30 backdrop-filter backdrop-blur-lg rounded-md shadow-lg flex justify-between items-center">
      <input
        type="text"
        value={inputValue}
        className="bg-transparent border-none focus:ring-0 text-black placeholder-gray-700"
        placeholder="Enter text..."
      />
      <button
        onClick={handleCopyClick}
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Copy
      </button>
    </div>
  );
};

export default BlurryInputButton;
