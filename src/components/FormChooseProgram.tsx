import Select from "react-select";
import { CustomOptions } from "../components/OptionsSelect";
import { optionsConfig } from "../config/ProgramSelectConfig";
import { CustomSingleValueProgram } from "../components/SingleOptionProgramSelect";
import { MenuStyles } from "../config/MenuSelectStyles";
import { optionsProductConfig } from "../types/ProductSelectConfig";
import { CustomSingleValueProduct } from "../components/SingleOptionProductSelect";
import { FiLock, FiMinus } from "react-icons/fi";
import { DisabledInput } from "./DisabledInput";
import { Controller } from "react-hook-form";
import { ContinueButton } from "./ContinueButton";
import { WhatProgress } from "./WhatProgress";
import { Expandable } from "./Expandable";
import { LuPlus } from "react-icons/lu";
import { useFormValidation } from "../hooks/useForm";
import { schemaChooseProgram } from "../schemas/formChooseProgram";
import { useNewOfferContext } from "../context/NewOffer/NewOfferContext";
import { useNavigate } from "react-router";
import type z from "zod/v3";
import { handleStepSubmit } from "../utils/handleStep";

export const FormChooseProgram = () => {
  const { control, handleSubmit } = useFormValidation(schemaChooseProgram);
  const { NewOffer, SetNewOffer } = useNewOfferContext();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: z.infer<typeof schemaChooseProgram>) => {
    handleStepSubmit(SetNewOffer, "firstStep", data, navigate, "/newOffer/2");
  });
  return (
    <form className="flex flex-col h-full gap-4 relative" onSubmit={onSubmit}>
      <div className="border-1 relative rounded-lg border-[#E2E2E2]  p-4 gap-4 flex flex-col">
        <h2 className="text-[#454c55] flex gap-2 font-dm-sans font-semibold leading-7 ">
          <span className="text-[#1E90FF] text-lg">01.</span> Escolha o programa
        </h2>
        <hr className="absolute w-full h-[0.0625rem] left-0 top-[3.1rem] text-[#E2E2E2]" />
        <fieldset className="mt-2">
          <Controller
            name="program"
            control={control}
            defaultValue={NewOffer?.firstStep?.program || ""}
            render={({ field, fieldState }) => {
              const selectedOption =
                optionsConfig.find((opt) => opt.value === field.value) || null;

              return (
                <div className="flex flex-col gap-2">
                  <Select
                    options={optionsConfig}
                    isSearchable={false}
                    placeholder="Selecione"
                    value={selectedOption}
                    onChange={(option) => field.onChange(option?.value)}
                    components={{
                      Option: CustomOptions,
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                      SingleValue: CustomSingleValueProgram,
                    }}
                    styles={MenuStyles(!!fieldState.error)}
                  />
                  {fieldState.error && (
                    <span className="text-red-500 text-sm animate-pulse pl-5">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              );
            }}
          />
        </fieldset>

        <fieldset className="flex flex-col space-y-1">
          <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
            Produto
          </h3>

          <Controller
            name="product"
            control={control}
            defaultValue={NewOffer?.firstStep?.product || ""}
            render={({ field, fieldState }) => {
              const selectedOption =
                optionsProductConfig.find((opt) => opt.value === field.value) ||
                null;
              return (
                <>
                  <Select
                    options={optionsProductConfig}
                    isSearchable={false}
                    value={selectedOption}
                    placeholder="Selecione"
                    className="text-[#2E3D50]"
                    components={{
                      SingleValue: CustomSingleValueProduct,
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    onChange={(option) => field.onChange(option?.value)}
                    styles={MenuStyles(!!fieldState.error)}
                  />

                  <span className="text-red-500 text-sm  animate-pulse pl-5">
                    {fieldState.error?.message}
                  </span>
                </>
              );
            }}
          />
        </fieldset>
        <fieldset className="flex flex-col space-y-1">
          <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
            CPFs Disponíveis
          </h3>
          <DisabledInput
            Icon={FiLock}
            colorIcon="#8F8F8F"
            value="Ilimitado"
            textColor="#8F8F8F"
          />
        </fieldset>
      </div>
      <Expandable
        title="Selecione o Programa"
        Icon={LuPlus}
        colorIcon="#1E90FF"
      />
      <Expandable
        colorIcon="#8F8F8F"
        title="Selecione o Programa"
        Icon={FiMinus}
        about="Escolha de qual programa de fidelidade você quer vender suas milhas.
          Use apenas contas em seu nome."
      />

      <hr className="absolute bottom-16 text-[#E2E2E2] w-full h-0.5 left-0" />

      <div className="flex mt-auto mb-1 items-center  justify-end gap-24">
        <WhatProgress />
        <ContinueButton value="Prosseguir" />
      </div>
    </form>
  );
};
