import img19 from "../../../assets/images/exercise/img19.svg";
import img20 from "../../../assets/images/exercise/img20.svg";
import img21 from "../../../assets/images/exercise/img21.svg";

export const YogaInstructors = () => {
    return (
      <div className="flex flex-col items-center px-5">
        <div className="text-5xl font-bold leading-[54px] text-neutral-700 max-md:max-w-full max-md:text-4xl">
          Meet your Yoga Instructors
        </div>
        <div className="mt-6 text-lg text-center text-neutral-700 max-md:max-w-full">
          Lorem ipsum dolor sit amet, conse ctetur adipis cing elit, sed do you a
          dips
        </div>
        <div className="self-stretch mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img19}
                      className="grow w-full aspect-[0.87] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img20}
                      className="grow w-full aspect-[0.87] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img21}
                      className="grow w-full aspect-[0.87] max-md:mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }