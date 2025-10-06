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
import { ListChooseProgram } from "./ListChooseYourProgram";

export const FormChooseProgram = () => {
  const { control, handleSubmit } = useFormValidation(schemaChooseProgram);
  const { NewOffer, SetNewOffer } = useNewOfferContext();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: z.infer<typeof schemaChooseProgram>) => {
    handleStepSubmit(SetNewOffer, "firstStep", data, navigate, "/newOffer/2");
  });


  return (
    <form
      className="flex flex-col h-full gap-4 relative lg:h-fit lg:flex-1"
      onSubmit={onSubmit}
    >
      <div className="flex  flex-col lg:flex-row  gap-4 lg:gap-6 xl:gap-3 2xl:gap-6">
        <div className="border-1 relative rounded-lg border-[#E2E2E2] lg:flex-1 p-4 gap-4 flex flex-col ">
          <h2 className="text-[#454c55] flex gap-2 font-dm-sans font-semibold leading-7 ">
            <span className="text-[#1E90FF] text-lg">01.</span> Escolha o
            programa
          </h2>
          <hr className="absolute w-full h-[0.0625rem] left-0 top-[3.1rem] text-[#E2E2E2]" />
          <fieldset className="mt-2">
            <Controller
              name="program"
              control={control}
              defaultValue={NewOffer?.firstStep?.program || ""}
              render={({ field, fieldState }) => {
                const selectedOption =
                  optionsConfig.find((opt) => opt.value === field.value) ||
                  null;

                return (
                  <div className="flex flex-col gap-2 lg:hidden">
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

            <Controller
              name="program"
              control={control}
              defaultValue={NewOffer?.firstStep?.program || ""}
              render={({ field, fieldState }) => {
                return (
                  <div className="hidden flex-col gap-2 lg:flex ">
                    <ListChooseProgram
                      valueField={field.value}
                      onChange={field.onChange}
                      className={`${fieldState.error && "border-red-500 "}`}
                    />
                    {fieldState.error && (
                      <span className="text-red-500 text-sm self-center animate-pulse">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                );
              }}
            />
          </fieldset>
          <div className="gap-4 flex flex-col lg:flex-row">
            <fieldset className="flex flex-col space-y-1 lg:flex-1">
              <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
                Produto
              </h3>

              <Controller
                name="product"
                control={control}
                defaultValue={NewOffer?.firstStep?.product || ""}
                render={({ field, fieldState }) => {
                  const selectedOption =
                    optionsProductConfig.find(
                      (opt) => opt.value === field.value
                    ) || null;
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
            <fieldset className="flex flex-col space-y-1 lg:flex-1">
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
        </div>
        <Expandable
          title="Selecione o Programa"
          className="lg:hidden"
          Icon={LuPlus}
          colorIcon="#1E90FF"
        />
        <Expandable
          colorIcon="#8F8F8F"
          title="Selecione o Programa"
          Icon={FiMinus}
          className="lg:hidden"
          about="Escolha de qual programa de fidelidade você quer vender suas milhas.
          Use apenas contas em seu nome."
        />
      </div>

      <hr className="absolute bottom-16 text-[#E2E2E2] w-full h-0.5 left-0 lg:hidden" />
      <div className="flex mt-auto items-center lg:justify-end max-[400px]:w-[72%] justify-between ml-auto min-[400px]:w-3/5">
        <WhatProgress />
        <ContinueButton value="Prosseguir" />
      </div>
    </form>
  );
};
