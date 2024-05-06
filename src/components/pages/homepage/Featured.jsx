import img5 from "../../../assets/images/homepage/img5.svg";
import img6 from "../../../assets/images/homepage/img6.svg";
import img7 from "../../../assets/images/homepage/img7.svg";
// import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="self-center text-5xl font-bold text-teal-800 max-md:max-w-full max-md:text-4xl">
        Our Featured Services
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow pt-20 text-2xl font-bold text-white aspect-[0.91] max-md:mt-5">
              <img
                loading="lazy"
                srcSet={img5}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
                {" "}
                Meal Plans
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow pt-20 text-2xl font-bold text-white whitespace-nowrap aspect-[0.91] max-md:mt-5">
              <img
                loading="lazy"
                srcSet={img6}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
                Exercises
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow pt-20 text-2xl font-bold text-white text-wrap aspect-[0.91] max-md:mt-5">
              <img
                loading="lazy"
                srcSet={img7}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="absolute inset-0 flex px-10 text-center items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                Allergy-Friendly Recipes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
