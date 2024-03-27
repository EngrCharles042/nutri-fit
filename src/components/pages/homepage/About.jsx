import img1 from "../../../assets/images/homepage/img1.svg";
import img2 from "../../../assets/images/homepage/img2.svg";
import img3 from "../../../assets/images/homepage/img3.svg";
import img4 from "../../../assets/images/homepage/img4.svg";

export const About = () => {
  return (
    <div className="flex flex-col my-40 max-md:my-20">
      <div className="flex gap-5 justify-between items-start px-5 w-full text-teal-800 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={img1}
          className="shrink-0 max-w-full rounded-full aspect-square w-[158px] max-md:hidden"
        />
        <div className="flex flex-col self-end mt-5 max-md:max-w-full">
          <div className="self-center text-5xl font-bold leading-[3.375rem] max-md:text-4xl">
            About
          </div>
          <div className="mt-14 text-lg font-medium text-center max-md:mt-10 max-md:max-w-full">
            At NutriFit, we are passionate about helping you unlock your full
            health potential through the power of healthy meals and fitness
            plans. Our mission is to make healthy eating and fitness easy,
            accessible and enjoyable for every user.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet={img2}
          className="shrink-0 max-w-full rounded-full aspect-square w-[9.75rem] max-md:hidden"
        />
      </div>
      <div className="self-center px-5 mt-11 w-full max-w-[60.75rem] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full max-md:hidden">
            <img
              loading="lazy"
              srcSet={img3}
              className="shrink-0 mt-6 max-w-full rounded-full shadow-sm aspect-square w-[9.875rem] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between py-1 pr-1.5 pl-16 text-lg font-bold border border-red-500 border-solid rounded-[3.125rem] text-zinc-800 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="my-auto">
                Ready to begin your healthy journey?{" "}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fafb617c7aa50c50f64e9d0d74724289f68f5efea3128f28b1ae104ef542a211?"
                className="shrink-0 aspect-square w-[3.688rem]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full max-md:hidden">
            <img
              loading="lazy"
              srcSet={img4}
              className="shrink-0 mt-6 max-w-full rounded-full aspect-square w-[9.875rem] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
