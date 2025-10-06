import { FormProgramData } from "../components/FormProgramData";
import { Steps } from "../components/Steps";

export const ProgramData = () => {
  return (
    <section className="p-4 flex flex-col gap-3 h-full md:px-10 max-md:max-w-2xl max-md:mx-auto lg:flex-row lg:h-fit lg:w-full lg:max-w-[86rem] lg:mx-auto">
      <Steps passoAtual={3}/>
      <FormProgramData />

    </section>
  );
};
