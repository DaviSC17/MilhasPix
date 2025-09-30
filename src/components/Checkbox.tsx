export const CheckBox = () => {
  return (
    <label className="flex  cursor-pointer w-fit">
      <input
        type="checkbox"
        className="sr-only peer"
        aria-label="Ativar definição de média de milhas por passageiro"
      />
      <div className="w-11 h-6 bg-[#E2E2E2] rounded-full transition-colors duration-300 peer-checked:bg-[#1E90FF]" />
      <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5" />
      <p className="ml-2 select-none font-dm-sans text-[#8F8F8F] font-medium leading-[130%] transition duration-300 peer-checked:text-[#2E3D50]">Média de milhas por passageiro</p>
    </label>
  );
};
