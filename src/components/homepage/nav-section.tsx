export default function NavSection() {
  return (
    <div className="relative w-full">
      <nav className="navcomponents z-50 bg-transparent mt-[11px] absolute top-3 items-center flex justify-between ml-[144px] mr-[123px]">
        <div className="logo">LOGO</div>
        <div className="flex">
          <ul className="flex gap-8 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>FAQ</li>
            <li>
              <button className="pt-[11px]  hover:bg-hover-100 pl-[13px] pr-[12px] pb-[10px] rounded-xl bg-red-600 text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
