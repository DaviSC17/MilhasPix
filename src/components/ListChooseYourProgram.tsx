import { type ComponentProps } from "react";
import { optionsConfig } from "../config/ProgramSelectConfig";

export const ListChooseProgram = ({
  valueField,
  onChange,
  ...props
}: {
  valueField: string;
  onChange: (val: string) => void;
} & ComponentProps<"ul">) => {
  return (
    <ul
      {...props}
      className="flex flex-wrap gap-3 justify-center sm:max-w-full max-sm:max-w-96 self-center"
    >
      {optionsConfig.map(({ value, alt, logo }) => (
        <li key={value}>
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
                onChange(value);
              }
            }}
            className={`flex py-2 rounded-full border-2 text-black cursor-pointer transition duration-300 justify-center font-medium font-dm-sans leading-7 max-[450px]:w-34 md:w-38 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] w-42 ${
              valueField === value
                ? "border-[#1E90FF]"
                : "border-[#F0F0F0] hover:border-[#1e8fff7e]"
            } ${props.className}`}
          >
            <input
              type="radio"
              name="term"
              value={value}
              checked={valueField === value}
              onChange={() => onChange(value)}
              className="sr-only"
              tabIndex={-1}
            />

            <img
              src={logo}
              alt={alt}
              className="min-[1120px]:w-30 min-[1120px]:h-8"
            />
          </label>
        </li>
      ))}
    </ul>
  );
};
