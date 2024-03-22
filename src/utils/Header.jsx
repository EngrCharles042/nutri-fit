import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileMenu } from "./menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center px-16 py-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between gap-5 w-full max-w-[1239px] max-md:flex-wrap max-md:max-w-full">
          <Link
            to="/"
            className="flex my-auto text-4xl font-bold text-neutral-700 cursor-pointer"
          >
            LOGO
          </Link>
          <div className="flex gap-10 items-center text-lg font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full max-md:hidden">
            <Link to="/exercise" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Exercises{" "}
            </Link>

            <Link to="/allergy-friendly-recipe" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Allergy-friendly Recipes
            </Link>
            <Link to="/meal-plan" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">Meal Plans</Link>
            <Link to="/" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">Community</Link>
            <div className="justify-center self-stretch px-3 py-5 hover:text-white hover:bg-amber-700 rounded-xl cursor-pointer max-md:px-5">
              Contact US
            </div>
          </div>
          <div className="flex self-center hidden max-md:block">
            {showMenu ? (
              <FaTimes onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}{" "}
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </div>
  );
};
