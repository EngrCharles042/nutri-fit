import img2 from "../../../assets/images/mealPlan/img2.svg";
import img4 from "../../../assets/images/mealPlan/img4.svg";
import img8 from "../../../assets/images/mealPlan/img8.svg";

export const HealthyMeals = () => {
  return (
    <div className="flex flex-col px-5 mt-40">
      <div className="self-center text-center text-5xl font-bold text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
        Healthy Meal Categories
      </div>
      <div className="shrink-0 self-center mt-2 h-2.5 rounded-xl bg-neutral-700 w-[250px]" />
      <div className="flex flex-wrap gap-2 justify-center items-center self-center mt-16 w-full text-4xl max-md:text-3xl font-bold leading-10 whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl max-md:px-5">
          Traditional Diet
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Plant-based Meals
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Ketogenic Meals
        </div>
        <div className="flex px-7 py-3 cursor-pointer hover:text-white hover:bg-amber-700 rounded-xl">
          Afro-fusion Meals
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
        <a
          href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
          target="_blank"
          className="mt-5 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 hidden max-md:block"
        >
          Subscribe
        </a>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet={img2}
            className="grow w-full aspect-[0.92] max-md:mt-0 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:px-0 my-auto text-lg max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-teal-800 max-md:max-w-full">
              Northern Chop House
            </div>
            <div className="mt-10 leading-9 text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Incorporating Hausa cuisine into your diet not only adds variety
              and flavor but also introduces a wealth of nutritional benefits
              and cultural richness. With dishes like Danwake, Tuwo Farina and
              over 15 Hausa delicacies you can achieve your healthy lifestyle.
              You will not only satisfy your taste buds but also nourish your
              body with wholesome ingredients.{" "}
            </div>

            {/* <div className="flex gap-0 items-start mt-12 max-w-full w-[232px] max-md:mt-10">
              <div className="justify-center items-start py-1 pr-2.5 pl-10 leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 text-stone-800 max-md:px-5">
                Subscribe
              </div>
              <div className="mt-8 text-white">
                <span className="">Get it on </span>
                <br />
                <span className="text-xl">Play Store</span>
              </div>
            </div> */}

            <a
              href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
              target="_blank"
              className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 max-md:hidden"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 max-md:px-0 my-auto text-lg max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-teal-800 max-md:max-w-full">
              Western Mamaput
            </div>
            <div className="mt-10 leading-9 text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Embracing Yoruba cuisine in your dieting journey promises a
              holistic experience that not only delights the senses but also
              nourishes the body, enriching your culinary adventure with rich
              cultural significance and nutritional value. Why we are
              introducing yoruba food into dieting. Keep fit with over 15 yoruba
              dishes in your household.
            </div>
            <a
              href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
              target="_blank"
              className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 max-md:hidden"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet={img4}
            className="grow w-full aspect-[0.92] max-md:mt-0 max-md:max-w-full"
          />
        </div>
        <a
              href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
              target="_blank"
              className="mt-5 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 hidden max-md:block"
            >
              Subscribe
            </a>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
      <a
          href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
          target="_blank"
          className="mt-5 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 hidden max-md:block"
        >
          Subscribe
        </a>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet={img8}
            className="grow w-full aspect-[0.92] max-md:mt-0 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 max-md:px-0 my-auto text-lg max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-teal-800 max-md:max-w-full">
              Eastern Canteens
            </div>
            <div className="mt-10 leading-9 text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Exploring Igbo cuisine isn't just about trying new flavors; it's
              about embracing a cultural journey filled with nourishment and
              tradition. So, let dishes like Ofe Nsala and Isi Ewu not only
              tantalize your taste buds but also enrich your diet with wholesome
              ingredients and cultural significance. Subcribe to access over 15
              igbo dishes for your diet !
            </div>
            <a
              href="https://chat.whatsapp.com/IJUlGLiAAzUCLVZX0TLnOC"
              target="_blank"
              className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700 max-md:hidden"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between gap-5 mt-24 w-full text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex text-wrap">Northern Chop House</div>
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
                      <div className="text-3xl text-teal-800">Danwake</div>
                      <div className="mt-7 leading-6 text-neutral-700">
                        Two pieces of eggs + Two pieces of toast
                        <br />
                        plus vegeatbles
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>
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
                      <div className="text-3xl text-teal-800">Tuwo Farina</div>
                      <div className="mt-6 leading-[83%] text-neutral-700">
                        Two bananas blended with blueberry
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="text-4xl font-bold leading-10 text-teal-800 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex hidden max-md:max-w-full max-md:block">
                Snacks
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
        <div className="flex text-wrap">Western Mamaput</div>
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
                        Amala and Ewedu{" "}
                      </div>
                      <div className="mt-5 text-neutral-700">
                        Two eggs + Tomatoes + lettuce
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
              <div className="mt-7 max-w-full w-[427px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img5}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">
                        Iyan and Efo Riro
                      </div>
                      <div className="mt-5 text-neutral-700">
                        Two diced mangoes
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>{" "}
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
        <div className="flex text-wrap">Southern Canteens</div>
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
                        Fufu and Oha Soup{" "}
                      </div>
                      <div className="mt-7 leading-6 text-neutral-700">
                        Two pieces of eggs + Two pieces of toast
                        <br />
                        plus vegeatbles
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
              <div className="mt-6 max-w-full w-[417px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet={img8}
                      className="grow w-full aspect-[1.16] max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-5 max-md:mt-10">
                      <div className="text-3xl text-teal-800">Isi Ewu</div>
                      <div className="mt-5 text-neutral-700">
                        Two sliced oranges
                      </div>
                      <div className="mt-10 text-lg leading-10 text-center whitespace-nowrap rounded-lg border border-red-500 border-solid bg-zinc-50 max-w-[179px] text-stone-800 cursor-pointer hover:text-white hover:bg-amber-700">
                        Subscribe
                      </div>{" "}
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
      </div> */}

      <div className="justify-center self-center p-4 mt-20 text-3xl font-bold text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl shadow-lg max-md:text-xl max-md:mt-10">
        View More <span className="text-2xl">&gt;&gt;&gt;</span>
      </div>
    </div>
  );
};
