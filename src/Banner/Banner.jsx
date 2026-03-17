const Banner = () => {
  return (
    <div className="bg-gray-50">
      {/* text */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          We Build <br /> <span className="text-purple-600">Productive Apps</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl lg:max-w-4xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="btn p-7 rounded-xl">
              <img className="h-12 cursor-pointer" src="src/assets/google_play_icon-icons.com_72023.png" alt="Google Play" /> Google Play
          </button>
          <button className="btn p-7 rounded-xl">
          <img className="h-12 cursor-pointer" src="src/assets/appstore.png" alt="App Store" /> App Store
          </button>
        </div>
      </div>

      {/* banner image */}
      <div className="relative flex justify-center">
        <img src="src/assets/hero.png" alt="app_preview" className="w-full max-w-4/5 lg:max-w-3/5 z-10" />
      </div>

      {/* stats section */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-500 text-white py-12">
        <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>
        <div className="flex justify-center">
          <div className="stats gap-10 stats-vertical lg:stats-horizontal shadow-none text-center">
          <div className="stat">
            <div className="stat-title">Total Downloads</div>
            <div className="stat-value">29.6M</div>
            <div className="stat-desc">21% More Than Last Month</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">906K</div>
            <div className="stat-desc">46% More Than Last Month</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc">31 More Will Launch</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;