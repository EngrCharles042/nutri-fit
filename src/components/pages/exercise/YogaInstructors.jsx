import img19 from "../../../assets/images/exercise/img19.svg";
import img20 from "../../../assets/images/exercise/img20.svg";
import img21 from "../../../assets/images/exercise/img21.svg";

export const YogaInstructors = () => {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <div className="text-5xl text-center font-bold leading-[54px] text-neutral-700 max-md:max-w-full max-md:text-4xl">
        Meet your Weightloss Coach
      </div>
      <div className="mt-6 text-lg text-center text-neutral-700 w-[30%] max-md:w-full">
        Our Seasoned weightloss coach have got you covered for your body.
      </div>
      <div className="self-stretch mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img19}
              className="grow w-full aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Jessica Okuku
              </div>
              <div className="self-center mt-3.5 text-base">
                Weight-loss Coach
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img20}
              className="grow w-full aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Ayo Oluwole
              </div>
              <div className="self-center mt-3.5 text-base">
                Weight-loss Coach
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img21}
              className="grow w-full aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Sharon Ephraim
              </div>
              <div className="self-center mt-3.5 max-md:mt-1.5 text-base">
                Weight-loss Coach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
