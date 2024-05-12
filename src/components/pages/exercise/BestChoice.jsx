import img1 from "../../../assets/images/exercise/img1.svg";
import img2 from "../../../assets/images/exercise/img2.svg";
import img3 from "../../../assets/images/exercise/img3.svg";

export const BestChoice = () => {
  return (
    <div className="flex flex-col items-center px-5 mt-40">
      <div className="text-5xl text-center font-bold text-teal-800 leading-[3.375rem] max-md:max-w-full max-md:text-4xl">
        Make the Best Choice For You
      </div>
      <div className="mt-8 text-lg text-center text-neutral-700 w-[30%] max-md:w-full">
        Choose the best body game from a variety of exercises we offer here at
        NutriFit. We have what your body needs.
      </div>
      <div className="self-stretch mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-4xl font-bold tracking-wider text-teal-800 whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                srcSet={img2}
                className="w-full rounded-full aspect-square"
              />
              <div className="self-center mt-12 max-md:mt-10">Wellness</div>
            </div>
          </div>
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-4xl font-bold tracking-wider text-teal-800 whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                srcSet={img1}
                className="w-full rounded-full aspect-square"
              />
              <div className="self-center mt-12 max-md:mt-10">Weight-loss</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-4xl font-bold tracking-wider text-teal-800 whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                srcSet={img3}
                className="w-full rounded-full aspect-square"
              />
              <div className="self-center mt-12 max-md:mt-10">
                Muscle Building
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
