import { PiUserCircle } from "react-icons/pi";
import { DisabledInput } from "./DisabledInput";
import { FiLock, FiMinus } from "react-icons/fi";
import BandeiraDoBrasil from "../assets/Brasil.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { Controller } from "react-hook-form";
import { useFormValidation } from "../hooks/useForm";
import { programDataSchema } from "../schemas/FormProgramData";
import { Expandable } from "./Expandable";
import { ReceiveUntil } from "./ReceiveUntil";
import { BackButton } from "./BackButton";
import { WhatProgress } from "./WhatProgress";
import { ContinueButton } from "./ContinueButton";
import type { z } from "zod/v3";
import type { schemaOfferYourMilles } from "../schemas/formOfferYourMilles";
import { handleStepSubmit } from "../utils/handleStep";
import { useNewOfferContext } from "../context/NewOffer/NewOfferContext";
import { useNavigate } from "react-router";
import { logosMap } from "../utils/logos";

export const FormProgramData = () => {
  const { control, handleSubmit } = useFormValidation(programDataSchema);
  const { NewOffer, SetNewOffer } = useNewOfferContext();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(
    (data: z.infer<typeof schemaOfferYourMilles>) => {
      handleStepSubmit(SetNewOffer, "lastStep", data, navigate, "/newOffer/4");
    }
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col h-full w-full  self-center gap-6 rounded-lg relative lg:flex-1 lg:flex-row"
    >
      <div className="flex flex-col gap-3 relative flex-1">
        <div className="flex flex-col border-1 border-[#E2E2E2] gap-6 p-4 rounded-lg">
          <div className="flex justify-between items-center ">
            <h2 className="text-[#2E3D50] flex gap-2 font-dm-sans font-semibold leading-7">
              <span className="text-[#1E90FF] text-lg">03.</span> Dados do
              programa
            </h2>
            <img
              src={logosMap[NewOffer?.firstStep?.program]}
              className={`w-full hidden min-[360px]:flex select-none  ${
                NewOffer?.firstStep?.program === "TudoAzul" ||
                NewOffer?.firstStep?.program === "Smiles"
                  ? "max-w-10"
                  : "max-w-26"
              }`}
              alt={`Logo ${NewOffer?.firstStep.program.replace(
                /([a-z])([A-Z])/g,
                "$1 $2"
              )}`}
            />
          </div>
          <div
            className="absolute w-full h-[0.0625rem] left-0 top-[4rem] bg-[#E2E2E2]"
            role="presentation"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-4 lg:flex-row">
            <fieldset className="flex flex-col gap-2 flex-1">
              <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
                CPF do Titular
              </h3>
              <DisabledInput
                value="431.140.231-12"
                Icon={PiUserCircle}
                colorIcon="#1E90FF"
                textColor="#2E3D50"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-2 flex-1">
              <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
                Login de acesso
              </h3>

              <Controller
                name="Email"
                control={control}
                defaultValue={NewOffer?.lastStep?.Email}
                render={({ field, fieldState }) => (
                  <>
                    <div className="relative w-full">
                      <input
                        {...field}
                        placeholder="Digite o email de acesso"
                        type="email"
                        maxLength={60} // Limitado a 60 por UX
                        className={`w-full border-1 px-4 py-2 rounded-full font-dm-mono font-medium text-[0.875rem] leading-8 tracking-wider pr-10 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] 
                ${
                  fieldState.error
                    ? "border-red-500 text-red-500 placeholder-red-500"
                    : "border-[#E2E2E2] text-[#2E3D50]"
                }`}
                      />
                      <PiUserCircle
                        className="absolute top-1/2 right-3 -translate-y-1/2"
                        size={20}
                        color={fieldState.error ? "#F87171" : "#1E90FF"}
                      />
                    </div>
                    {fieldState.error && (
                      <span className="text-[#DC2B2B] text-sm animate-pulse ml-5 font-medium ">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
            </fieldset>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <fieldset className="flex flex-col gap-2 flex-1">
              <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
                Senha de acesso
              </h3>

              <DisabledInput
                value="1877"
                textColor="#2E3D50"
                Icon={FiLock}
                colorIcon="#1E90FF"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-2 flex-1">
              <h3 className="leading-[160%] font-dm-sans font-semibold text-[#2E3D50]">
                Telefone para autenticação
              </h3>

              <div className="relative w-full  select-none">
                <div className="flex absolute top-1/2 left-4 -translate-y-1/2 text-[#2E3D50]  gap-1 items-center font-dm-mono font-medium leading-8 tracking-wider">
                  +55
                  <img src={BandeiraDoBrasil} alt="Bandeira do Brasil" />
                </div>
                <input
                  disabled
                  value={"(19)98277-3123"}
                  readOnly
                  type="text"
                  className={`w-full border-1 pl-20 pr-10 py-2 border-[#E2E2E2] rounded-full font-dm-mono font-medium text-[0.875rem] leading-8  tracking-wider text-black select-none pointer-events-none `}
                />

                <IoLogoWhatsapp
                  size={20}
                  color={"#10B981"}
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Expandable
          colorIcon="#8F8F8F"
          title="Dados da conta"
          className="lg:hidden"
          Icon={FiMinus}
          about="Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos."
        />
        <div className="mt-auto space-y-2">
          <ReceiveUntil className="lg:hidden" titleClassName="lg:hidden" />

          <div className=" mt-auto flex items-center justify-between">
            <BackButton />
            <WhatProgress />
            <ContinueButton value="Finalizar" />
          </div>
        </div>
      </div>
      <Expandable
        colorIcon="#8F8F8F"
        title="Dados da conta"
        className="max-xl:hidden lg:p-3 lg:max-w-62 lg:h-fit"
        Icon={FiMinus}
        about="Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos."
      />
    </form>
  );
};
