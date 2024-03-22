import coverImg from "../../../assets/images/community/coverImg.svg";

export const Cover = () => {
    return (
      <div className="flex flex-col py-0.5">
        <div className="mt-1 w-full bg-orange-50 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={coverImg}
                className="self-stretch my-auto w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col -mt-1 max-md:mt-6 max-md:max-w-full">
                <div className="z-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-5 mt-48 max-md:mt-10 max-md:max-w-full">
                        <div className="text-5xl font-bold text-center text-neutral-700 max-md:max-w-full max-md:text-4xl">
                          Welcome To The NutriFit Community
                        </div>
                        <div className="mx-3 mt-6 text-lg text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
                          Sign up to find your community and start connecting with
                          fellow NutriFiters
                        </div>
                        <div className="flex gap-5 self-center px-9 py-8 mt-7 rounded-3xl border border-solid border-neutral-700 max-md:flex-wrap max-md:px-5">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-start aspect-square fill-neutral-700 w-[22px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e473b4e0eecccace5864d072f837b35989a4e0fba9c707300adab1eb5feddb7d?"
                              className="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e473b4e0eecccace5864d072f837b35989a4e0fba9c707300adab1eb5feddb7d?"
                              className="w-full aspect-square fill-neutral-700"
                            />
                          </div>
                          <div className="flex-auto text-2xl text-neutral-700 max-md:max-w-full">
                            Search the Community
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                      <div className="shrink-0 mx-auto bg-teal-800 rounded-full h-[216px] w-[149px]" />
                    </div>
                  </div>
                </div>
                <div className="shrink-0 self-end mt-0 max-w-full bg-teal-800 rounded-full h-[376px] w-[257px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 shrink-0 mt-0 bg-teal-800 rounded-full h-[381px] w-[145px] max-md:mt-0" />
      </div>
    );
  }
  