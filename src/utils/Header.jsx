import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileMenu } from "./menu";
import { Link } from "react-router-dom";
// import img7 from "../assets/nutri.png";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsSticky(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex flex-col justify-center ${isSticky ? "sticky-header" : ""}`}>
      <div className="flex justify-center items-center px-16 py-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between gap-5 w-full max-w-[1239px] max-md:flex-wrap max-md:max-w-full">
          <Link
            to="/"
            className="flex my-auto text-4xl font-bold text-neutral-700 cursor-pointer" style={{ fontFamily: 'cursive' }}
          >
            <span className="text-orange-500">Nutri</span>
            <span className="text-green-600">Fit</span>
          </Link>
          <div className="flex gap-10 items-center text-lg font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full max-md:hidden">
          <Link to="/meal-plan" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">Meal Plans</Link>
          <Link to="/allergy-friendly-recipe" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Allergy-friendly Recipes
            </Link>
            <Link to="/exercise" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Exercises{" "}
            </Link>
            <Link to="/community" className="hover:text-white hover:bg-amber-700 focus:text-amber-700 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">Community</Link>
            <a
              href="https://chat.whatsapp.com/KyauQw4KQGJ0eJt4lCM6Gp"
              target="_blank" className="justify-center self-stretch px-3 py-5 hover:text-white hover:bg-amber-700 rounded-xl cursor-pointer max-md:px-5">
              Contact US
            </a>
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
