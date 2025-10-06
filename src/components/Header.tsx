import logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header className="w-full px-4 py-3.5 bg-[#1E90FF] flex justify-between">
      <div className="flex justify-between w-full md:max-w-4xl md:mx-auto lg:max-w-[86rem] px-4">
        <img src={logo} className="w-30" alt="Logo MilhasPix" />

        <span
          className="px-4 py-1.5 border-[#EAEAEA] font-dm-sans font-medium text-sm leading-6 border-[0.0625rem] rounded-full text-[#EAEAEA]"
          aria-label="Saldo atual: R$ 282,12"
        >
          R$ 282,12
        </span>
      </div>
    </header>
  );
};
