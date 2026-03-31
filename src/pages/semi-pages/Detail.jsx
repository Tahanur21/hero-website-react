import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Detail = ({items,handleAddValue,isActive}) => {
      const { image, title, companyName, size, reviews, id, downloads, ratingAvg, description } = items

  const total = Number(downloads);

  const data = [
    { name: "5 star", value: total * (ratingAvg / 5) * 0.5 },
    { name: "4 star", value: total * (ratingAvg / 5) * 0.25 },
    { name: "3 star", value: total * (ratingAvg / 5) * 0.12 },
    { name: "2 star", value: total * (ratingAvg / 5) * 0.08 },
    { name: "1 star", value: total * (ratingAvg / 5) * 0.05 },
  ];

  return (
  <>
    <div className="bg-base-200 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-8xl p-4 sm:p-6 mt-10">
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          
          <img
            src={image}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain bg-gray-100 p-4 rounded-lg"
          />

          <div className="w-full">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Developed by <span className="text-purple-600 font-medium">{companyName}</span>
            </p>

            <div className="divider my-4"></div>

            <div className="flex flex-wrap gap-6 sm:gap-10 text-center lg:text-left">
              
              <div>
                <div className="text-green-500 text-2xl">
                    <img className="w-6 sm:w-8 mx-auto lg:mx-0" src="/src/assets/icon-downloads.png" alt="" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Downloads</p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">
                  {new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}
                </p>
              </div>

              <div>
                <div className="text-orange-400 text-2xl">
                    <img className="w-6 sm:w-8 mx-auto lg:mx-0" src="/src/assets/icon-ratings.png" alt="" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Average Ratings</p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">{ratingAvg}</p>
              </div>

              <div>
                <div className="text-purple-500 text-2xl">
                    <img className="w-6 sm:w-8 mx-auto lg:mx-0" src="/src/assets/icon-review.png" alt="" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Total Reviews</p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">{reviews}</p>
              </div>

            </div>

            <button disabled={isActive} onClick={()=> handleAddValue(items)} 
            className="mt-6 w-fit sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold cursor-pointer">
              {
                isActive === true ? "Installed" :
                `Install Now (${size}MB)`
              }
            </button>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="w-full lg:px-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Ratings</h2>
          <div className="w-full h-55 sm:h-65 lg:h-75">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={70} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="w-full lg:px-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">{description}</p>
        </div>

      </div>
    </div>
  </>
  );
};

export default Detail;