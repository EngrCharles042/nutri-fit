import { useState } from "react";

import coverImg from "../../../assets/images/community/coverImg.svg";
import coverImgMobile from "../../../assets/images/community/coverMobile.svg";
import ellipse1 from "../../../assets/images/community/ellipse1.svg";
import ellipse2 from "../../../assets/images/community/ellipse2.svg";
import ellipse3 from "../../../assets/images/community/ellipse3.svg";

export const Cover = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Handle success (redirect, show message, etc.)
        console.log("Searched succesfully!!!");

        // Reset form data
    setFormData({
      search: "",
    });

    } catch (error) {
      // Handle error (display error message, log, etc.)
      console.error("Search failed:", error.message);
    }
  };

  return (
    // <div className="flex flex-col py-0.5">
    //   <div className="mt-1 w-full bg-orange-50 max-md:max-w-full">
    //     <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
    //       <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
    //         <img
    //           loading="lazy"
    //           srcSet={coverImg}
    //           className="self-stretch my-auto w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
    //         />
    //       </div>
    //       <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
    //         <div className="flex flex-col -mt-1 max-md:mt-6 max-md:max-w-full">
    //           <div className="z-10 max-md:max-w-full">
    //             <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    //               <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
    //                 <div className="flex flex-col grow px-5 mt-48 max-md:mt-10 max-md:max-w-full">
    //                   <div className="text-5xl font-bold text-center text-neutral-700 max-md:max-w-full max-md:text-4xl">
    //                     Welcome To The NutriFit Community
    //                   </div>
    //                   <div className="mx-3 mt-6 text-lg text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
    //                     Sign up to find your community and start connecting with
    //                     fellow NutriFiters
    //                   </div>
    //                   <div className="flex gap-5 self-center px-9 py-8 mt-7 rounded-3xl border border-solid border-neutral-700 max-md:flex-wrap max-md:px-5">
    //                     <div className="flex overflow-hidden relative flex-col justify-center items-center self-start aspect-square fill-neutral-700 w-[22px]">
    //                       <img
    //                         loading="lazy"
    //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e473b4e0eecccace5864d072f837b35989a4e0fba9c707300adab1eb5feddb7d?"
    //                         className="object-cover absolute inset-0 size-full"
    //                       />
    //                       <img
    //                         loading="lazy"
    //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e473b4e0eecccace5864d072f837b35989a4e0fba9c707300adab1eb5feddb7d?"
    //                         className="w-full aspect-square fill-neutral-700"
    //                       />
    //                     </div>
    //                     <div className="flex-auto text-2xl text-neutral-700 max-md:max-w-full">
    //                       Search the Community
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
    //                 <div className="shrink-0 mx-auto bg-teal-800 rounded-full h-[216px] w-[13rem]" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="shrink-0 self-end mt-0 max-w-full bg-teal-800 rounded-full h-[376px] w-[24rem]" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative bottom-[20rem] z-1 shrink-0 mt-0 bg-teal-800 rounded-full h-[381px] w-[24rem] max-md:mt-0" />
    // </div>

    <div>
      <div className="flex gap-5 py-20 max-md:flex-col-reverse max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full max-md:hidden">
          <img
            loading="lazy"
            srcSet={coverImg}
            className="grow w-full aspect-[1.22] max-md:mt-7 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col hidden w-[42%] max-md:ml-0 max-md:w-full max-md:block">
          <img
            loading="lazy"
            srcSet={coverImgMobile}
            className="grow w-full aspect-[1.22] max-md:mt-7 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full max-md:text-center">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold text-neutral-700 max-md:max-w-full max-md:text-4xl">
              Welcome To The NutriFit Community
            </div>
            <div className="mx-3 mt-6 text-lg text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
              Sign up to find your community and start connecting with fellow
              NutriFiters
            </div>
            <form onSubmit={handleSubmit} className="flex gap-5 px-9 py-8 mt-7 mr-40 rounded-3xl border border-solid border-neutral-700 max-md:px-5 max-md:mr-0">
              <div className="flex overflow-hidden relative flex-col justify-center items-center self-start aspect-square fill-neutral-700 w-[22px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2283bb957c8838efc2dc3713380a9c4ed215f5a16a3a065b3847fa8fd514c97f?"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2283bb957c8838efc2dc3713380a9c4ed215f5a16a3a065b3847fa8fd514c97f?"
                  className="w-full aspect-square fill-neutral-700"
                />
              </div>
              <input
                type="text"
                name="search"
              value={formData.search}
              onChange={handleChange}
              id="search"
              autoComplete="search"
                placeholder="Search the Community"
                className="flex-auto text-2xl text-neutral-700 bg-yellow-50 focus:outline-none max-md:max-w-full"
              />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col max-md:ml-0 max-md:w-full">
        <img
            loading="lazy"
            srcSet={ellipse1}
            className="relative bottom-[30rem] left-[50rem] grow w-[17%] aspect-[1.22] overflow-hidden max-md:mt-7 max-md:max-w-full"
          />
          <img
            loading="lazy"
            srcSet={ellipse2}
            className="relative top-[15rem] grow w-[17%] aspect-[1.22] max-md:mt-7 max-md:max-w-full"
          />
          <img
            loading="lazy"
            srcSet={ellipse3}
            className="relative bottom-[-10rem] left-[50rem] grow w-[17%] aspect-[1.22] max-md:mt-7 max-md:max-w-full"
          />
        </div> */}
    </div>
  );
};
