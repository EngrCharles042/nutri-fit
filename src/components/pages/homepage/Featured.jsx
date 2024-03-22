import img5 from "../../../assets/images/homepage/img5.svg";
import img6 from "../../../assets/images/homepage/img6.svg";
import img7 from "../../../assets/images/homepage/img7.svg";

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
              <div className="relative justify-center items-center top-[22rem] max-md:top-[15rem] left-[10rem] max-md:left-[8rem] rounded-none">
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
              <div className="relative justify-center items-center top-[22rem] max-md:top-[15rem] left-[10rem] max-md:left-[8rem] rounded-none">
                Exercises
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow pt-20 text-2xl font-bold text-white aspect-[0.91] max-md:mt-5">
              <img
                loading="lazy"
                srcSet={img7}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative justify-center top-[22rem] max-md:top-[15rem] left-[6rem] max-md:left-[3rem] rounded-none">
                Allergy-Friendly Recipes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
