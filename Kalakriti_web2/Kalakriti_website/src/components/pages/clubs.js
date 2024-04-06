import React from "react";
import bgi from "../images/bg02.jpg";
import { LeftCard, RightCard } from "../clubsCard";
import arr from "../jsonFiles/clubs.json";
import img1 from "../images/painting.webp";
import img2 from "../images/sketching.jpg";
import img3 from "../images/penart2.jpg";
import img4 from "../images/crafts.jpg";
import img5 from "../images/mandala.jpg";
import img6 from "../images/digitalart.jpg";
import img7 from "../images/fashion.jpg";
import img8 from "../images/calli2.jpg";

const Clubs = () => {
  return (
    <>
      <section className="relative bg-slate-300">
        {/* Background image */}
        <div
          className="absolute bottom-0 left-0  w-full h-full bg-center  bg-cover bg-no-repeat opacity-100 "
          style={{ backgroundImage: `url(${bgi})` }}
        ></div>
        {/* Heading */}

        <div class="pt-24 md:pt-24 ">
          <div class="flex items-center justify-center my-2">
            <div class="flex-col space-y-4 text-center z-10">
              <h2 class="mb-4 text-4xl tracking-tight font-my_font1 text-gray-900 dark:text-white">
                Our Clubs
              </h2>
              <div class="text-black font-medium text-2xl font-my_font3 ">
                In our vibrant community, the canvas of creativity unfurls with
                the brushstrokes of various art clubs.
              </div>
              <div class="flex items-center justify-center"></div>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="artCards ">
          <div class="flex justify-center ">
            <div class=" flex flex-col max-w-7xl justify-center items-center z-10">
              <RightCard
                img={img1}
                heading={arr[0].heading}
                description={arr[0].description}
                members={arr[0].members}
              />
              <LeftCard
                img={img2}
                heading={arr[1].heading}
                description={arr[1].description}
                members={arr[1].members}
              />
              <RightCard
                img={img3}
                heading={arr[2].heading}
                description={arr[2].description}
                members={arr[2].members}
              />
              <LeftCard
                img={img4}
                heading={arr[3].heading}
                description={arr[3].description}
                members={arr[3].members}
              />
              <RightCard
                img={img5}
                heading={arr[4].heading}
                description={arr[4].description}
                members={arr[4].members}
              />
              <LeftCard
                img={img6}
                heading={arr[5].heading}
                description={arr[5].description}
                members={arr[5].members}
              />
              <RightCard
                img={img7}
                heading={arr[6].heading}
                description={arr[6].description}
                members={arr[6].members}
              />
              <LeftCard
                img={img8}
                heading={arr[7].heading}
                description={arr[7].description}
                members={arr[7].members}
              />
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdn.tailwindcss.com"></script>
    </>
  );
};

export default Clubs;
