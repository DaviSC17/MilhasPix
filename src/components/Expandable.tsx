import type { ComponentProps } from "react";
import type { IconType } from "react-icons";

interface ExpandableI extends ComponentProps<"div"> {
  title: string;
  Icon?: IconType;
  about?: string;
  colorIcon?: string;
}

export const Expandable = ({
  title,
  about,
  Icon,
  colorIcon,
  ...props
}: ExpandableI) => {
  return (
    <div
      {...props}
      className={`${props.className} p-3 border-1  border-[#E2E2E2]  rounded-lg flex flex-col  select-none gap-2 justify-center`}
    >
      <div className="flex items-center justify-between">
        <span className="font-dm-sans font-semibold leading-[130%] text-[#2E3D50]">
          {title}
        </span>
        {Icon && <Icon size={24} color={colorIcon} className="lg:hidden"/>}
      </div>

      {about && (
        <p className="font-dm-sans text-[#475569] leading-[160%]  text-[0.75rem]">
          {about}
        </p>
      )}
    </div>
  );
};
