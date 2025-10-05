import { type ComponentProps } from "react";
import { optionsWantToReceive } from "../config/WantToReceiveConfig";

export const ListWantReceive = ({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (val: string) => void;
} & ComponentProps<"ul">) => {
  return (
    <ul
      {...props}
      className="flex flex-wrap gap-3 justify-center sm:max-w-full max-sm:max-w-96 self-center"
    >
      {optionsWantToReceive.map(({ label, optionValue }) => (
        <li key={optionValue}>
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
                onChange(optionValue);
              }
            }}
            className={`flex py-2 rounded-full border-2 text-black cursor-pointer transition duration-300 justify-center font-medium font-dm-sans leading-7 max-[450px]:w-34 md:w-40 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] w-42 ${
              value === optionValue
                ? "border-[#1E90FF]"
                : "border-[#F0F0F0] hover:border-[#1e8fff7e]"
            } ${props.className}`}
          >
            <input
              type="radio"
              name="term"
              value={optionValue}
              checked={value === optionValue}
              onChange={() => onChange(optionValue)}
              className="sr-only"
              tabIndex={-1}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};
