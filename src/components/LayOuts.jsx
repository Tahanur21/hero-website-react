import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LayOuts = () => {
  return (
    <div className="w-full">
      <div>
        <NavBar />
      </div>
      <div className="max-w-8xl min-h-[calc(100vh-200px)] mx-auto bg-base-200 pb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOuts;
