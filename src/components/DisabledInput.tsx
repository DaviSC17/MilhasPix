import type { IconType } from "react-icons";

interface DisabledInputsI {
  value: string;
  Icon: IconType;
  colorIcon: string;
  textColor: string;
}
export const DisabledInput = ({
  colorIcon,
  Icon,
  value,
  textColor,
}: DisabledInputsI) => {
  return (
    <div className="relative w-full  select-none">
      <input
        disabled
        placeholder={value}
        readOnly
        type="text"
        className={`w-full border-1 px-4 py-2 border-[#E2E2E2] rounded-full font-dm-mono font-medium text-[0.875rem] leading-8 tracking-wider placeholder:text-[${textColor}] select-none pointer-events-none pr-10`}
      />
      {Icon && (
        <Icon
          size={20}
          color={colorIcon}
          className="absolute top-1/2 right-3 -translate-y-1/2"
        />
      )}
    </div>
  );
};
