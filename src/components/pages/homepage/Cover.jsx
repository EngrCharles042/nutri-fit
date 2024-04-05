// import coverImg from "../../../assets/images/homepage/coverImg.svg";

export const Cover = () => {
  return (
    //   <div className="flex overflow-hidden relative flex-col items-start p-20 text-lg font-bold text-white min-h-[38.75rem] max-md:px-5 max-md:items-center">
    //     {/* <img
    //       loading="lazy"
    //       srcSet={coverImg}
    //       className="object-cover absolute inset-0 size-full"
    //     /> */}
    //     <iframe
    //   width="1440"
    //   height="815"
    //   src="https://www.youtube.com/embed/CSjRBBqfhko"
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowfullscreen
    // ></iframe>
    //     <div className="relative mt-28 ml-5 text-5xl tracking-widest max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:justify-center">
    //       A Healthy Mind
    //       <br />
    //       In A Healthy Body
    //     </div>
    //     <div className="relative mt-8 ml-5 font-medium max-md:max-w-full">
    //       Healthy isn’t a goal, it is a way of living. Good and Healthy
    //       <br />
    //       food is life’s greatest pleasure.
    //     </div>
    //     <div className="flex relative gap-2.5 justify-center px-8 py-3.5 mt-8 ml-5 text-amber-700 bg-white rounded-xl max-md:px-5 max-md:ml-2.5 hover:bg-green-600 hover:border-white hover:text-white">
    //       <div className="my-auto">How It Works</div>
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40d1750ba03c49e1176467a15f22e2871abe34017adfacd773123759d2e65fb?"
    //         className="shrink-0 w-10 aspect-square fill-red-500"
    //       />
    //     </div>
    //   </div>

    <div className="flex overflow-hidden relative flex-col items-start p-20 text-lg font-bold text-white min-h-[38.75rem] max-md:px-5 max-md:items-center">
      <div className="videoWrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CSjRBBqfhko"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="relative mt-28 ml-5 text-5xl tracking-widest max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:justify-center">
        A Healthy Mind
        <br />
        In A Healthy Body
      </div>
      <div className="relative mt-8 ml-5 font-medium max-md:max-w-full">
        Healthy isn’t a goal, it is a way of living. Good and Healthy
        <br />
        food is life’s greatest pleasure.
      </div>
      <div className="flex relative gap-2.5 justify-center px-8 py-3.5 mt-8 ml-5 text-amber-700 bg-white rounded-xl max-md:px-5 max-md:ml-2.5 hover:bg-green-600 hover:border-white hover:text-white">
        <div className="my-auto">How It Works</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40d1750ba03c49e1176467a15f22e2871abe34017adfacd773123759d2e65fb?"
          className="shrink-0 w-10 aspect-square fill-red-500"
        />
      </div>
    </div>
  );
};
