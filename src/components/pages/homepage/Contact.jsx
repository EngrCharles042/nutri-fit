import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Handle success (redirect, show message, etc.)
      console.log("Message sent succesfully!!!");

      // Reset form data
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle error (display error message, log, etc.)
      console.error("Message sending failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center px-20 my-40 py-14 bg-red-50 max-md:px-5">
      <div className="text-5xl font-bold text-teal-800 max-md:text-4xl">
        Contact Us
      </div>
      <div className="mt-6 text-lg text-zinc-500 max-md:max-w-full">
        Any questions or remark? let us know by writing a message
      </div>
      <div className="mt-16 text-4xl font-bold text-teal-800 max-md:mt-10 max-md:max-w-full">
        Get in Touch
      </div>
      <div className="mt-9 w-full max-w-[77.5rem] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col grow items-start text-lg font-bold text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                id="full-name"
                autoComplete="given-name"
                className="justify-center items-start p-5 max-w-full rounded-xl border border-solid border-zinc-800 w-[26.75rem]"
                placeholder="Full Name"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                id="tel"
                autoComplete="tel"
                className="justify-center items-start p-5 mt-7 max-w-full rounded-xl border border-solid border-zinc-800 w-[26.75rem]"
                placeholder="Phone Number"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                autoComplete="email"
                className="justify-center items-start p-5 mt-7 max-w-full whitespace-nowrap rounded-xl border border-solid border-zinc-800 w-[26.75rem]"
                placeholder="Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="items-start self-stretch px-7 pt-9 pb-48 mt-7 whitespace-nowrap rounded-3xl border border-solid border-zinc-800 max-md:px-5 max-md:pb-10 max-md:max-w-full"
                placeholder="Message"
              />
              <a
                href="https://chat.whatsapp.com/GP5Ux1J1dd91kZPnqpoVJ9"
                target="_blank"
                className="justify-center px-5 py-3.5 mt-7 text-white bg-amber-700 rounded-2xl cursor-pointer hover:bg-green-600"
              >
                Send Message
              </a>
            </div>
          </form>
          <div className="flex flex-col flex-wrap ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch px-14 py-20 my-auto w-full text-lg rounded-xl bg-amber-700 bg-opacity-20 text-zinc-800 max-md:px-5 max-md:mt-10">
              <div className="text-4xl text-center font-bold text-teal-800">
                Contact Information
              </div>
              <div className="flex gap-5 mt-14 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e3c46cff33a9e1be7e7e65c76b00cb6c84240dca04c47b356f91822cff8440e?"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto my-auto">+234 8144576304</div>
              </div>
              <div className="flex gap-5 mt-8 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b909f2296bcd5582eb7693e4058a864379747cfb9ff9acaf94833bd71ff3286c?"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Team.nutrifit@gmail.com</div>
              </div>
              <div className="flex gap-5 mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffed3871559ba9472e1febe768ad3ca4612810452a6d22b9a640fba7e529df?"
                  className="shrink-0 self-start w-6 aspect-square"
                />
                <div className="flex-auto">
                #23 Chevron drive, lekki phase 1
                  <br />
                  Lagos city, 102867.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
