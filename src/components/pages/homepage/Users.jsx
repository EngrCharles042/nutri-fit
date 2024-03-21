export const Users = () => {
    return (
      <div className="bg-teal-800 min-h-[387px] flex flex-wrap justify-center items-center">
        <div className="flex gap-5 justify-center px-5 text-white max-md:flex-wrap max-md:justify-between max-md:px-0">
          <div className="flex flex-col items-center">
            <div className="flex gap-3.5 font-bold">
              <div className="grow text-5xl max-md:text-4xl">100+</div>
              <div className="my-auto text-3xl">users</div>
            </div>
            <div className="mt-9 text-xl text-center">
              Login every day to
              <br />
              our website
            </div>
          </div>
          <div className="shrink-0 my-auto mx-5 w-px bg-white border border-white border-solid h-[60px] max-md:hidden" />
          <div className="flex flex-col items-center">
            <div className="self-center text-5xl font-bold max-md:text-4xl">
              20+
            </div>
            <div className="mt-9 text-xl text-center">
              Expert Practitioners
              <br />
              at NutriFit
            </div>
          </div>
          <div className="shrink-0 my-auto mx-5 w-px bg-white border border-white border-solid h-[60px] max-md:hidden" />
          <div className="flex flex-col items-center">
            <div className="flex gap-2.5 self-center font-bold whitespace-nowrap">
              <div className="flex flex-1 gap-1 text-5xl max-md:text-4xl">
                <div className="grow max-md:text-4xl">3</div>
                <div className="my-auto max-md:text-4xl">+</div>
              </div>
              <div className="self-start mt-3.5 text-3xl">years</div>
            </div>
            <div className="mt-9 text-xl text-center">
              Experience in health
              <br />
              and fitness
            </div>
          </div>
          <div className="shrink-0 my-auto mx-5 w-px bg-white border border-white border-solid h-[60px] max-md:hidden" />
          <div className="flex flex-col items-center">
            <div className="flex gap-3.5 font-bold whitespace-nowrap">
              <div className="grow text-5xl max-md:text-4xl">100+</div>
              <div className="my-auto text-3xl">reviews</div>
            </div>
            <div className="mt-9 text-xl text-center">
              to show our
              <br />
              trustworthiness
            </div>
          </div>
        </div>
      </div>
    );
  };
  