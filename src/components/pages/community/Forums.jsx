import { FaWhatsapp } from "react-icons/fa";

export const Forums = () => {
  return (
    <div className="flex flex-col px-5 py-40 bg-white">
      <div className="self-center text-5xl font-bold text-teal-800 max-md:max-w-full max-md:text-4xl">
        NutriFit Community Forums
      </div>
      <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-10 w-full bg-orange-50 rounded-2xl border border-red-500 border-solid max-md:pl-5 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f832b7692ebe2e609ce0275c4550350749640744f567ea97ef6f950b1d99d5f?"
                className="border-4 border-red-500 border-solid aspect-[1.08] stroke-[4.492px] stroke-red-500 w-[45px]"
              />
              <div className="mt-6 text-2xl font-bold text-neutral-700">
                Discussions
              </div>
              <div className="mt-8 text-lg text-zinc-500">
                Ask questions and join conversations
                <br />
                around popular topics, and find solutions
                <br />
                to common issues.
              </div>
              <a
                href="https://chat.whatsapp.com/Ho6OphCJ5EUFfsj1U049Eq"
                target="_blank"
                className="text-5xl text-green-500 mt-5 max-md:text-4xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-10 w-full bg-orange-50 rounded-2xl border border-red-500 border-solid max-md:px-5 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ffd959a30761eb2a9c6f121db7c75a86f7623d3245dde23e3d90d0bf262cbae?"
                className="w-10 aspect-square fill-red-500"
              />
              <div className="mt-7 text-2xl font-bold text-neutral-700">
                Events
              </div>
              <div className="mt-8 text-lg text-zinc-500">
                Discover insightful live fitness programs
                <br />
                and networking opportunities, whether
                <br />
                online or in-person.
              </div>
              <a
                href="https://chat.whatsapp.com/Ho6OphCJ5EUFfsj1U049Eq"
                target="_blank"
                className="text-5xl text-green-500 mt-5 max-md:text-4xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-10 w-full bg-orange-50 rounded-2xl border border-red-500 border-solid max-md:pl-5 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd294ccba3a726c00c9797160c64a8c4e8cb1c11a001a952701b164f675fb01d?"
                className="w-10 aspect-square fill-red-500"
              />
              <div className="mt-7 text-2xl font-bold text-neutral-700">
                Blog
              </div>
              <div className="mt-7 text-lg text-zinc-500">
                Browse the latest blog posts from NutriFit
                <br />
                on healthy lifestyle and fitness talks.
              </div>
              <a
                href="https://chat.whatsapp.com/Ho6OphCJ5EUFfsj1U049Eq"
                target="_blank"
                className="text-5xl text-green-500 mt-10 max-md:text-4xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
