import coverImg from "../../../assets/images/mealPlan/coverImg.svg";
import coverImgMobile from "../../../assets/images/mealPlan/coverMobile.svg";

export const Cover = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-lg font-bold text-white min-h-[721px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={coverImg}
        className="object-cover absolute inset-0 size-full max-md:hidden"
      />
      <img
        loading="lazy"
        srcSet={coverImgMobile}
        className="object-cover absolute inset-0 size-full hidden max-md:block"
      />
      <div className="flex relative flex-col mt-40 max-w-full w-[543px] max-md:mt-10">
        <div className="text-5xl tracking-widest text-center bg-black bg-opacity-50 max-md:max-w-full max-md:text-4xl">
          Transform your Health By
          <br />
          Eating Healthy Meals.
        </div>
        <div className="mt-5 font-medium text-center bg-black bg-opacity-50 max-md:max-w-full">
          Tailored meal plans designed to meet your individual needs for optimal
          health and proper dieting
        </div>
        <div className="justify-center self-center px-8 py-5 mt-6 bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5">
          Get Started Now
        </div>
      </div>
    </div>
  );
};
