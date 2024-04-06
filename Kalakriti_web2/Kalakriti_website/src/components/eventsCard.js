import React from "react";
import { useState } from "react";

const EventsCard = (props) => {
  const { img, name, date, caption } = props;
  const textLength = caption.length;
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <div
        class="overflow-hidden w-3/4 md:w-1/3  bg-white rounded-3xl m-4 shadow-lg flex flex-col justify-center"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="h-26 w-full overflow-hidden">
          {" "}
          <img src={img} alt="" class="h-64" />{" "}
        </div>
        <div class="text-sm text-gray-500 text-lg font-my_font2 m-2">
          {date}
        </div>
        <div class="font-bold text-2xl font-my_font2 text-black m-2">
          {name}
        </div>
        <div class="font-my_font3 text-xl px-2 ">
        {readMore ? caption : `${caption.slice(0, textLength/4)}...`}
      <button onClick={toggleReadMore} className="text-blue-500">
        {readMore ? 'Read Less' : 'Read More'}
      </button></div>
      </div>
    </>
  );
};

export default EventsCard;
