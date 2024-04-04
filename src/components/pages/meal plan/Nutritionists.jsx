import img10 from "../../../assets/images/mealPlan/img10.svg";
import img11 from "../../../assets/images/mealPlan/img11.svg";
import img12 from "../../../assets/images/mealPlan/img12.svg";

export const Nutritionists = () => {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <div className="text-5xl font-bold text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
        Meet your Nutritionists
      </div>

      <div className="self-stretch mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img10}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] py-6 text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider">
                Marisa Moore
              </div>
              <div className="self-center mt-3.5 text-base">
                Nutrition Specialist{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img11}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] py-6 text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider">Kim Rose</div>
              <div className="self-center mt-3.5 text-base">Dietician </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img12}
              className="grow w-full rounded-xl aspect-[0.87] max-md:mt-5"
            />
            <div className="flex flex-col items-center relative bottom-[5rem] left-[4rem] max-md:left-[2rem] w-[20rem] py-6 text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
              <div className="text-3xl font-bold tracking-wider">
                Ayomikun Andre
              </div>
              <div className="self-center mt-3.5 text-base">Nutritionist </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
