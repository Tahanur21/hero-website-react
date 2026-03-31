import { Outlet, useNavigation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { RotatingLines } from "react-loader-spinner";

const LayOuts = () => {
  const navigation = useNavigation();

  return (
    <div className="w-full">
      <div>
        <NavBar />
      </div>
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center fixed inset-0 z-50 bg-white/60">
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
        </div>
      )}
      <div className="max-w-8xl min-h-[calc(100vh-200px)] mx-auto bg-base-200 pb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOuts;