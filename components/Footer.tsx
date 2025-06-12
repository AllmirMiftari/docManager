import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="font-semibold text-lg">DocManager</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
