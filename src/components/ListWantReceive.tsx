import { useState } from "react";
import { optionsWantToReceive } from "../config/WantToReceiveConfig";

export const ListWantReceive = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <ul className="flex flex-wrap gap-3 justify-center sm:max-w-full max-sm:max-w-96  self-center">
      {optionsWantToReceive.map(({ label, value }) => (
        <li key={value}>
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                setSelected(value);
              }
            }}
            className={`flex py-2 rounded-full border-2 text-black cursor-pointer  transition  duration-300 justify-center font-medium font-dm-sans leading-7  max-[450px]:w-34  md:w-40 w-42 ${selected === value ? "border-[#1E90FF]" : "border-[#F0F0F0] hover:border-[#1e8fff7e]"}`}
          >
            <input
              type="radio"
              name="term"
              value={value}
              checked={selected === value}
              onChange={(e) => setSelected(e.target.value)}
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
