import React from "react";
import EventsCard from "../eventsCard";
import events from "../jsonFiles/events.json";

import img1 from "../images/artgallery.jpg";
import img2 from "../images/wallpainting.jpg";
import img3 from "../images/inktober.jpg";
import img4 from "../images/doodlemyday.jpg";
import img5 from "../images/sessions.jpg";
import img6 from "../images/bookmark.jpg";

import bgi from "../images/bg05.jpg";

const Events = () => {
  return (
    <>
      <section className="relative bg-slate-300">
        <div
          className="absolute bottom-0 left-0  w-full h-full bg-center  bg-cover bg-no-repeat opacity-100 "
          style={{ backgroundImage: `url(${bgi})` }}
        ></div>

        {/* Heading */}
        <div class="pt-24 md:pt-28 ">
          <div class="flex items-center justify-center my-2">
            <div class="flex-col space-y-4 text-center z-10">
              <h2 class="mb-4 text-4xl tracking-tight font-my_font1 text-gray-900 dark:text-white">
                Activities
              </h2>
              <div class="text-black font-medium font-my_font3 text-2xl">
                Brushing strokes of creativity, our art society fosters
                inspiration through workshops and competitions, enriching the
                canvas of artistic expression.
              </div>
              <div class="flex items-center justify-center"></div>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
            <EventsCard
              img={img1}
              name={events[0].name}
              date={events[0].date}
              caption={events[0].caption}
            />
            <EventsCard
              img={img2}
              name={events[1].name}
              date={events[1].date}
              caption={events[1].caption}
            />
            <EventsCard
              img={img3}
              name={events[2].name}
              date={events[2].date}
              caption={events[2].caption}
            />
          </div>
        </div>

        <div class="flex items-center justify-center my-2">
          <div class="flex-col space-y-4 text-center z-10">
            <h2 class="m-12 text-4xl tracking-tight font-my_font1 text-gray-900 dark:text-white">
              Workshops and Competitions
            </h2>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
            <EventsCard
              img={img4}
              name={events[3].name}
              date={events[3].date}
              caption={events[3].caption}
            />
            <EventsCard
              img={img5}
              name={events[4].name}
              date={events[4].date}
              caption={events[4].caption}
            />
            <EventsCard
              img={img6}
              name={events[5].name}
              date={events[5].date}
              caption={events[5].caption}
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

export default Events;
