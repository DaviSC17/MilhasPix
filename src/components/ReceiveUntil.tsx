import type { ComponentProps } from "react";

interface ReceiveUntilI extends ComponentProps<"div"> {
  titleClassName?: string;
}

export const ReceiveUntil = ({ titleClassName, ...props }: ReceiveUntilI) => {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={`hidden text-[#2E3D50] font-dm-sans font-medium leading-7 lg:flex ${titleClassName}`}
      >
        Receba até
      </p>
      <div
        {...props}
        className={`bg-[#12A19A1A] w-full px-4.5 py-2 max-sm:-ml-4 max-sm:w-[calc(100%+2rem)] sm:rounded-full ${props.className}`}
      >
        <div className="text-[#12A19A] font-dm-sans flex justify-between font-medium leading-6.5 w-full lg:text-[1.25rem]">
          <span className="lg:hidden">Receba até</span>
          <span className="lg:flex lg:w-full lg:justify-between">
            <strong>R$</strong>24.325,23
          </span>
        </div>
      </div>
    </div>
  );
};
