import { Link } from "react-router-dom";

export const MobileMenu = () => {
    return (
      <div className="flex flex-col px-11 pb-10 text-lg bg-orange-50 rounded-xl max-w-[351px] text-zinc-500">
        {/* <div className="flex gap-5 justify-between py-1.5 text-2xl font-bold whitespace-nowrap text-neutral-700">
          <div>LOGO</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/898925c7a38243cae89cdfa4975e3e8eceafc478a920b7c2e5908e74a4fd73d8?"
            className="shrink-0 self-start w-4 aspect-square fill-neutral-700"
          />
        </div> */}
        <div className="flex gap-4 mt-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a31cbe02dc91d6c00c8a6b89298612826d792f754b9b44d4dee8b2312d9459d6?"
            className="shrink-0 w-5 aspect-square fill-zinc-500"
          />
          <Link to="/meal-plan" className="flex-auto my-auto">Meal Plans</Link>
        </div>
        <div className="flex gap-4 mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38f1ecc201b2832d5c1d226ce106a41beffc7e616814ff8886c90946aab9a797?"
            className="shrink-0 self-start w-5 aspect-[1.11]"
          />
          <Link to="/allergy-friendly-recipe" className="flex-auto">Allergy-friendly Recipes</Link>
        </div>
        <div className="flex gap-4 mt-10 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2ea3026b9beaca183c1948bd1f652f7e5d238258afa43148cd346bf79927c7?"
            className="shrink-0 w-5 aspect-square fill-zinc-500"
          />
          <Link to="/exercise" className="flex-auto my-auto">Exercises</Link>
        </div>
        <div className="flex gap-4 mt-10 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3545a3f82f27b5de7cfc1e4ba0736d2fbc4796bfa5457a6f6ad0493bc7484dd?"
            className="shrink-0 self-start w-5 aspect-square fill-zinc-500"
          />
          <Link to="/community"className="flex-auto">Community</Link>
        </div>
      </div>
    );
  }