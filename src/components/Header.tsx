import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  return (
    <header>
      <section className="flex justify-evenly md:grid md:grid-cols-2 p-3 md:p-5 items-center">
        <Link href="/" prefetch={false} className="uppercase">
          <h2 className="text-center text-xl lg:text-3xl font-serif ">
            The
            <span className="font-semibold underline decoration-orange-600 lg:text-4xl mx-2">
              GLOBEL
            </span>
            News
          </h2>
        </Link>
        <div className=" flex items-center justify-center space-x-2">
          <DarkModeBtn />
        </div>
      </section>
      <NavLinks />
      <SearchBar />
    </header>
  );
};

export default Header;
