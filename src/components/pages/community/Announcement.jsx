import arrow from "../../../assets/images/community/arrow.svg";

export const Announcement = () => {
  return (
    <div className="flex flex-col  px-20 py-16 bg-rose-100 max-md:px-5">
      <div className="mt-4 text-5xl font-bold text-teal-800 max-md:max-w-full max-md:text-4xl">
        Announcement
      </div>
      <div className="mt-20 w-full max-w-[1227px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pb-3.5 w-full bg-teal-800 rounded-2xl max-md:mt-5">
              <div className="relative right-[1rem] bottom-[.5rem] z-10 shrink-0 mt-0 bg-amber-700 rounded-2xl h-[315px]" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-2xl font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl text-teal-800 max-md:max-w-full">
                Community Webinar: Taking lots of water everyday helps to
                balance our lifestyle.
              </div>
              <div className="mt-7 text-neutral-700 max-md:max-w-full">
                Join our webinar for a walkthrough session on how drinking just
                enough
                <br />
                water daily can help boost our immune system and balance our
                lifestyle.
              </div>
              <a
                href="https://chat.whatsapp.com/GP5Ux1J1dd91kZPnqpoVJ9"
                target="_blank"
                className="flex gap-5 self-start mt-8"
              >
                <img
                  loading="lazy"
                  src={arrow}
                  className="shrink-0 self-start aspect-[2.5] max-w-[35rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
