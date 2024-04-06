import React from "react";
import TeamCard from "../teamCard";
import MentorCard from "../mentorCard";
import arr from "../jsonFiles/mentors.json";
import team from "../jsonFiles/team.json";
import grouppic from "../images/grouppic.jpg"
import bgi from "../images/bg04.jpg";

import img1 from "../images/members/Sanjana Varre.jpeg";
import img2 from "../images/members/Kartheek Pavada.jpg";
import img3 from "../images/members/MEESALA AAKANKSHA.jpeg";
import img4 from "../images/members/Matta Rohit.jpg";

import img5 from "../images/members/Bhavya Garg.jpg";
import img6 from "../images/members/Ayush Mishra.jpg";
import img7 from "../images/members/Sarin Hassan.jpg";
import img8 from "../images/members/Sushma Reddy.jpeg";
import img9 from "../images/members/Nithya Narishetty.jpg";
import img10 from "../images/members/BestaSaiPrathap.jpg";
import img11 from "../images/members/MeghanaRaaj.jpg";
import img12 from "../images/members/Natasha.jpg";

const Team = () => {
  return (
    <>
      <section className="relative bg-slate-300">
        <div
          className="absolute bottom-0 left-0  w-full h-full bg-center  bg-gradient-to-r from-pink-300 to-pink-300 via-pink-200 via-pink-150 via-red-300 via-orange-200 via rose-300 via-rose-200 via-pink-200 via-rose-200 via-orange-300 to-pink-300"
          // style={{ backgroundImage: `url(${bgi})` }}
        ></div>

        {/* Heading */}
        
        <div class="pt-24 md:pt-28">
          <div class="flex items-center justify-center my-2">
            <div class="flex-col space-y-8 text-center z-10">
              <h2 class="mb-4 text-4xl  font-my_font1 tracking-tight font-extrabold text-gray-900 dark:text-white ">
                Team Kalakriti
              </h2>
              <div class="text-black font-medium font-my_font3 text-2xl">
                In the symphony of life, let our harmonies resonate, as we dance
                through colors and shapes, creating beauty with every step.
              </div>
              <div class="flex items-center justify-center"></div>
            </div>
          </div>
        </div>

        {/* Secretary and Governers (Team Card) */}

        <div class="flex items-center justify-center text-center w-[100%]  ">
          <div class="flex flex-col items-center justify-center  w-full bg-gradient-to-r from-pink-300 to-pink-300 via-pink-200 via-pink-150 via-red-300 via-orange-200 via rose-300 via-rose-200 via-pink-200 via-rose-200 via-orange-300 to-pink-300 z-10">
            <div class="flex flex-col p-2 m-2 w-full ">
              <div class="flex items-center  justify-center md:flex-row flex-col space-x-4 space-y-4 p-2 ">
                <TeamCard
                  img={img1}
                  name={team[0].name}
                  position={team[0].position}
                />

                <TeamCard
                  img={img2}
                  name={team[1].name}
                  position={team[1].position}
                />

                <TeamCard
                  img={img3}
                  name={team[2].name}
                  position={team[2].position}
                />

                <TeamCard
                  img={img4}
                  name={team[3].name}
                  position={team[3].position}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        {/* Mentors Cards */}
        <div class="flex items-center justify-center my-2">
          <div class="flex-col space-y-4 text-center z-10">
            <h2 class="text-4xl  font-my_font1 tracking-tight font-extrabold text-gray-900 ">
              Mentors
            </h2>
          </div>
        </div>

        <section class="bg-slate-400 dark:bg-gray-900 z-10">
          <div class="py-4 px-8 mx-0 md:mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="grid gap-8 grid-cols-2 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <MentorCard
                img={img5}
                name={arr[0].name}
                position={arr[0].position}
              />
              <MentorCard
                img={img6}
                name={arr[1].name}
                position={arr[1].position}
              />
              <MentorCard
                img={img7}
                name={arr[2].name}
                position={arr[2].position}
              />
              <MentorCard
                img={img8}
                name={arr[3].name}
                position={arr[3].position}
              />
              <MentorCard
                img={img9}
                name={arr[4].name}
                position={arr[4].position}
              />
              <MentorCard
                img={img10}
                name={arr[5].name}
                position={arr[5].position}
              />
              <MentorCard
                img={img11}
                name={arr[6].name}
                position={arr[6].position}
              />
              <MentorCard
                img={img12}
                name={arr[7].name}
                position={arr[7].position}
              />
            </div>
          </div>
        </section>

        {/* Group photo */}

        <div class="mt-4 z-10">
          <div class="flex items-center justify-center my-2">
            <div class="flex-col space-y-4 text-center z-10">
              <h2 class="mb-4 text-4xl font-my_font1 tracking-tight font-extrabold text-gray-900 dark:text-white">
                Members
              </h2>
            </div>
          </div>
        </div>

        <div class="mt-2 z-10">
          <div class="flex items-center justify-center my-2">
            <img
              className=" h-48 md:h-96 w-full py-2 px-4 md:py-4 md:px-48  object-cover object-center shadow-xl shadow-blue-gray-900/50 z-10"
              src={grouppic}
              alt="Not Found"
            />
          </div>
        </div>
      </section>

      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Team;
