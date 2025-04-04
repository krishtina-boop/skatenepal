export default function HeroSection() {
  return (
    <div className="main-parent w-full top-0 pt-0">
      <div className="image-container top-0 flex items-center justify-center bg-home-hero bg-cover bg-no-repeat bg-center  h-screen">
        <div className="text-container z-10 container flex items-center justify-end">
          <div className="information">
            <div className="font-serif text-gray-500 text-sm mb-[20px]">
              Discover the latest Inline Skates
            </div>
            <div className="font-serif text-black font-bold text-4xl italic mb-[19px]">
              <h2>Unlock the Joy</h2>
              <h2>of Inline</h2>
            </div>
            <div className="mb-[54px]">
            <p className="text-black font-bold">
              Elevate Your Skating Experience with Our Diverse <br />
              Collection of Inline Skates and Accessories
            </p>

            </div>
            <button className="pt-[17px] pl-[34px] pr-[35px] pb-[16px] rounded-xl bg-red-600 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
