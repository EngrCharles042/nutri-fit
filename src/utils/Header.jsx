export const Header = () => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center px-16 py-10 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex justify-between gap-5 w-full max-w-[1239px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex my-auto text-4xl font-bold text-neutral-700">
              LOGO
            </div>
            <div className="flex gap-10 items-center text-lg font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">Exercises</div>
              <div className="flex-auto self-stretch my-auto">
                Allergy-friendly Recipes
              </div>
              <div className="self-stretch my-auto">Meal Plans</div>
              <div className="flex-auto self-stretch my-auto">Community</div>
              <div className="justify-center self-stretch px-8 py-5 font-bold text-white bg-amber-700 rounded-xl max-md:px-5">
                Contact US
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }