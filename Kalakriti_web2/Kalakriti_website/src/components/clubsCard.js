import React from "react";

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

const CollapseDefault = (props) => {
  const { members } = props;
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={toggleOpen}>Members</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12 ">
          <CardBody>
            <Typography>{members}</Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};


export const LeftCard = (props) => {
  const { img, heading, description, members } = props;
  return (
    <>
      <div
        class="overflow-hidden w-3/4 rounded-3xl bg-gradient-to-r from-blue-200 via-blue-100 via-cyan-200 to-cyan-100 m-4  shadow-lg flex flex-col md:flex-row justify-center "
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="h-26 w-full overflow-hidden">
          {" "}
          <img src={img} alt="" class="w-96 h-64 " />{" "}
        </div>
        <div class="grid p-2">
          <div class="font-bold text-3xl text-black m-2 mt-10  font-my_font2 font-bold">
            {heading}{" "}
          </div>
          <div class="text-gray-500 m-2 text-xl font-my_font3">
            {description} <br />
            <div class="pt-3 ">
              <CollapseDefault members={members} />
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
};

export const RightCard = (props) => {
  const { img, heading, description, members } = props;
  return (
    <>
      <div
        class="overflow-hidden w-3/4 rounded-3xl bg-gradient-to-r from-pink-100 via-pink-200 via-slate-200 via-purple-200 to-purple-100 m-4  shadow-lg flex flex-col md:flex-row justify-center"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="grid p-2">
          <div class="font-bold text-3xl text-black m-2 mt-10 font-my_font2 font-bold">
            {heading}{" "}
          </div>
          <div class="text-gray-500 m-2 text-xl font-my_font3">
            {description} <br />
            <div class="pt-3">
              <CollapseDefault members={members} />
            </div>
          </div>
        </div>
        <div class="h-26 w-full overflow-hidden">
          {" "}
          <img src={img} alt="" class="w-96 h-64 " />{" "}
        </div>
      </div>
    </>
  );
};
