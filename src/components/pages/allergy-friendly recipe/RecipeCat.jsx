import img1 from "../../../assets/images/allergyFriendly/img1.svg";
import img2 from "../../../assets/images/allergyFriendly/img2.svg";
import img3 from "../../../assets/images/allergyFriendly/img3.svg";
import img4 from "../../../assets/images/allergyFriendly/img4.svg";
import img5 from "../../../assets/images/allergyFriendly/img5.svg";

export const RecipeCat = () => {
    return (
      <div className="flex flex-col px-5 mt-20 mb-40">
        <div className="self-center text-5xl font-bold text-teal-800 leading-[54px] max-md:text-4xl">
          Recipes Categories
        </div>
        <div className="self-center mt-10 text-lg text-center text-neutral-700 max-md:max-w-full">
          Browse through series of Allergy-friendly recipes below so you can also
          enjoy eating healthy meals.
        </div>
        <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img1}
                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                  Recipes for Natural fruits Energetics
                </div>
                <div className="mt-8 text-lg text-neutral-700 max-md:max-w-full">
                  Fruity Salad with fresh sliced fruits: Apple, Orange, lemon,
                  strawberries, grapes and ginger are wll known to be used as
                  energy refills. These are used especially by athletes blended
                  together to help regain strength during their sports
                </div>
                <div className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 rounded-xl max-md:px-5">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-0.5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                  Recipes for Protein Meals
                </div>
                <div className="mt-6 text-lg text-neutral-700 max-md:max-w-full">
                  A meal of sunny-side egg, chicken, broccoli, carrots, rose mary
                  and a glass of orange juice is the perfect allergy-friendly
                  protein meal that is healthy and delicious. This is a must have
                  recipe for everyone to include in their breakfast.{" "}
                </div>
                <div className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 rounded-xl max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img2}
                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-36 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img3}
                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                  Recipes for Vegetables
                </div>
                <div className="mt-6 text-lg text-neutral-700 max-md:max-w-full">
                  Are you looking to make a vegetable meal that is
                  allergy-friendly? Here we have; Broccoli, spinach leaves, red
                  and green bell peppers, potatoes, onions, calottes and bedim
                  leaves. These recipes can be made together to give a wonderful
                  aroma and sweet teaste.{" "}
                </div>
                <div className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 rounded-xl max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                  Recipes for Smoothies
                </div>
                <div className="mt-6 text-lg text-neutral-700 max-md:max-w-full">
                  The Green detox Smoothie is a low calorie, nutrient rich option
                  for weight loss. Packed with spinach, cucumber, green apple,
                  lemon, ginger and almond milk. This boost metabolism and aids
                  digestion. Enjoy as a meal or snack to support weight loss
                  journey
                  <br />
                </div>
                <div className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 rounded-xl max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img4}
                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img5}
                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pt-2.5 pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                  Recipes for Carbohydrate Meals
                </div>
                <div className="mt-8 text-lg text-neutral-700 max-md:max-w-full">
                  A recipe of Basmati rice, corn, brown lettuce, corn flower,
                  groundnut, cookies and some slices of orange made together are
                  known to be a source of carbohydrate in the body. And are also
                  allergy-friendly.
                </div>
                <div className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 rounded-xl max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }