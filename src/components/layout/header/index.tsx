import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-[1000]">
      <nav className="bg-slate-600 p-4 text-white font-bold flex items-center">
        <h1>News App</h1>
        <div className="py-1 px-4 ml-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/top-sources"}>Sources</Link>
              </li>
              <li>
                <Link href={"/search"}>Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
