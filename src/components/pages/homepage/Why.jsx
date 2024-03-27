import img8 from "../../../assets/images/homepage/img8.svg";

export const Why = () => {
  return (
    <div className="mt-20 bg-red-500 bg-opacity-10 flex flex-col items-center justify-center">
      <div className="text-5xl text-center py-20 font-bold text-teal-800">
        Why NutriFit?
      </div>
      <div className="flex flex-col text-lg pb-20 font-bold text-zinc-500">
        <div className="flex gap-5 w-full max-md:px-5 max-md:flex-col max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-1 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98af8689f77e0ae781813c40db94fef51ae7295421c744a5248cd2cdcc5e715f?"
              className="shrink-0 w-20 aspect-[1.19]"
            />
            <div className="flex-auto my-auto">
              Access to 150+ Home and Gym
              <br />
              workout videos
            </div>
          </div>
          <div className="flex flex-1 pl-40 max-md:pl-0 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98af8689f77e0ae781813c40db94fef51ae7295421c744a5248cd2cdcc5e715f?"
              className="shrink-0 w-20 aspect-[1.19]"
            />
            <div className="flex-auto my-auto">
              Personalization and progress
              <br />
              tracking
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-12 w-full max-md:px-5 max-md:flex-col max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-1 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5de44ea399238eee54161c7dae22cdd388d776ec4fb9eeee6cca34d36d26033?"
              className="shrink-0 w-20 aspect-[1.19]"
            />
            <div className="flex-auto my-auto">
              Expert guidance and instructions
            </div>
          </div>
          <div className="flex flex-1 pl-40 max-md:pl-0 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98af8689f77e0ae781813c40db94fef51ae7295421c744a5248cd2cdcc5e715f?"
              className="shrink-0 w-20 aspect-[1.19]"
            />
            <div className="flex-auto my-auto">
              Cost effective community and
              <br />
              support
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-12 w-full max-md:px-5 max-md:flex-col max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-1 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc385d9ce100a5318cf972c76d54bb2e715a37993f0f630c5ecadd0787b7089?"
              className="shrink-0 w-20 aspect-[1.22]"
            />
            <div className="flex-auto my-auto">Real-time results</div>
          </div>
          <div className="flex flex-1 pl-40 max-md:pl-0 gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98af8689f77e0ae781813c40db94fef51ae7295421c744a5248cd2cdcc5e715f?"
              className="shrink-0 w-20 aspect-[1.19]"
            />
            <div className="flex-auto my-auto">
              Wide range of workout and yoga
              <br />
              exercises
            </div>
          </div>
        </div>
      </div>

      <img loading="lazy" srcSet={img8} className="w-full aspect-[2.27]" />
    </div>
  );
};