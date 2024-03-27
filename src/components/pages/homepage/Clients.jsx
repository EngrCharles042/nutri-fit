import img9 from "../../../assets/images/homepage/image1.svg";
import img10 from "../../../assets/images/homepage/image2.svg";
import img11 from "../../../assets/images/homepage/image3.svg";
import { FaStar } from "react-icons/fa";

export const Clients = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-20 px-4 py-8 text-center">
      <div className="max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d794d376b2c0a4870f4d2743cb1d2bbe64a203d46d87b174efa92b3d6233bd0?"
          className="mx-auto w-20 h-20 fill-red-500"
        />
        <h2 className="mt-4 text-4xl font-bold text-teal-800 leading-[3.375rem]">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg leading-7 mx-auto max-w-[41.688rem] text-zinc-500">
          Discover the experiences of our satisfied clients as they share
          stories of success, collaboration, and the transformative impact of
          choosing NutriFit.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-5 md:overflow-x-auto mt-8">
        <div className="flex flex-col justify-center p-8 rounded-2xl border border-amber-700 shadow-sm">
          <div className="flex gap-2.5 items-center text-amber-700">
            <img
              loading="lazy"
              src={img9}
              className="w-[3.75rem] h-[3.75rem] rounded-full"
              alt="John Anderson"
            />
            <div>
              <div className="text-base text-left font-medium whitespace-nowrap">
                John Anderson
              </div>
              <div className="text-sm text-left">Entrepreneur</div>
            </div>
            <div className="flex gap-1 my-auto">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
          <div className="mt-8 text-base leading-6 text-amber-700">
            NutriFit is a great platform for getting the right fitness plans and
            meal plans. Saved me on cost.
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 rounded-2xl border border-amber-700 shadow-sm mt-4 md:mt-0">
          <div className="flex gap-2.5 items-center text-amber-700">
            <img
              loading="lazy"
              src={img10}
              className="w-[3.75rem] h-[3.75rem] rounded-full"
              alt="Sarah Johnson"
            />
            <div>
              <div className="text-base text-left font-medium whitespace-nowrap">
                Sarah Johnson
              </div>
              <div className="text-sm text-left">CEO Boutique</div>
            </div>
            <div className="flex gap-1 my-auto">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
          <div className="mt-8 text-base leading-6 text-amber-700">
            I love NutriFit, it is great. I get my own tailored meal plans from
            here and they are so healthy.
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 rounded-2xl border border-amber-700 shadow-sm mt-4 md:mt-0">
          <div className="flex gap-2.5 items-center text-amber-700">
            <img
              loading="lazy"
              src={img11}
              className="w-[3.75rem] h-[3.75rem] rounded-full"
              alt="Emily Turner"
            />
            <div>
              <div className="text-base text-left font-medium whitespace-nowrap">
                Emily Turner
              </div>
              <div className="text-sm text-left">Founder EventMasters</div>
            </div>
            <div className="flex gap-1 my-auto">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
          <div className="mt-8 text-base leading-6 text-amber-700">
            Thanks to NutriFit, my healthy lifestyle journey is on track and
            ready to begin. I have my meal plans and fitness plans ready to go.
          </div>
        </div>
      </div>
    </div>
  );
};


  /* <div className="flex gap-4 py-2 pr-2 pl-6 text-base font-medium tracking-normal leading-6 text-red-500 border border-red-500 border-solid rounded-[100px] max-md:flex-wrap max-md:pl-5">
        <div className="flex-auto my-auto max-md:max-w-full">
          We have 100+ Happy Customers
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62760cd0d0d3fa7eb53fc606ef796754ef383dca439711f606013e73867596e6?"
          className="shrink-0 max-w-full aspect-[2.7] w-[108px]"
        />
      </div> */

