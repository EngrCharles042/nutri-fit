import img10 from "../../../assets/images/mealPlan/img10.svg";
import img1 from "../../../assets/images/allergyFriendly/line.svg";

export const Meet = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-rose-50 shadow-2xl max-md:px-5">
      <div className="max-w-full w-[893px] max-md:mt-10">
        <div className="mb-20 text-5xl text-center font-bold text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl max-md:mb-10">
          Meet your Nutritionists
        </div>

        <div className="flex flex-col mt-10 hidden max-md:block max-md:mt-10 max-md:max-w-full">
          <img src={img1} alt="line" />
          <div className="text-4xl font-bold text-center text-teal-800 max-md:max-w-full">
            Matilde Ikegwuonu
          </div>
          <div className="mt-5 text-6xl font-extrabold text-amber-700 leading-[93.88799999999999px] max-md:mt-5 max-md:max-w-full max-md:text-4xl">
            “
          </div>
          <div className="flex flex-col pl-14 max-md:pl-5 max-md:max-w-full">
            <div className="self-start text-lg leading-7 text-neutral-700 max-md:max-w-full">
              Asides being a trained Nutritionist, Matilde has raised 3 kids
              with peanut and shellfish allergies. Her recipes are a smooth
              medley of Nigerian cusine and allergen-free food
            </div>
            <div className="self-end mt-5 text-6xl font-extrabold text-amber-700 leading-[93.88799999999999px] max-md:mt-5 max-md:text-4xl">
              „
            </div>
          </div>
        </div>

        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center grow py-20 w-full max-md:w-[15rem] max-md:self-center bg-teal-800 rounded-3xl shadow-2xl max-md:mt-10">
              <div className="relative w-[27rem] max-md:w-[17.5rem] self-center flex flex-col items-center px-5 py-10 bg-teal-800 rounded-3xl shadow-2xl aspect-square max-md:px-5">
                <img
                  loading="lazy"
                  srcSet={img10}
                  className="w-full aspect-square w-[40rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
              <img src={img1} alt="line" className="max-md:hidden" />
              <div className="text-4xl font-bold text-center text-teal-800 max-md:hidden max-md:max-w-full">
                Matilde Ikegwuonu
              </div>
              <div className="mt-5 text-6xl font-extrabold text-amber-700 leading-[93.88799999999999px] max-md:hidden max-md:mt-5 max-md:max-w-full max-md:text-4xl">
                “
              </div>
              <div className="flex flex-col pl-14 max-md:pl-5 max-md:max-w-full">
                <div className="self-start text-lg leading-7 text-neutral-700 max-md:hidden max-md:max-w-full">
                  Asides being a trained Nutritionist, Matilde has raised 3 kids
                  with peanut and shellfish allergies. Her recipes are a smooth
                  medley of Nigerian cusine and allergen-free food
                </div>
                <div className="self-end mt-5 text-6xl font-extrabold text-amber-700 leading-[93.88799999999999px] max-md:hidden max-md:mt-5 max-md:text-4xl">
                  „
                </div>
                <div className="flex gap-2.5 self-center mt-20 ml-7 max-md:mt-10">
                  <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
                  <div className="shrink-0 w-2.5 h-2.5 bg-amber-700 rounded-full" />
                  <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
