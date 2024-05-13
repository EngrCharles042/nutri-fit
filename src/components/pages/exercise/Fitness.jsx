import img4 from "../../../assets/images/exercise/img4.svg";
import img5 from "../../../assets/images/exercise/img5.svg";
import img6 from "../../../assets/images/exercise/img6.svg";

export const Fitness = () => {
  return (
    <div className="flex flex-col px-5 mt-20 py-20 bg-red-50 shadow-md">
      <div className="self-center text-5xl font-bold text-teal-800 leading-[3.375rem] max-md:max-w-full max-md:text-4xl">
        Wellness Programs
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
              <div className="mt-5 flex flex-col max-w-[382px]">
                <div className="w-full text-2xl font-bold text-teal-800">
                  Family Vitality Package
                </div>
                <div className="mt-2.5 w-full text-base text-neutral-700">
                  Our family-friendly program blends fun dance workouts with
                  health benefits, promoting active lifestyles and joyful
                  bonding.
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/EooGVENwE2t0Pz7AVSguIp"
                target="_blank"
                className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-6">
              <img
                loading="lazy"
                srcSet={img5}
                className="w-full aspect-[0.75]"
              />
              <div className="mt-5 text-2xl font-bold text-teal-800">
                Total Wellness
              </div>
              <div className="mt-2.5 text-lg text-neutral-700">
                Unlock Wellness with Yoga & Pilates. Experience tailored
                exercises for mind-body harmony, flexibility, and inner peace
              </div>
            </div>
            <a
              href="https://chat.whatsapp.com/EooGVENwE2t0Pz7AVSguIp"
              target="_blank"
              className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700"
            >
              Subscribe
            </a>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-6">
              <img
                loading="lazy"
                srcSet={img6}
                className="w-full aspect-[0.75]"
              />
              <div className="mt-5 text-2xl font-bold text-teal-800">
                Aging in style
              </div>
              <div className="mt-2.5 text-lg text-neutral-700">
                At our center, age is no barrier. Join our program for promoting
                wellness, mobility and vitality through good exercises. Thrive
                with us!
              </div>
            </div>
            <a
              href="https://chat.whatsapp.com/EooGVENwE2t0Pz7AVSguIp"
              target="_blank"
              className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
      {/* <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
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
      </div> */}
      <div className="flex gap-2.5 self-center mt-20 ml-7 max-md:mt-10">
        <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
        <div className="shrink-0 w-2.5 h-2.5 bg-amber-700 rounded-full" />
        <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
      </div>
    </div>
  );
};
