import { components } from "react-select";
import { type SingleValueProps } from "react-select";
import type { OptionI } from "../types/MenuStyles";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const CustomSingleValueProduct = (props: SingleValueProps<OptionI>) => {
  const { label } = props.data;
  return (
    <components.SingleValue {...props} className="flex items-center gap-2">
      <div className="flex items-center justify-between gap-2 flex-1">
        <span className="text-[#2E3D50]">
          {label}
        </span>
        <div>
          <FaChevronUp size={10} className="text-[#029DF7]" />
          <FaChevronDown size={10} className="text-[#029DF7]" />
        </div>
      </div>
    </components.SingleValue>
  );
};
