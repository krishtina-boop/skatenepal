export default function ExploreSection() {
  return (
    <div className="main-parent w-full top-0 pt-0">
      <div className="image-container top-0 flex items-center justify-center bg-home-explore bg-cover bg-no-repeat bg-center  h-screen">
        <div className="text-container z-10 container flex items-center justify-end">
          <div className="information">
            {/* <div className="font-serif text-gray-500 text-sm mb-[20px]">
              Discover the latest Inline Skates
            </div> */}
            <div className="font-serif text-white font-bold text-4xl italic mb-[19px]">
              <h2>Explore</h2>
              <h2>Our Skate</h2>
            </div>
            <div className="mb-[54px]">
              <p className="text-white">
                Find the Perfect Inline Skates and Accessories <br /> to Suit
                Your Needs
              </p>
            </div>
            <button className="pt-[13px] pl-[43px] pr-[45px] pb-[13px] rounded-xl bg-red-600 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
