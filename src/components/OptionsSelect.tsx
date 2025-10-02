import { components, type OptionProps } from "react-select";
import type { OptionI } from "../config/MenuSelectStyles";

export const CustomOptions = (props: OptionProps<OptionI, false>) => {
  const { label, logo, alt } = props.data;
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between cursor-pointer">
        <span className="text-[#2E3D50]">
          {label}
        </span>
        <img src={logo} alt={alt} />
      </div>
    </components.Option>
  );
};
