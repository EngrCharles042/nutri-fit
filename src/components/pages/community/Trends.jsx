export const Trends = () => {
    return (
      <div className="flex flex-col max-w-[507px]">
        <div className="flex gap-5 px-5 text-5xl font-bold text-teal-800 max-md:flex-wrap max-md:text-4xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/564ad44703d14eed839355f7da42c8ed1a4c982461241245252e2e56dcb1515a?"
            className="shrink-0 self-start w-10 aspect-[1.11] fill-teal-800"
          />
          <div className="flex-auto max-md:max-w-full max-md:text-4xl">
            Trending Discussions
          </div>
        </div>
        <div className="flex gap-5 items-start px-5 mt-10 text-2xl whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col self-stretch font-bold text-teal-800">
            <div className="shrink-0 h-1.5 bg-teal-800" />
            <div className="mt-1.5">Recent</div>
          </div>
          <div className="flex-auto mt-3">Unanswered</div>
          <div className="flex-auto mt-3">Answered</div>
          <div className="mt-3">Solved</div>
        </div>
      </div>
    );
  }