import { NavLink } from "react-router";

const Cards = ({ app }) => {
  const { image, title, companyName, size, reviews, id, downloads, ratingAvg } =
    app;
  const handleDetails = () => {
    console.log("Details");
  };
  return (
    <NavLink to={`/details/${id}`}>
      <div
        onClick={handleDetails}
        className="hover-3d my-12 mx-2 cursor-pointer"
      >
        <div className="card lg:w-fit bg-base-100 shadow-sm px-5 pt-2">
          <figure className="bg-stone-200 p-3 shadow-sm rounded-2xl">
            <img className="w-3/4 z-10" src={image} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between items-center">
              <button className="btn">
                <img
                  className="w-4"
                  src={"src/assets/icon-downloads.png"}
                  alt="downloading..."
                />
                <p>
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </p>
              </button>
              <div className="badge badge-soft badge-warning">
                <img className="w-4" src="src/assets/icon-ratings.png" alt="" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </NavLink>
  );
};

export default Cards;
