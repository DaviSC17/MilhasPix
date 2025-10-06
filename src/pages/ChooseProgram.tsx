import { FiMinus } from "react-icons/fi";
import { Expandable } from "../components/Expandable";
import { FormChooseProgram } from "../components/FormChooseProgram";
import { Steps } from "../components/Steps";

export const ChooseProgram = () => {
  return (
    <section className="flex flex-col h-full  md:max-w-4xl md:mx-auto p-4 lg:max-w-[86rem] lg:flex-row lg:px-8 lg:py-8 lg:gap-4 xl:gap-2">
      <Steps  passoAtual={1}/>
      <FormChooseProgram />

      <Expandable
        colorIcon="#8F8F8F"
        title="Selecione o Programa"
        Icon={FiMinus}
        className="hidden lg:p-3 lg:max-w-62 lg:h-fit  xl:flex"
        about="Escolha de qual programa de fidelidade você quer vender suas milhas.
                Use apenas contas em seu nome."
      />
    </section>
  );
};
