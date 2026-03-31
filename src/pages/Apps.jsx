import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Cards from "./semi-pages/Cards";
import AppError from "./semi-pages/AppError";

const Apps = () => {
  const data = useLoaderData();
  const [apps, setApp] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(() => {
    setApp(data);
  }, [data]);

  const searchFilter = apps.filter((app)=> 
        app.title.toLowerCase().includes(search.toLowerCase())
)

  return (
    <>
      <div className="space-y-10 px-13 pt-10">
        <div className="text-center space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Our All Applications
          </h1>
          <p className="text-xs lg:text-lg text-stone-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-stone-600">
            ({apps.length}) Apps Found
          </h1>
          {/* search field */}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
            type="search" 
            required 
            placeholder="Search Apps"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
          </label>
        </div>
      </div>
      {
        searchFilter.length === 0 && search.length > 0 ? 
        <div className="min-h-[calc(100vh-300px)]">
            <AppError/>
        </div>
        :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 lg:px-10 lg:mt-4">
        {searchFilter.map((app) => (
          <Cards app={app} key={app.id} />
        ))}
      </div>
      }
    </>
  );
};

export default Apps;
