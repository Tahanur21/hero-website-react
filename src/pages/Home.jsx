import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Cards from "./semi-pages/Cards";
import { useEffect, useState } from "react";

const Home = () => {
  const data = useLoaderData();
  const [application, setApp] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setApp(data.slice(0,10));
  }, []);
  return (
    <div>
      <Banner />
      {/* trending apps */}
      <div className="text-center mt-12 space-y-3">
        <h1 className="text-4xl text-stone-700 font-semibold">Trending Apps</h1>
        <p className="text-lg text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 px-10 mt-15">
            {
                application.map((app)=> (
                    <Cards key={app.id} app={app}/>
                ))
            }
         </div>
         {/* show all button */}
         <div>
            <button>
                Show All
            </button>
         </div>
    </div>
  );
};

export default Home;
