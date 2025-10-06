import { FormChooseProgram } from "../components/FormChooseProgram";
import { Steps } from "../components/Steps";

export const ChooseProgram = () => {
  return (
    <section className="flex flex-col h-full  md:max-w-4xl md:mx-auto p-4 lg:max-w-[86rem] lg:flex-row lg:px-8 lg:py-8 lg:gap-4 xl:gap-2">
      <Steps />
      <FormChooseProgram />
    </section>
  );
};
