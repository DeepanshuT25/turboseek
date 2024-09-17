import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col  bg-[rgb(229,234,235)] items-center justify-center">
      <a
        className="mb-4 inline-flex h-7 shrink-0 items-center gap-[9px] rounded-[50px] border-[0.5px] border-solid border-[#E6E6E6] bg-[#204544] px-3 py-4 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]"
        href="https://www.datafusion.com/"
        target="_blank"
      >
        <span className="text-center text-base font-light leading-[normal] text-white">
          Created by Data-Fusion
        </span>
      </a>
      <h2 className="bg-custom-gradient bg-clip-text pb-7 pt-2 text-center text-3xl font-semibold leading-[normal] lg:text-[64px]">
        Analyse smarter & Deeper
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-6">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px] lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded border border-solid border-[#C1C1C1] bg-[#EDEDEA] px-2.5 py-2"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-[#1B1B16]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "What is data-fusion?",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "How can I shedule my work?",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "Can you explain more about my project?",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
