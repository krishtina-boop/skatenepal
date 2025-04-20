export default function HeroSection() {
  return (
    <div className="main-parent w-full top-0 pt-0">
      <div className="image-container top-0 flex items-center justify-center bg-home-hero bg-cover bg-no-repeat bg-center  h-screen">
        <div className="text-container z-10 container flex items-center justify-end">
          <div className="information">
            <div className=" text-gray-200 text-text-sm mb-[20px]">
              Discover the latest Inline Skates
            </div>
            <div className="font-worksans text-header-lg text-black italic mb-[19px]">
              <h2>
                Unlock the Joy <br />
                of Inline
              </h2>
            </div>
            <div className="mb-12">
              <p className="text-white text-sm lg:text-lg">
                Elevate Your Skating Experience with Our Diverse <br />
                Collection of Inline Skates and Accessories
              </p>
            </div>
            <button className="pt-[17px] pl-[34px] pr-[35px] pb-[16px]  hover:bg-hover-100 rounded-xl bg-primary-100 text-primary-50">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
