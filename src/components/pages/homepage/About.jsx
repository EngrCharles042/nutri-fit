import img1 from "../../../assets/images/homepage/img1.svg";
import img2 from "../../../assets/images/homepage/img2.svg";
import img3 from "../../../assets/images/homepage/img3.svg";
import img4 from "../../../assets/images/homepage/img4.svg";

export const About = () => {
  return (
    <div className="min-h-[631px]">
      <div className="flex justify-center mt-40">
        <img
          loading="lazy"
          srcSet={img1}
          className="w-full rounded-full aspect-square max-w-[158px]"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-teal-800 leading-[54px] max-w-[119px]">
            About
          </div>
          <div className="text-lg mt-10 mx-8 font-medium text-center text-teal-800 max-w-[800px]">
            At NutriFit, we are passionate about helping you unlock your full
            health potential through the power of healthy meals and fitness
            plans. Our mission is to make healthy eating and fitness easy,
            accessible and enjoyable for every user.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet={img2}
          className="w-full rounded-full aspect-square max-w-[158px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          loading="lazy"
          srcSet={img3}
          className="w-full relative top-[5rem] rounded-full shadow-sm aspect-square max-w-[158px]"
        />
        <div className="flex gap-5 justify-center mx-10 pl-16 text-lg font-bold border border-red-500 border-solid max-w-[535px] rounded-[50px] text-neutral-700 max-md:flex-wrap max-md:pl-5">
          <div className="flex-auto my-auto">
            Ready to begin your healthy journey?{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fafb617c7aa50c50f64e9d0d74724289f68f5efea3128f28b1ae104ef542a211?"
            className="shrink-0 px-1 aspect-square w-[59px]"
          />
        </div>
        <img
          loading="lazy"
          srcSet={img4}
          className="w-full relative top-[5rem] rounded-full aspect-square max-w-[158px]"
        />
      </div>
    </div>
  );
};
