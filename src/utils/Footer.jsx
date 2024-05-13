export const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-8 bg-teal-800">
      <div className="flex gap-5 justify-between items-start px-5 w-full max-w-[1241px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-end hidden max-w-full w-[463px] max-md:mb-5 max-md:block">
          <div className="self-start ml-7 text-3xl text-white max-md:ml-2.5">
            Newsletter Subscription
          </div>
          <div className="mt-4 text-lg text-white max-md:mr-2.5 max-md:max-w-full">
            To get more tips on eating healthy and staying fit, subscribe to our
            newsletter.
          </div>
          <div className="flex gap-5 justify-center py-2 pr-2 pl-8 mt-6 text-2xl border border-white border-solid rounded-[50px] max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto text-white">Enter your email</div>
            <div className="justify-center px-5 py-5 whitespace-nowrap bg-white rounded-[50px] text-neutral-700 max-md:px-5">
              Subscribe
            </div>
          </div>
        </div>
        <div className="hidden max-md:block max-md:self-stretch max-md:w-full bg-white border border-white border-solid max-md:min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col text-xl text-white">
          <div className="text-3xl font-bold">Our Services</div>
          <div className="mt-7 cursor-pointer">Personalized Meal plans</div>
          <div className="mt-6 cursor-pointer">Fitness Classes</div>
          <div className="mt-7 cursor-pointer">Online Yoga Classes</div>
          <div className="mt-6 cursor-pointer">Allergy-free Recipes</div>
          <div className="mt-6 cursor-pointer">Goal Tracking</div>
        </div>
        <div className="flex flex-col text-xl text-white">
          <div className="text-3xl font-bold">Quick Links</div>
          <div className="mt-6 cursor-pointer">About Us</div>
          <div className="mt-7 cursor-pointer">Workouts</div>
          <div className="mt-7 cursor-pointer">Recipes</div>
          <div className="mt-6 cursor-pointer">FAQs</div>
        </div>
        <div className="flex flex-col self-stretch font-bold max-md:max-w-full">
          <div className="text-3xl text-white max-md:max-w-full">
            Contact Us
          </div>
          <div className="flex gap-5 justify-between items-start self-start mt-6 text-lg text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f5938fb94a538c425dbf8fc24a0803462702e7d52b7cd448236bf8553c1a00?"
              className="shrink-0 w-6 aspect-[0.18]"
            />
            <div className="flex flex-col">
              <div className="cursor-pointer">+234 8144576304</div>
              <div className="mt-7 max-md:mt-7 cursor-pointer">
                Team.nutrifit@gmail.com
              </div>
              <div className="mt-6 cursor-pointer">
                #23 Chevron drive, lekki phase 1
                <br />
                Lagos city, 102867.
              </div>
            </div>
          </div>
          <div className="flex flex-col self-end px-px mt-16 max-w-full w-[463px] max-md:mt-10 max-md:hidden">
            <div className="self-start ml-7 text-3xl text-white max-md:ml-2.5">
              Newsletter Subscription
            </div>
            <div className="mt-4 text-lg text-white max-md:mr-2.5 max-md:max-w-full">
              To get more tips on eating healthy and staying fit,
              <br />
              subscribe to our newsletter.
            </div>
            <div className="flex gap-5 justify-center py-2 pr-2 pl-8 mt-6 text-2xl border border-white border-solid rounded-[50px] max-md:pl-5 max-md:max-w-full">
              <div className="flex-auto my-auto text-white">
                Enter your email
              </div>
              <div className="justify-center px-5 py-5 whitespace-nowrap bg-white rounded-[50px] text-neutral-700 max-md:px-5">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-12 w-full bg-white border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-9 w-full text-lg text-white max-w-[1240px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-1 self-start px-5 mt-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e08804c62c3f78b923c9a371594c55a9f8fb1c9762591ecbd5ba5a531d9575?"
            className="shrink-0 self-start w-4 aspect-square fill-white"
          />
          <div className="flex-auto">2024 NutriFit All Rights Reserved.</div>
        </div>
        <div className="flex gap-3.5 px-5 max-md:flex-wrap">
          <div className="grow my-auto cursor-pointer">Terms & Conditions</div>
          <div className="shrink-0 w-px bg-white border border-white border-solid h-[30px]" />
          <div className="flex-auto cursor-pointer">Privacy Policy</div>
          <div className="shrink-0 w-px bg-white border border-white border-solid h-[30px]" />
          <div className="my-auto cursor-pointer">Disclamer</div>
        </div>
      </div>
    </div>
  );
};
