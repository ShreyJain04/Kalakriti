import React from "react";

const TeamCard = (props) => {
  const { img, name, position } = props;
  return (
    <>
      <div class="flex-col px-6 py-2 shadow-xl bg-slate-300 rounded-2xl hover:scale-105 w-[90%] md:w-1/4 " >
        <div class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden  mx-auto z-[-1]">
          <img src={img} alt="NOT FOUND" class="" />
        </div>
        <div class="text-2xl font-my_font2 font-medium text-stone-600 cursor-pointer hover:text-stone-400">
          {name}
        </div>
        <div class="italic text-gray-500 text-lg font-my_font3">{position}</div>
      </div>
    </>
  );
};

export default TeamCard;
