export const Contact = () => {
    return (
      <div className="flex flex-col px-10 my-20 bg-orange-50 min-h-[977px]">
        <div className="self-center mt-10 text-5xl font-bold text-teal-800 max-md:text-4xl">
          Contact Us
        </div>
        <div className="self-center mt-6 text-lg text-zinc-500 max-md:max-w-full">
          Any questions or remark? let us know by writing a message
        </div>
        <div className="mt-16 w-full text-4xl font-bold text-teal-800 max-md:mt-10 max-md:max-w-full">
          Get in Touch
        </div>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-lg font-bold text-zinc-500 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center items-start p-5 max-w-full rounded-xl border border-solid border-neutral-700 w-[428px]">
                  Full Name
                </div>
                <div className="justify-center items-start p-5 mt-7 max-w-full rounded-xl border border-solid border-neutral-700 w-[428px]">
                  Phone Number
                </div>
                <div className="justify-center items-start p-5 mt-7 max-w-full whitespace-nowrap rounded-xl border border-solid border-neutral-700 w-[428px]">
                  Email
                </div>
                <div className="items-start self-stretch px-7 pt-9 pb-48 mt-7 whitespace-nowrap rounded-3xl border border-solid border-neutral-700 max-md:px-5 max-md:pb-10 max-md:max-w-full">
                  Message
                </div>
                <div className="justify-center px-5 py-3.5 mt-7 text-white bg-amber-700 rounded-2xl">
                  Send Message
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch px-14 py-20 my-auto w-full text-lg rounded-xl bg-red-500 bg-opacity-10 text-zinc-500 max-md:px-5 max-md:mt-10">
                <div className="text-4xl font-bold text-teal-800">
                  Contact Information
                </div>
                <div className="flex gap-5 mt-14 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e96ecc9b68fad5717a5da27210c6b605add9c0054f167c127bbd8215ff8a48f?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">+12 345 6789</div>
                </div>
                <div className="flex gap-5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9965c83a469407dcf10d70c1af78174e4239f17befc5bb34c7eb06026999722?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto">Team.nutrifit@gmail.com</div>
                </div>
                <div className="flex gap-5 mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb758fc10cd6c22cb44a5fe0053651d85ce729a9cbabdfb1f8dfff0adc2d66b2?"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="flex-auto">
                    #23 city road, Junaid Tower
                    <br />
                    Mall road, city 102867.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  