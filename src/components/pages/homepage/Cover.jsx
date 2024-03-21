import coverImg from "../../../assets/images/homepage/coverImg.svg";

export const Cover = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 pb-12 w-full min-h-[620px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={coverImg}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-2 mt-[477px] max-md:mt-10">
          <div className="shrink-0 w-4 h-4 bg-white rounded-full" />
          <div className="shrink-0 w-4 h-4 bg-red-500 rounded-full" />
          <div className="shrink-0 w-4 h-4 bg-red-500 rounded-full" />
        </div>
      </div>

      <div className="absolute flex flex-col px-5 ml-20 text-white max-w-[520px]">
        <div className="w-full text-5xl font-bold tracking-widest max-md:max-w-full max-md:text-4xl">
          A Healthy Mind
          <br />
          In A Healthy Body
        </div>
        <div className="mt-8 w-full text-lg font-medium max-md:max-w-full">
          Healthy isn’t a goal, it is a way of living. Good and Healthy
          <br />
          food is life’s greatest pleasure.
        </div>
        <div className="flex gap-2.5 mt-8 justify-center px-8 py-3.5 w-[15rem] text-lg font-bold text-red-500 bg-white rounded-xl">
          <div className="grow my-auto">How It Works</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40d1750ba03c49e1176467a15f22e2871abe34017adfacd773123759d2e65fb?"
            className="shrink-0 w-10 aspect-square fill-red-500"
          />
        </div>
      </div>
    </div>
  );
};
