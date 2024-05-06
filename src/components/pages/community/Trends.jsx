import { useState } from "react";

import img1 from "../../../assets/images/community/img1.svg";
import img2 from "../../../assets/images/community/img2.svg";
import img3 from "../../../assets/images/community/img3.svg";
import img4 from "../../../assets/images/community/img4.svg";

export const Trends = () => {
  const [selectedTab, setSelectedTab] = useState("recent");
  return (
    <div className="flex flex-col text-2xl my-40 mx-20 max-md:mx-2">
      <div className="flex gap-5 self-start px-5 text-5xl font-bold text-teal-800 max-md:flex-wrap max-md:text-4xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/564ad44703d14eed839355f7da42c8ed1a4c982461241245252e2e56dcb1515a?"
          className="shrink-0 self-start w-10 aspect-[1.11] fill-teal-800"
        />
        <div className="flex-auto max-md:text-4xl">Trending Discussions</div>
      </div>
      <div className="flex gap-5 items-start self-start px-5 mt-10 whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:mt-10">
        <div
          className={`flex flex-col flex-auto mt-3 relative cursor-pointer ${
            selectedTab === "recent" ? "border-t-2 border-teal-800 text-teal-800 font-bold" : ""
          }`}
          onClick={() => setSelectedTab("recent")}
        >
          Recent
        </div>
        <div
          className={`flex-auto mt-3 relative cursor-pointer ${
            selectedTab === "top" ? "border-t-2 border-teal-800 text-teal-800 font-bold" : ""
          }`}
          onClick={() => setSelectedTab("top")}
        >
          Top
        </div>
        {/* <div
          className={`flex-auto mt-3 relative ${
            selectedTab === "answered" ? "border-t-2 border-teal-800 text-teal-800 font-bold" : ""
          }`}
          onClick={() => setSelectedTab("answered")}
        >
          Answered
        </div>
        <div
          className={`mt-3 relative ${
            selectedTab === "solved" ? "border-t-2 border-teal-800 text-teal-800 font-bold" : ""
          }`}
          onClick={() => setSelectedTab("solved")}
        >
          Solved
        </div> */}
      </div>
      <div className="flex flex-col px-6 py-6 mt-16 w-full border border-red-500 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-start font-bold text-neutral-700 max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={img1}
            className="shrink-0 max-w-full rounded-full aspect-square w-[135px]"
          />
          <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit max-md:max-w-full">
            <div className="text-teal-800 max-md:max-w-full">
              Fitness Classes
            </div>
            <div className="mt-6 text-3xl max-md:max-w-full">
              Slight pain after doing exercise
            </div>
            <div className="mt-5 max-md:max-w-full">
              Fitness class today was great, though i had a slight pain after an
              hour of completing the exercise. Does anyone else have same
              experience?
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-8 w-full text-teal-800 max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <div className="justify-center p-2.5 bg-emerald-100 rounded-md">
              By Grace Estella
            </div>
            <div className="flex gap-3 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a0a49231169cc1f777306dd954a828cc5a0dda10ba3a94541675e68e8ec5f7?"
                className="shrink-0 w-5 aspect-square fill-teal-800"
              />
              <div className="flex-auto">Feb 21, 2024</div>
            </div>
          </div>
          <div className="flex gap-4 self-start mt-5 whitespace-nowrap">
            <div className="flex gap-2 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63ad5e5e2e9dff6d4f9dec3ec0cd9c7afcefe787a0314e8f77ec0a886bf81ba?"
                className="shrink-0 aspect-[1.39] w-[25px]"
              />
              <div>150</div>
            </div>
            <div className="shrink-0 my-auto w-px bg-teal-800 border border-teal-800 border-solid h-[21px]" />
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6d684cd969388af95eaaaf0340250004d3c3a919f5e90c984e67ae598a08a7?"
                className="shrink-0 border-2 border-teal-800 border-solid aspect-[1.04] stroke-[2px] stroke-teal-800 w-[27px]"
              />
              <div className="my-auto">100</div>
            </div>
            <div className="flex gap-2 self-start">
              <div className="shrink-0 w-px h-6 bg-teal-800 border border-teal-800 border-solid" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0728ba4ba18d9101679825c2577965f1c71328a297351765acb1732b7d4a4f5e?"
                className="shrink-0 aspect-[1.04] w-[25px]"
              />
              <div className="my-auto">50</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 py-6 mt-12 w-full border border-red-500 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-start font-bold text-neutral-700 max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={img2}
            className="shrink-0 max-w-full rounded-full aspect-square w-[135px]"
          />
          <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit max-md:max-w-full">
            <div className="text-teal-800 max-md:max-w-full">
              Fitness Classes
            </div>
            <div className="mt-6 text-3xl tracking-wider max-md:max-w-full">
              Online Fitness Classes{" "}
            </div>
            <div className="mt-7 max-md:max-w-full">
              Fitness class today was great, though i had a slight pain after an
              hour of completing the exercise. Does anyone else have same
              experience?
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-8 w-full text-teal-800 max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <div className="justify-center p-2.5 bg-emerald-100 rounded-md">
              By Omotoyosi Atunrase
            </div>
            <div className="flex gap-3 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a0a49231169cc1f777306dd954a828cc5a0dda10ba3a94541675e68e8ec5f7?"
                className="shrink-0 w-5 aspect-square fill-teal-800"
              />
              <div className="flex-auto">Mar 05, 2024</div>
            </div>
          </div>
          <div className="flex gap-4 self-end mt-6 whitespace-nowrap">
            <div className="flex gap-2 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63ad5e5e2e9dff6d4f9dec3ec0cd9c7afcefe787a0314e8f77ec0a886bf81ba?"
                className="shrink-0 aspect-[1.39] w-[25px]"
              />
              <div>69</div>
            </div>
            <div className="shrink-0 my-auto w-px border border-solid bg-zinc-500 bg-opacity-50 border-zinc-500 border-opacity-50 h-[21px]" />
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6d684cd969388af95eaaaf0340250004d3c3a919f5e90c984e67ae598a08a7?"
                className="shrink-0 border-2 border-teal-800 border-solid aspect-[1.04] stroke-[2px] stroke-teal-800 w-[27px]"
              />
              <div className="my-auto">23</div>
            </div>
            <div className="flex gap-2 self-start">
              <div className="shrink-0 w-px h-6 border border-solid bg-zinc-500 bg-opacity-50 border-zinc-500 border-opacity-50" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed5b985da7e452a2a5f0834d42f88d878b008c24616a7bee26bc8279bf64ccb?"
                className="shrink-0 aspect-[1.04] w-[25px]"
              />
              <div className="my-auto">32</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 py-6 mt-16 w-full border border-red-500 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-start font-bold text-neutral-700 max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={img3}
            className="shrink-0 max-w-full rounded-full aspect-square w-[135px]"
          />
          <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit max-md:max-w-full">
            <div className="text-teal-800 max-md:max-w-full">
              Fitness Classes
            </div>
            <div className="mt-6 text-3xl max-md:max-w-full">
              We need more Pilate Classes
            </div>
            <div className="mt-5 max-md:max-w-full">
              Fitness class today was great, though i had a slight pain after an
              hour of completing the exercise. Does anyone else have same
              experience?
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-8 w-full text-teal-800 max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <div className="justify-center p-2.5 bg-emerald-100 rounded-md">
              By Jay Funese
            </div>
            <div className="flex gap-3 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a0a49231169cc1f777306dd954a828cc5a0dda10ba3a94541675e68e8ec5f7?"
                className="shrink-0 w-5 aspect-square fill-teal-800"
              />
              <div className="flex-auto">Mar 17, 2024</div>
            </div>
          </div>
          <div className="flex gap-4 self-start mt-5 whitespace-nowrap">
            <div className="flex gap-2 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63ad5e5e2e9dff6d4f9dec3ec0cd9c7afcefe787a0314e8f77ec0a886bf81ba?"
                className="shrink-0 aspect-[1.39] w-[25px]"
              />
              <div>185</div>
            </div>
            <div className="shrink-0 my-auto w-px bg-teal-800 border border-teal-800 border-solid h-[21px]" />
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6d684cd969388af95eaaaf0340250004d3c3a919f5e90c984e67ae598a08a7?"
                className="shrink-0 border-2 border-teal-800 border-solid aspect-[1.04] stroke-[2px] stroke-teal-800 w-[27px]"
              />
              <div className="my-auto">85</div>
            </div>
            <div className="flex gap-2 self-start">
              <div className="shrink-0 w-px h-6 bg-teal-800 border border-teal-800 border-solid" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0728ba4ba18d9101679825c2577965f1c71328a297351765acb1732b7d4a4f5e?"
                className="shrink-0 aspect-[1.04] w-[25px]"
              />
              <div className="my-auto">90</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 py-6 mt-16 w-full border border-red-500 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-start font-bold text-neutral-700 max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={img4}
            className="shrink-0 max-w-full rounded-full aspect-square w-[135px]"
          />
          <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit max-md:max-w-full">
            <div className="text-teal-800 max-md:max-w-full">
              Fitness Classes
            </div>
            <div className="mt-6 text-3xl max-md:max-w-full">
              Slight pain after doing exercise
            </div>
            <div className="mt-5 max-md:max-w-full">
              Fitness class today was great, though i had a slight pain after an
              hour of completing the exercise. Does anyone else have same
              experience?
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-8 w-full text-teal-800 max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <div className="justify-center p-2.5 bg-emerald-100 rounded-md">
              By Mariam Agboola
            </div>
            <div className="flex gap-3 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a0a49231169cc1f777306dd954a828cc5a0dda10ba3a94541675e68e8ec5f7?"
                className="shrink-0 w-5 aspect-square fill-teal-800"
              />
              <div className="flex-auto">Apr 01, 2024</div>
            </div>
          </div>
          <div className="flex gap-4 self-start mt-5 whitespace-nowrap">
            <div className="flex gap-2 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63ad5e5e2e9dff6d4f9dec3ec0cd9c7afcefe787a0314e8f77ec0a886bf81ba?"
                className="shrink-0 aspect-[1.39] w-[25px]"
              />
              <div>134</div>
            </div>
            <div className="shrink-0 my-auto w-px bg-teal-800 border border-teal-800 border-solid h-[21px]" />
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6d684cd969388af95eaaaf0340250004d3c3a919f5e90c984e67ae598a08a7?"
                className="shrink-0 border-2 border-teal-800 border-solid aspect-[1.04] stroke-[2px] stroke-teal-800 w-[27px]"
              />
              <div className="my-auto">21</div>
            </div>
            <div className="flex gap-2 self-start">
              <div className="shrink-0 w-px h-6 bg-teal-800 border border-teal-800 border-solid" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0728ba4ba18d9101679825c2577965f1c71328a297351765acb1732b7d4a4f5e?"
                className="shrink-0 aspect-[1.04] w-[25px]"
              />
              <div className="my-auto">60</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
