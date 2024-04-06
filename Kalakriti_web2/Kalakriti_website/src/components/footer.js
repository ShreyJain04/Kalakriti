import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-stone-300 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div class="me-12 font-my_font3 font-bold hidden lg:block  z-10">
            <span>Get connected with us on social networks:</span>
          </div>

          <div class="flex justify-center">
            <a
              href="https://www.facebook.com/Kalakriti.IITBBS/"
              class="me-6 [&>svg]:h-6 [&>svg]:w-6 opacity-40 hover:opacity-100 rounded-md p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/kalakriti_iitbbs/?hl=en"
              class="me-6 [&>svg]:h-6 [&>svg]:w-6 opacity-40 hover:opacity-100 rounded-md p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="me-12 my-4 mx-6 font-my_font3 font-bold hidden lg:block ">
          <span>Instagram Art pages of our members:</span>
        </div>

        <div class="mx-6 py-3 text-center md:text-left ">
          <div class="grid-cols-4 grid gap-8 md:grid-cols-4 lg:grid-cols-5 ">
            <a
              href="https://www.instagram.com/mr_acry_lic?igsh=amQzM3cxbjlnOGxy"
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Kartheek Pavada
              </h6>
            </a>
            <a
              href="https://www.instagram.com/the.art.sutra?igsh=MTh0NWhjNGgwdmd3aA=="
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Matta Rohit
              </h6>
            </a>
            <a
              href="https://www.instagram.com/hrishikeshartx_b13?igsh=d2l5ZTgwNmE1OXR5"
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Hrishikesh Bharali
              </h6>
            </a>
            <a
              href="https://www.instagram.com/pritomart?utm_source=qr&igsh=cG80bDcydng4anJu"
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Priyatosh Sarkar
              </h6>
            </a>
            <a
              href="https://www.instagram.com/artistic___ram?igsh=ancxZmx5bG5pYXA0"
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Kalyam Ram
              </h6>
            </a>
            <a
              href="https://www.instagram.com/shdup_127_art?igsh=MWR2dGk0aW1xdHJhMQ=="
              class="hover:text-blue-500"
            >
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Mohitha Kamireddy
              </h6>
            </a>
            <a href="https://www.instagram.com/ink.n_skin?igsh=MjRjMG5xZjJiNDJw">
              <h6 class="mb-2 flex justify-center font-medium  font-my_font3 md:justify-start">
                Karan Raj
              </h6>
            </a>
            <a href="https://www.instagram.com/lucifer_sama66?igsh=NzR4a2VsMm1naWoy">
              <h6 class="mb-2 flex justify-center font-medium font-my_font3 md:justify-start">
                Shovan Biswas
              </h6>
            </a>
          </div>
        </div>

        <div class="bg-neutral-400 p-3 text-center">
          <span>© 2024 Copyright:</span>
          Kalakriti
        </div>
      </footer>
    </>
  );
};

export default Footer;
