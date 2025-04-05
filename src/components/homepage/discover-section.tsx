export default function DiscoverSection() {
  return (
    <div className="main-parent w-full top-0 pt-0">
      <div className="image-container top-0 flex items-center justify-center bg-home-discover bg-cover bg-no-repeat bg-center  h-screen">
        <div className="text-container z-10 container flex items-center justify-start">
          <div className="information">
            <div className=" text-gray-100 text-lg mb-[20px]">
              Elevate Your Style
            </div>
            <div className="font-worksans text-white font-bold text-header-lg italic mb-[19px]">
              <h2>Discover the</h2>
              <h2>Best Inline</h2>
            </div>
            <div className="mb-[20px]">
              <p className="text-gray-100 text-sm">
                Unlock the Thrill of Inline Skating with Our Premium <br />{" "}
                Selection of Skates and Accessories
              </p>
            </div>
            <div className="mb-[55px]">
              <p className="text-gray-100 text-sm">
                Explore Our Inline Skate Lineup
              </p>
            </div>
            <button className="pt-[17px]  hover:bg-hover-100 pl-[44px] pr-[42px] pb-[16px] rounded-xl bg-primary-100 text-primary-50">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
