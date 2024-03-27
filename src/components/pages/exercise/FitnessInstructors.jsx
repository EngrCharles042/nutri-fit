import img10 from "../../../assets/images/exercise/img10.svg";
import img11 from "../../../assets/images/exercise/img11.svg";
import img12 from "../../../assets/images/exercise/img12.svg";

export const Instructors = () => {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <div className="text-5xl font-bold text-center text-teal-800 leading-[3.375rem] max-md:max-w-full max-md:text-4xl">
        Meet your Fitness Instructors
      </div>
      <div className="mt-6 text-lg text-center text-neutral-700">
        Our Seasoned fitness instructors have got you covered for your body.
      </div>
      <div className="self-stretch mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img10}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] max-md:w-[15rem] py-6 text-white bg-amber-700 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Kayleb & Kylie
              </div>
              <div className="self-center mt-3.5 text-base">
                Fitness Instructors
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img11}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] max-md:w-[15rem] py-6 text-white bg-amber-700 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Kendrick Utar
              </div>
              <div className="self-center mt-3.5 text-base">
                Fitness Instructor
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img12}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] max-md:w-[15rem] py-6 text-white bg-amber-700 rounded-md">
              <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                Lana Whyte
              </div>
              <div className="self-center mt-3.5 text-base">
                Fitness Instructor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
