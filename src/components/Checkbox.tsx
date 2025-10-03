import { useState } from "react";

export const CheckBox = () => {
  const [milesPerPassenger, setMilesPerPassenger] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3 ">
      <label className="flex items-center cursor-pointer  relative  gap-4">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={milesPerPassenger}
          onChange={(event) => setMilesPerPassenger(event.target.checked)}
        />
        <div className="max-w-11 w-full h-6 bg-[#E2E2E2] rounded-full transition-colors duration-300 peer-checked:bg-[#1E90FF] " />
        <div className="absolute left-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5" />
        <p className=" select-none font-dm-sans text-[#8F8F8F] font-medium leading-[130%] transition duration-300 peer-checked:text-[#2E3D50] max-[385px]:text-sm">
          Média de milhas por passageiro
        </p>
      </label>
      {milesPerPassenger && (
        <div className="flex flex-col gap-1">
           <input
              disabled
              value={"10.000"}
              type="text"
              className="w-full border-1 px-4 py-2 border-[#E2E2E2] rounded-full font-dm-mono font-medium text-[0.875rem] leading-8 tracking-wider text-[#2E3D50]"
            />
          <p className="font-dm-sans font-medium text-[0.875rem] leading-8 text-[#12A19A] max-lg:ml-3 lg:px-4 lg:py-2 lg:bg-[#12A19A1A] rounded-full w-fit ">
            Melhor média para a sua oferta:{" "}
            <span className="font-bold">27.800</span>
          </p>
        </div> 
      )}
    </div>
  );
};
