import { ListWantReceive } from "../components/ListWantReceive";
import { PiAirplaneInFlight } from "react-icons/pi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";
import { createCurrencyFormatter } from "../utils/formatNumber";
import { Ranking } from "../components/Ranking";
import { CheckBox } from "../components/Checkbox";
import { DisabledInput } from "./DisabledInput";
import { useFormValidation } from "../hooks/useForm";
import { schemaOfferYourMilles } from "../schemas/formOfferYourMilles";
import { Controller } from "react-hook-form";
import { ReceiveUntil } from "./ReceiveUntil";
import { BackButton } from "./BackButton";
import { WhatProgress } from "./WhatProgress";
import { ContinueButton } from "./ContinueButton";
import { LuPlus } from "react-icons/lu";
import { Expandable } from "./Expandable";
import { handleStepSubmit } from "../utils/handleStep";
import { useNewOfferContext } from "../context/NewOffer/NewOfferContext";
import type z from "zod/v3";
import { useNavigate } from "react-router";

export const FormYourMiles = () => {
  const { NewOffer, SetNewOffer } = useNewOfferContext();
  const { control, handleSubmit } = useFormValidation(schemaOfferYourMilles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(
    NewOffer?.secondStep?.millesValue || ""
  );

  const onSubmit = handleSubmit(
    (data: z.infer<typeof schemaOfferYourMilles>) => {
      handleStepSubmit(
        SetNewOffer,
        "secondStep",
        data,
        navigate,
        "/newOffer/3"
      );
    }
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col h-full w-full  self-center relative  gap-6  rounded-lg"
    >
      <div className="flex flex-col border-1 border-[#E2E2E2] relative  gap-6 p-4 rounded-lg">
        <h2 className="text-[#2E3D50] flex gap-2 font-dm-sans font-semibold leading-7 ">
          <span className="text-[#1E90FF] text-lg">02.</span> Oferte suas milhas
        </h2>
        <hr className="absolute w-full h-[0.0625rem] left-0 top-[3.1rem] text-[#E2E2E2]" />

        <fieldset className="flex flex-col gap-2">
          <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
            Quero receber
          </h3>

          <Controller
            name="wantToReceive"
            control={control}
            defaultValue={NewOffer?.secondStep?.wantToReceive}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <ListWantReceive
                  value={field.value}
                  onChange={field.onChange}
                  className={`${fieldState.error && "border-red-500 "}`}
                />
                {fieldState.error && (
                  <span className="text-red-500 text-sm self-center animate-pulse">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </fieldset>

        <fieldset className="space-y-4">
          <fieldset className="flex flex-col gap-2">
            <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
              Milhas ofertadas
            </h3>
            <DisabledInput
              Icon={PiAirplaneInFlight}
              colorIcon="#1E90FF"
              value="10.000"
              textColor="#2E3D50"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50] ">
              Valor a cada 1.000 milhas
            </h3>
            <Controller
              defaultValue={NewOffer?.secondStep?.millesValue}
              name="millesValue"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <div className="relative w-full">
                    <span
                      className={`font-dm-mono font-medium leading-9 tracking-wider absolute top-1/2 left-1.5 -translate-y-1/2 bg-[#1e8fff1c] px-2 rounded-full  ${
                        fieldState.error && "bg-red-200 text-red-900"
                      }`}
                    >
                      R$
                    </span>
                    <input
                      maxLength={10}
                      type="text"
                      placeholder="0,00"
                      onChange={(e) => {
                        createCurrencyFormatter(e, field.onChange, setValue);
                      }}
                      value={value}
                      className={`w-full border-1 px-4 py-2 border-[#E2E2E2] rounded-full font-dm-mono font-medium text-[0.875rem] leading-8 tracking-wider text-[#2E3D50]  focus:outline-none focus:ring-2 focus:ring-[#1E90FF] pl-12.5 ${
                        fieldState.error &&
                        "border-red-500 placeholder:text-red-200 text-red-400"
                      }`}
                    />
                    <HiOutlineChevronDoubleDown
                      size={20}
                      className={` text-[#1E90FF] ${
                        fieldState.error && "text-red-500"
                      } absolute top-1/2 right-3 -translate-y-1/2`}
                    />
                  </div>
                  {fieldState.error && (
                    <span className="ml-4 text-red-500 text-sm animate-pulse">
                      O valor tem que ser maior que 0
                    </span>
                  )}
                </>
              )}
            />
          </fieldset>
          <Ranking value={value} />
        </fieldset>
        <Controller
          defaultValue={NewOffer?.secondStep?.milesPerPassenger}
          name="milesPerPassenger"
          control={control}
          render={({ field }) => (
            <CheckBox value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <Expandable
        colorIcon="#1E90FF"
        title="Média de milhas"
        Icon={LuPlus}
        about="Ao vender mais de 20.000 milhas, ative as Opções Avançadas para definir a média de milhas por emissão."
      />
      <div className="mt-auto space-y-2">
        <ReceiveUntil />

        <div className=" flex items-center justify-between">
          <BackButton />
          <WhatProgress />
          <ContinueButton value="Prosseguir" />
        </div>
      </div>
    </form>
  );
};
