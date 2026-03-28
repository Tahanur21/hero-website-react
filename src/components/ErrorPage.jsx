import Footer from "./Footer";
import NavBar from "./NavBar";

const ErrorPage = () => {
    return (
        <div className="w-full">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <div className="mb-3">
            <img src="/src/assets/error-404.png" alt="" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold">Oops, page not found!</h1>
        <p className="text-stone-500">The page you are looking for is not available.</p>
        <div>
            <a href="/">
            <button className="btn btn-primary">Go Back!</button>
            </a>
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default ErrorPage;