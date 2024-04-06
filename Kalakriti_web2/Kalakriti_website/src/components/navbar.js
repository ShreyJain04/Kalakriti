import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Kalakriti logo.png";
import ScrollToTopLink from "./ScrollToTopLink";

const Navbar = () => {
  return (
    <header className=" flex-no-wrap fixed top-0 relative z-[99] border-primary/50  bg-my_navy1 text-white shadow-lg ">
      <div class="flex justify-center z-[99]">
        <nav class="self-center flex-no-wrap fixed top-0 w-full  shadow bg-my_navy shadow z-100 ">
          <div class="flex justify-between items-center text-my_gray1">
            <span class="h-100 pl-2 my-2 md:h-200">
              <img src={logo} alt="kalakriti Logo" />
            </span>
            <div class="flex-col justify-center items-center">
              <h1 class=" pl-5 py-3 text-5xl font-my_font2 font-bold ">
                Kalakriti
              </h1>
            </div>

            <ul class="hidden md:flex items-center text-[16px]my_gray1ibold font-my_font2 font-bold pl-32 mr-20">
              <li class="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400  after:origin-left py-6 rounded-lg mx-8">
                <Link to="/" onClick={ScrollToTopLink}>
                  Home
                </Link>
              </li>
              <li class="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left py-6 rounded-lg mx-8">
                <Link to="/clubs" onClick={ScrollToTopLink}>
                  Clubs
                </Link>
              </li>
              <li class="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left py-6 rounded-lg mx-8">
                <Link to="/team" onClick={ScrollToTopLink}>
                  Team
                </Link>
              </li>
              <li class="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left py-6 rounded-lg mx-8">
                <Link to="/events" onClick={ScrollToTopLink}>
                  Events
                </Link>
              </li>
              <li class="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400  after:origin-left py-6 rounded-lg mx-8">
                <Link to="/contact" onClick={ScrollToTopLink}>
                  Contact
                </Link>
              </li>
            </ul>

            <button class="block p-3 mx-10 md:hidden hover:bg-white rounded-xl group">
              <div class="w-5 my-[3px] h-[3px] bg-my_gray1 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-my_gray1 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-my_gray1"></div>
              <div class="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-my_navy shadow group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul class="flex flex-col items-center font-my_font2 text-2xl  pt-[80px]">
                  <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300 py-4 px-6 w-full">
                    <Link to="/" onClick={ScrollToTopLink}>Home</Link>
                  </li>
                  <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300 py-4 px-6 w-full">
                    <Link to="/clubs" onClick={ScrollToTopLink}>Clubs</Link>
                  </li>
                  <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300 py-4 px-6 w-full">
                    <Link to="/team" onClick={ScrollToTopLink} v>Team</Link>
                  </li>
                  <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300 py-4 px-6 w-full">
                    <Link to="/Events" onClick={ScrollToTopLink}>Events</Link>
                  </li>
                  <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300 py-4 px-6 w-full">
                    <Link to="/contact" onClick={ScrollToTopLink}>Contact</Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </nav>
      </div>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </header>
  );
};

export default Navbar;
