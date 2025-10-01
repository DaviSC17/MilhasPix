import { components, type OptionProps } from "react-select";

interface OptionsI {
  label: string;
  logo: string;
  alt: string;
}

export const CustomOptions = (props: OptionProps<OptionsI, false>) => {
  const { label, logo, alt } = props.data;
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between cursor-pointer top-">
        <span className="text-sm leading-5 font-dm-sans font-medium">
          {label}
        </span>
        <img src={logo} alt={alt} />
      </div>
    </components.Option>
  );
};
