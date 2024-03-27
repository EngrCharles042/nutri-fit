import img4 from "../../../assets/images/exercise/img4.svg";
import img5 from "../../../assets/images/exercise/img5.svg";
import img6 from "../../../assets/images/exercise/img6.svg";
import img7 from "../../../assets/images/exercise/img7.svg";
import img8 from "../../../assets/images/exercise/img8.svg";
import img9 from "../../../assets/images/exercise/img9.svg";

export const Fitness = () => {
    return (
      <div className="flex flex-col px-5 mt-20 py-20 bg-red-50 shadow-md">
        <div className="self-center text-5xl font-bold text-teal-800 leading-[3.375rem] max-md:max-w-full max-md:text-4xl">
          Fitness Classes For Every Goal
        </div>
        <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img4}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-7 text-2xl font-bold text-teal-800">
                  Push Up
                </div>
                <div className="mt-5 text-lg text-neutral-700">
                  Push up exercise helps to strengthen the arms and core fo the
                  back.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img5}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-7 text-2xl font-bold text-teal-800">
                  Arm Stretch
                </div>
                <div className="mt-4 text-lg text-neutral-700">
                  Arm stretch exercise helps to widen the core of the arms for
                  better stability.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img6}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-6 text-2xl font-bold text-teal-800">
                  Arm Wrestling
                </div>
                <div className="mt-2.5 text-lg text-neutral-700">
                  Arm wrestling is usually done to help strengthen the back.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img7}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-6 text-2xl font-bold text-teal-800">
                  Standing Head-Knee
                </div>
                <div className="mt-2.5 text-lg text-neutral-700">
                  The standing head-knee exercise helps to adjust ones standing
                  and sitting posture.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img8}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-7 text-2xl font-bold text-teal-800">
                  Leg Stretch
                </div>
                <div className="mt-2.5 text-lg text-neutral-700">
                  Leg Stretch are usually used for warms before starting exercises
                  to prepare the nerves.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet={img9}
                  className="w-full aspect-[0.75]"
                />
                <div className="mt-6 text-2xl font-bold text-teal-800">
                  Weights
                </div>
                <div className="mt-2.5 text-lg text-neutral-700">
                  Carrying light weights help to build and strengthen the muscles
                  in your arms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }