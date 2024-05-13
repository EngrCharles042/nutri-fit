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
      <div className="self-center mt-10 text-lg text-center text-neutral-700 w-[30%] max-md:w-full max-md:max-w-full">
        Discover Nigerian culinary traditions and allergy-conscious cooking,
        promising a flavorful experience that caters to diverse tastes and
        dietary needs.
      </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
          <a
            href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
            target="_blank"
            className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl hidden max-md:px-5 max-md:block"
          >
            Learn More
          </a>
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
                Lactose-Free Recipes
              </div>
              <div className="mt-8 text-3xl max-md:text-lg text-neutral-700 max-md:max-w-full">
                Discover the delight of lactose-free meals with our curated
                collection of delectable recipes. Indulge in flavourful meals
                access over 100+ lactose. Free recipes curated by the best
                nutritionists in the game.
              </div>
              <a
                href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
                target="_blank"
                className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5 max-md:hidden"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0.5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                Shellfish-Free Recipes
              </div>
              <div className="mt-6 text-3xl max-md:text-lg text-neutral-700 max-md:max-w-full">
                Indulge in tantalizing recipes free of shellfish, crafted for
                your enjoyment. Access over 100+ recipes specially curated by
                our nutritionists devoid of shellfish.{" "}
              </div>
              <a
                href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
                target="_blank"
                className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5 max-md:mt-10 max-md:hidden"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img2}
              className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <a
            href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
            target="_blank"
            className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl hidden max-md:px-5 max-md:block"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="mt-36 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
          <a
            href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
            target="_blank"
            className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl hidden max-md:px-5 max-md:block"
          >
            Learn More
          </a>
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
                Peanut-Free Recipes
              </div>
              <div className="mt-6 text-3xl max-md:text-lg text-neutral-700 max-md:max-w-full">
                Can't eat groundnuts? No problem. Take your pick from our list
                of our peanut- free recipes. From fruit butters to tree nut
                subsitutes. We provide a finger-licking culinary experience.{" "}
              </div>
              <a
                href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
                target="_blank"
                className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5 max-md:mt-10 max-md:hidden"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pr-14 my-auto font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl text-teal-800 leading-[54px] max-md:max-w-full max-md:text-4xl">
                Gluten- Free Recipes
              </div>
              <div className="mt-6 text-3xl max-md:text-lg text-neutral-700 max-md:max-w-full">
                Craving for the comforts of bread or pasta? Don't let gluten
                allergies hinder you! Explore our gluten-free alternatives,
                capturing the essence of your favorite flavors while meeting
                your dietary needs. Gluten-free has never tasted this delicious!
                <br />
              </div>
              <a
                href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
                target="_blank"
                className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5 max-md:mt-10 max-md:hidden"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img4}
              className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <a
            href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
            target="_blank"
            className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl hidden max-md:px-5 max-md:block"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
          <a
            href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
            target="_blank"
            className="justify-center self-start px-8 py-3 mt-8 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl hidden max-md:px-5 max-md:block"
          >
            Learn More
          </a>
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
                Seafood- free Recipes
              </div>
              <div className="mt-8 text-3xl max-md:text-lg text-neutral-700 max-md:max-w-full">
                Savour the Essence of Nigerian Cuisine, Without the Seafood.
                From hearty soups to spicy jollof rice, relish every bite with
                our flavorful seafood alternatives. Embrace tradition with a
                twist and choose from our list of mouthwatering creations, free
                from the sea but bursting with deliciousness!
              </div>
              <a
                href="https://chat.whatsapp.com/Fjg6ywBtrvA53nzStsVlpz"
                target="_blank"
                className="justify-center self-start px-8 py-3 mt-12 text-3xl text-white bg-amber-700 cursor-pointer hover:bg-green-600 rounded-xl max-md:px-5 max-md:mt-10 max-md:hidden"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
