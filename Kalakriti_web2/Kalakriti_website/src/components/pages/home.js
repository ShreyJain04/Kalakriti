import React from "react";
import bg1 from "../images/bg1.jpg";
import img from "../images/face3.png";


const Home = () => {
  return (
    <>
    <section>
      <div
        className="absolute top-0 left-0 w-full h-full md:h-full   bg-cover bg-no-repeat opacity-75 z-[-1]"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>
      <div class="flex justify-center mt-20 md:mt-0  p-5 md:p-0 lg:p-20 shadow-lg" >
        <div >
          <img src={img} alt="" class="w-0 h-0 md:h-72 md:w-60  pt-4" />
        </div>
        <div class="flex flex-col text-center justify-center items-center max-w-5xl  md:max-w-7xl text-black z-10">
          <h1 class="text-base font-bold font-my_font3 tracking-wider z-10 mt-4">Welcome to</h1>
          <span class="underline underline-offset-2 text-black -mt-3">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <div class="flex flex-col text-black mt-5">
            <h1 class="text-7xl md:text-[90px] font-my_font2 font-bold">
              Kalakriti
            </h1>
            <p class="text-4xl mt-2 md:mt-4 tracking-wide font-my_font3 font-bold">
              The fine arts society of IIT Bhubaneswar
            </p>
          </div>
          <p class="mt-4 text-xl md:w-[52%]  font-my_font3 font-bold tracking-wide leading-7 z-10">
            Where passion meets palette, fostering creativity, imagination and
            artistic expression within the vibrant IITBBS community.
          </p>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        src="https://kit.fontawesome.com/290d4f0eb4.js"
        crossorigin="anonymous"
      ></script>
      </section>
    </>
  );
};

export default Home;
