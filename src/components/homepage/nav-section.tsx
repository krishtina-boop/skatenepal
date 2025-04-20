"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 ${
        isScrolled ? "bg-nav-gradient" : "bg-transparent"
      } fixed top-0 w-full transition-colors duration-300`}
    >
      <div className="flex justify-between w-full container mx-auto">
        <div className="logo text-gray-500">LOGO</div>
        <div className="flex">
          <ul className="flex gap-8 items-center text-gray-500">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#shop">Shop</Link>
            </li>
            {/* <li>
              <Link href="/#faq">FAQ</Link>
            </li> */}
            <li>
              <Link href="/contact">
                <button className="pt-[11px]  hover:bg-hover-100 pl-[13px] pr-[12px] pb-[10px] rounded-xl bg-primary-100 text-primary-50">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
