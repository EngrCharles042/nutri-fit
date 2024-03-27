import { useState } from "react";

export const Faq = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showMessage5, setShowMessage5] = useState(false);

  return (
    <div className="flex flex-col mx-20 max-md:mx-10 items-center text-2xl font-bold text-zinc-500">
      <div className="text-5xl font-bold my-20 text-teal-800 max-w-[6.688rem]">
        FAQs
      </div>
      <div className="flex flex-col gap-5 px-5 max-md:px-0 w-full max-md:max-w-full cursor-pointer">
        <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage(!showMessage)}
        >
          <div className="flex-auto">How does the NutriFit work?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
        {showMessage && (
          <div className="text-black">
            NutriFit works by providing users with a comprehensive platform for
            managing their healthy lifestyle. It offers features such as
            personalized meal plans, calorie tracking, recipe suggestions, and
            workout routines. Users can input their dietary preferences, health
            goals, and activity levels to receive tailored recommendations.
          </div>
        )}
      </div>
      <div className="mt-10 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
      <div className="flex flex-col gap-5 px-5 max-md:px-0 mt-10 w-full max-md:max-w-full cursor-pointer">
        <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage1(!showMessage1)}
        >
          <div className="flex-auto">
            Can I use the website myself without a guide?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
        {showMessage1 && (
          <div className="text-black">
            NutriFit is designed to be user-friendly, allowing you to navigate
            and use the website without the need for a guide. The interface is
            intuitive, and you can easily access features such as meal planning,
            calorie tracking, recipe suggestions, and workout routines on your
            own. Additionally, there may be helpful tips or tutorials available
            within the app to assist you in getting started and making the most
            of its features.
          </div>
        )}
      </div>
      <div className="mt-9 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
      <div className="flex flex-col gap-5 px-5 max-md:px-0 mt-9 w-full max-md:flex-wrap max-md:max-w-full cursor-pointer">
        <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage2(!showMessage2)}
        >
          <div className="flex-auto">
            Does the website have a 24/7 support page?{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
        {showMessage2 && (
          <div className="text-black">
            NutriFit provides 24/7 support to assist you with any questions or
            issues you may have while using the website. You can access the
            support page through the website's help center or contact support
            directly through email or chat for immediate assistance.
          </div>
        )}
      </div>
      <div className="mt-9 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
      <div className="flex flex-col gap-5 px-5 max-md:px-0 mt-10 w-full max-md:flex-wrap max-md:max-w-full cursor-pointer">
        <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage3(!showMessage3)}
        >
          <div className="flex-auto">Can I download fitness videos?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
        {showMessage3 && (
          <div className="text-black">
            NutriFit allows you to download fitness videos to your device for
            offline viewing. This feature is particularly useful if you want to
            access workouts while you're away from an internet connection or if
            you prefer to follow along with a workout without streaming it live.
          </div>
        )}
      </div>
      <div className="mt-10 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
      <div className="flex flex-col gap-5 px-5 max-md:px-0 mt-10 w-full max-md:flex-wrap max-md:max-w-full cursor-pointer">
        <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage4(!showMessage4)}
        >
          <div className="flex-auto">Can we share fitness videos?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
        {showMessage4 && (
          <div className="text-black">
            NutriFit allows you to share fitness videos with others. You can
            share videos through social media platforms, email, or messaging
            apps to inspire and motivate friends or family to join you in your
            fitness journey.
          </div>
        )}
      </div>
      <div className="mt-10 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
      <div className="flex flex-col gap-5 px-5 max-md:px-0 mt-10 w-full max-md:flex-wrap max-md:max-w-full cursor-pointer">
      <div
          className="flex max-md:flex-wrap items-center max-md:max-w-full"
          onClick={() => setShowMessage5(!showMessage5)}
        >
          <div className="flex-auto">Can we get an audio transcription?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9255dbfa8feab1162d122e4743566c92b3ad0592a34da702965dcda54dc4e54?"
            className="shrink-0 self-start w-6 aspect-[1.72] fill-black"
          />
        </div>
      </div>
      {showMessage5 && (
        <div className="text-black">
          NutriFit can provide audio transcriptions for fitness videos. This feature allows you to read the instructions and guidance provided in the video, making it easier to follow along with the workout even if you're in a noisy environment or prefer to read the instructions instead of listening to them.
        </div>
      )}
      <div className="mt-9 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[0.063rem] max-md:max-w-full" />
    </div>
  );
};
