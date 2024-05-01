import img26 from "../../../assets/images/exercise/img26.svg";
import img27 from "../../../assets/images/exercise/img27.svg";
import img28 from "../../../assets/images/exercise/img28.svg";

export const PilateInstructors = () => {
    return (
      <div className="flex flex-col px-5 mt-20">
        <div className="self-center text-5xl font-bold text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
          Meet your Pilates Instructors
        </div>
        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img26}
                className="grow w-full rounded-xl aspect-[0.87] max-md:mt-6"
              />
              <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 max-md:py-3 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
                    <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                      Ella Nkoyo
                    </div>
                    <div className="self-center mt-3.5 max-md:mt-1.5 text-base">
                    Pilates Instructor
                    </div>
                  </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img27}
                className="grow w-full rounded-xl aspect-[0.87] max-md:mt-6"
              />
              <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 max-md:py-3 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
                    <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                      Ifunanya Idowu
                    </div>
                    <div className="self-center mt-3.5 max-md:mt-1.5 text-base">
                    Pilates Instructor
                    </div>
                  </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img28}
                className="grow w-full rounded-xl aspect-[0.87] max-md:mt-6"
              />
              <div className="flex flex-col items-center relative bottom-[5rem] mx-10 py-6 max-md:py-3 text-white text-center bg-amber-700 cursor-pointer hover:bg-green-600 rounded-md">
                    <div className="text-3xl font-bold tracking-wider sm:text-2xl">
                      Tega Yusuf
                    </div>
                    <div className="self-center mt-3.5 max-md:mt-1.5 text-base">
                    Pilates Instructor
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }