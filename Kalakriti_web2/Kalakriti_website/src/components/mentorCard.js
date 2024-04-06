import React from "react";

const MentorCard = (props) => {
  const { img, name, position } = props;
  return (
    <>
      <div
        class="text-center text-gray-500 bg-slate-200 rounded-3xl shadow-xl "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        // data-aos-once="true"
      >
        <img
          class="mx-auto m-4 w-36 h-36 rounded-full"
          src={img}
          alt="Bonnie Avatar"
        />
        <h3 class="mb-1 text-2xl font-my_font2 font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <p class="font-my_font3 text-lg">{position}</p>
      </div>
    </>
  );
};

export default MentorCard;
