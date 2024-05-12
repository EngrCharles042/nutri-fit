import img22 from "../../../assets/images/exercise/img22.svg";
import img23 from "../../../assets/images/exercise/img23.svg";
import img24 from "../../../assets/images/exercise/img24.svg";


export const Pilates = () => {
    return (
      <div className="flex flex-col px-5 py-20 mt-20 bg-red-50 shadow-md">
      <div className="self-center text-5xl font-bold text-teal-800 leading-[54px] max-md:text-4xl">
        Muscle Building Programs
      </div>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-center items-center max-md:flex-col max-md:gap-0">
          <div className="flex flex-col text-lg font-bold max-w-[400px] text-neutral-700">
            <img
              loading="lazy"
              srcSet={img22}
              className="w-full aspect-[1.19]"
            />
            <div className="flex flex-col py-7 pr-1.5 pl-4 w-full rounded-b-lg border border-amber-700 border-solid">
              <div className="text-2xl text-teal-800">Nutri fit BBL</div>
              <div className="mt-5">
              From targeted exercises to expert tips on form and technique, we're committed to helping you reach your glute goals and unlock your full potential 
              </div>
              {/* <div className="flex gap-5 px-0.5 mt-12">
                <div className="flex-auto">Play Audio for: How to Pose</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af01a48615ece9cb073e4cfa1b02349302b53dce81e599ba0b06db0d6f73b125?"
                  className="shrink-0 aspect-square w-[30px]"
                />
              </div> */}
            </div>
          </div>
          <div className="flex flex-col text-lg font-bold max-w-[400px] text-neutral-700 max-md:mt-10">
            <img
              loading="lazy"
              srcSet={img23}
              className="w-full aspect-[1.19]"
            />
            <div className="flex flex-col py-7 pr-2.5 pl-5 w-full rounded-b-lg border border-amber-700 border-solid">
              <div className="text-2xl text-teal-800">At Leg Up</div>
              <div className="self-start mt-5">
              Reach new heights in lower body fitness. Target legs, calves, and ankles with our specialized plans for strength, stability, and flexibility. Every day is Leg Day
              </div>
              {/* <div className="flex gap-5 mt-10">
                <div className="flex-auto">Play Audio for: How to Pose</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/020bf9ebf04924d62e77d33f7e9cb4679a868fb5f19023a5273b4484fe087e69?"
                  className="shrink-0 aspect-square w-[30px]"
                />
              </div> */}
            </div>
          </div>
          <div className="flex flex-col text-lg font-bold max-w-[401px] text-neutral-700 max-md:mt-10">
            <img
              loading="lazy"
              srcSet={img24}
              className="w-full aspect-[1.19]"
            />
            <div className="flex flex-col px-4 py-7 w-full rounded-b-lg border border-amber-700 border-solid">
              <div className="text-2xl text-teal-800">Core Strength Central</div>
              <div className="self-start mt-5">
              Whether you're striving for those coveted six-pack abs or seeking relief from back pain and stiffness, our expertly curated routines will guide you every step of the way.
              </div>
              {/* <div className="flex gap-5 px-px mt-10">
                <div className="flex-auto">Play Audio for: How to Pose</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/020bf9ebf04924d62e77d33f7e9cb4679a868fb5f19023a5273b4484fe087e69?"
                  className="shrink-0 aspect-square w-[30px]"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 self-center mt-20 ml-7 max-md:mt-10">
        <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
        <div className="shrink-0 w-2.5 h-2.5 bg-amber-700 rounded-full" />
        <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-amber-700 border-solid stroke-[1px]" />
      </div>
    </div>

      // <div className="flex flex-col px-5 py-20 mt-20 bg-red-50 shadow-md">
      //   <div className="self-center text-5xl font-bold text-teal-800 leading-[54px] max-md:text-4xl">
      //     Pilates Exercises
      //   </div>
      //   <div className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
      //     <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      //       <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      //         <img
      //           loading="lazy"
      //           srcSet={img22}
      //           className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
      //         />
      //       </div>
      //       <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      //         <img
      //           loading="lazy"
      //           srcSet={img23}
      //           className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
      //         />
      //       </div>
      //     </div>
      //   </div>
      //   <div className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
      //     <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      //       <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      //         <img
      //           loading="lazy"
      //           srcSet={img24}
      //           className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
      //         />
      //       </div>
      //       <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      //         <img
      //           loading="lazy"
      //           srcSet={img25}
      //           className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }