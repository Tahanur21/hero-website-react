import React from "react";
import { ToastContainer } from "react-toastify";

const Cards = ({ app,handleRemove }) => {
  const { image, title, downloads, ratingAvg, size,id } = app;
  return (
    <>
    <div className="flex items-center justify-between bg-white rounded-lg px-3 py-3 sm:px-4 shadow-sm border border-gray-100 w-full">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-contain rounded-lg shrink-0"
        />
        <div className="min-w-0">
          <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{title}</p>
          <div className="flex items-center gap-2 sm:gap-3 mt-1 text-xs text-gray-500 flex-wrap">
            <span className="flex items-center gap-1 text-green-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 2h14v2H5v-2z" />
              </svg>
              {new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {ratingAvg}
            </span>
            <span>{size} MB</span>
          </div>
        </div>
      </div>
      <button onClick={()=>{
        handleRemove(app)
      }} className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded shrink-0 ml-2 cursor-pointer">
        Uninstall
      </button>
    </div>
    </>
  );
};

export default Cards;