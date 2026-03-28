import { Puff } from "react-loader-spinner";

const AppError = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-20">
      <div className="mb-3">
        <Puff
          visible={true}
          height="200"
          width="200"
          color="#FFD47D"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold">Oops, page not found!</h1>
      <p className="text-stone-500">
        The page you are looking for is not available.
      </p>
      {/* <div>
            <a href="/">
            <button className="btn btn-primary">Go Back!</button>
            </a>
        </div> */}
    </div>
  );
};

export default AppError;
