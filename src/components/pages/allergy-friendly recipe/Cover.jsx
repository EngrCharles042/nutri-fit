import coverImg from "../../../assets/images/allergyFriendly/coverImg.svg";

export const Cover = () => {
    return (
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-lg font-bold text-white min-h-[725px] max-md:px-5">
        <img
          loading="lazy"
          srcSet={coverImg}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mt-52 max-w-full w-[556px] max-md:mt-10">
          <div className="self-stretch text-5xl text-center max-md:max-w-full max-md:text-4xl">
            For Allergy-friendly Recipes, We Have Got You Covered
          </div>
          <div className="mt-4 text-center max-md:max-w-full">
            FOr Allergies, we understand people can be allergic to some recipes.
            Here at NutriFit, we have something for you
          </div>
          <div className="justify-center px-8 py-5 mt-2 bg-amber-700 rounded-xl max-md:px-5">
            Get Started Now
          </div>
        </div>
      </div>
    );
  }