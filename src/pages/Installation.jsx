/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { getValue, removeValue } from "../Utilities/addToInstall";
import Card from "./semi-pages/Card";
import { ClipLoader } from "react-spinners";
import { RotatingLines } from "react-loader-spinner";
import { IoMdArrowDropdown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const data = getValue();
    setApps(data);
  }, []);
  const handleRemove = (item) => {
    if (item.length === 0) {
      return 0;
    } else {
      removeValue(item);
      const data = getValue();
      setApps(data);
      toast.success("App Uninstalled", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleHighToLow = () => {
    const data = getValue();
    const highTolow = data.sort((a, b) => b.downloads - a.downloads);
    setApps(highTolow);
  };
  const handleLowToHigh = () => {
    const data = getValue();
    const highTolow = data.sort((a, b) => a.downloads - b.downloads);
    setApps(highTolow);
  };
  return (
    <>
      <div className="px-15 py-10 text-center space-y-5">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-sm text-stone-500">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <h1 className="font-bold">{apps.length} Apps Found</h1>
          {/* dropdown button */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 text-stone-500">
              Sort By Size <IoMdArrowDropdown className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-stone-500"
            >
              <li>
                <a onClick={handleHighToLow}>High-Low</a>
              </li>
              <li>
                <a onClick={handleLowToHigh}>Low-High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {apps.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-7">
          <RotatingLines
            visible={true}
            height="150"
            width="100"
            color="#632EE3"
            strokeWidth="3"
            animationDuration="0.5"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <h1 className="text-4xl">No app installed yet!</h1>
        </div>
      ) : (
        <div className="px-16 space-y-6 pt-4">
          {apps.map((app) => (
            <Card key={app.id} app={app} handleRemove={handleRemove} />
          ))}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Installation;
