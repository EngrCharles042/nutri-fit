import coverImg from "../../../assets/images/exercise/coverImg.svg";

export const Cover = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-lg font-bold text-white min-h-[639px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={coverImg}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center mt-20 max-w-full w-[534px] max-md:mt-10">
        <div className="self-stretch text-5xl text-center leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
          Give Shape To Your Body
          <br />
          With Workouts At NutriFit.
        </div>
        <div className="mt-9 text-center max-md:max-w-full">
          With our numerous exercises here at NutriFit, we have got your body
          covered. From Fitness to Yoga to Pilates, we are here for you.
        </div>
        <div className="justify-center px-8 py-5 mt-10 bg-red-500 rounded-xl max-md:px-5">
          Get Started Now
        </div>
      </div>
    </div>
  );
}