import img1 from "../../../assets/images/mealPlan/img1.svg";
import img2 from "../../../assets/images/mealPlan/img2.svg";
import img3 from "../../../assets/images/mealPlan/img3.svg";
import img4 from "../../../assets/images/mealPlan/img4.svg";
import img5 from "../../../assets/images/mealPlan/img5.svg";
import img6 from "../../../assets/images/mealPlan/img6.svg";
import img7 from "../../../assets/images/mealPlan/img7.svg";
import img8 from "../../../assets/images/mealPlan/img8.svg";
import img9 from "../../../assets/images/mealPlan/img9.svg";

export const HealthyMeals = () => {
  return (
    <div className="flex flex-col px-5 mt-40">
      <div className="self-center text-center text-5xl font-bold text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
        Healthy Meal Categories
      </div>
      <div className="shrink-0 self-center mt-2 h-2.5 rounded-xl bg-neutral-700 w-[250px]" />
      <div className="flex flex-wrap gap-5 justify-around items-center self-center mt-16 w-full text-4xl font-bold leading-10 whitespace-nowrap max-w-[1179px] text-neutral-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl max-md:px-5">
          Proteins
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Vegetables
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Fruits
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Carbohydrates
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-24 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex">Breakfast</div>
        <div className="flex w-[37%] max-md:max-w-full max-md:hidden">
          Snacks
        </div>
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-7 pr-5 pl-14 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img1}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">
                        Toast Protein
                      </div>
                      <div className="mt-7 leading-6 text-neutral-700">
                        Two pieces of eggs + Two pieces of toast
                        <br />
                        plus vegeatbles
                      </div>
                      <div className="mt-5 text-red-500">540 calories</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
              <div className="mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img2}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">
                        Banana smoothie
                      </div>
                      <div className="mt-6 leading-[83%] text-neutral-700">
                        Two bananas blended with blueberry
                      </div>
                      <div className="mt-6 text-red-500">100 calories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex hidden max-md:max-w-full max-md:block">
                Breakfast(Snacks)
              </div>
            </div>
            <div className="px-8 py-8 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet={img3}
                    className="grow w-full aspect-[1.16] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                    <div className="text-3xl text-teal-800">Apple</div>
                    <div className="mt-5 text-neutral-700">
                      Two diced apples
                    </div>
                    <div className="mt-5 text-red-500">100 calories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-20 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
      <div className="flex justify-between gap-5 mt-20 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex">Lunch</div>
        <div className="flex w-[36%] max-md:max-w-full max-md:hidden">
          Snacks
        </div>
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 py-7 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img4}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">
                        A salmon with prawns
                      </div>
                      <div className="mt-5 text-neutral-700">
                        Two eggs + Tomatoes +lettuce
                      </div>
                      <div className="mt-5 text-red-500">540 calories</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
              <div className="mt-7 max-w-full w-[427px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img5}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">Mango</div>
                      <div className="mt-5 text-neutral-700">
                        Two diced mangoes
                      </div>
                      <div className="mt-5 text-red-500">100 calories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-between gap-5 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex hidden max-md:max-w-full max-md:block">
                Snacks
              </div>
            </div>
            <div className="py-8 pr-14 pl-7 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet={img6}
                    className="grow w-full aspect-[1.16] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                    <div className="text-3xl leading-9 text-teal-800">
                      Protein <br />
                      Bars
                    </div>
                    <div className="mt-5 text-neutral-700">Two pieces</div>
                    <div className="mt-5 text-red-500">100 calories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-20 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
      <div className="flex justify-between gap-5 mt-24 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex">Dinner</div>
        <div className="flex w-[36%] max-md:max-w-full max-md:hidden">
          Snacks
        </div>
      </div>
      <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 py-7 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img7}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">
                        Salad with salmon
                      </div>
                      <div className="mt-7 leading-6 text-neutral-700">
                        Two pieces of eggs + Two pieces of toast
                        <br />
                        plus vegeatbles
                      </div>
                      <div className="mt-5 text-red-500">540 calories</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
              <div className="mt-6 max-w-full w-[417px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img8}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">Orange</div>
                      <div className="mt-5 text-neutral-700">
                        Two sliced oranges
                      </div>
                      <div className="mt-5 text-red-500">100 calories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-between gap-5 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex hidden max-md:max-w-full max-md:block">
                Snacks
              </div>
            </div>
            <div className="py-8 pr-14 pl-7 w-full bg-white rounded-2xl border border-teal-800 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet={img9}
                    className="grow w-full aspect-[1.16] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                    <div className="text-3xl leading-9 text-teal-800">
                      Protein <br />
                      Bars
                    </div>
                    <div className="mt-5 text-neutral-700">Two pieces</div>
                    <div className="mt-5 text-red-500">100 calories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-center p-4 mt-28 text-3xl font-bold text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl shadow-lg max-md:mt-10">
        View More <span className="text-2xl">&gt;&gt;&gt;</span>
      </div>
    </div>
  );
};
