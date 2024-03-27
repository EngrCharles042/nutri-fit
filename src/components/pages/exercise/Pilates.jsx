import img22 from "../../../assets/images/exercise/img22.svg";
import img23 from "../../../assets/images/exercise/img23.svg";
import img24 from "../../../assets/images/exercise/img24.svg";
import img25 from "../../../assets/images/exercise/img25.svg";


export const Pilates = () => {
    return (
      <div className="flex flex-col px-5 py-20 mt-20 bg-red-50 shadow-md">
        <div className="self-center text-5xl font-bold text-teal-800 leading-[54px] max-md:text-4xl">
          Pilates Exercises
        </div>
        <div className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img22}
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img23}
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img24}
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img25}
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }