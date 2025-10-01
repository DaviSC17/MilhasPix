import { components } from "react-select";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { type SingleValueProps } from "react-select";

export interface OptionI {
  label: string;
  logo: string;
  alt: string;
}

export const CustomSingleValue = (props: SingleValueProps<OptionI>) => {
  const { label, logo, alt } = props.data;
  return (
    <components.SingleValue {...props} className="flex items-center gap-2">
      <PiArrowsCounterClockwiseBold size={20} color="#1E90FF" />
      <div className="flex items-center justify-between gap-2 flex-1">
        <span className="text-sm leading-5 font-dm-sans font-medium">
          {label}
        </span>
        <img src={logo} alt={alt} />
      </div>
    </components.SingleValue>
  );
};
