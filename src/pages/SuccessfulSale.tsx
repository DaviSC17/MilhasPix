import { Link } from "react-router";
import PartyHat from "../assets/PartyHat.svg";
import { IoArrowForward } from "react-icons/io5";
import { ResetContext } from "../utils/resetContext";
import { Steps } from "../components/Steps";

export const SuccessfulSale = () => {
  return (
    <section className="flex px-4 py-5 h-full items-center justify-center lg:items-start lg:gap-10">
      <Steps />
      <div className="flex flex-col h-full  md:px-10 max-md:max-w-2xl max-md:mx-auto lg:flex-1 lg:border-1 lg:border-[#E2E2E2] lg:rounded-lg  lg:h-[40rem] lg:justify-center lg:gap-6">
        <div className="flex flex-col items-center justify-center max-lg:flex-1 text-center">
          <img src={PartyHat} alt="Cone de festa" />
          <h2 className="text-[#1E90FF] font-dm-sans font-medium text-[1.25rem] leading-7 mt-4">
            Ordem de venda criada com sucesso!
          </h2>
          <p className="font-dm-sans font-medium leading-7 mt-2 max-w-2xl">
            Agora é só aguardar — assim que suas milhas forem vendidas, o valor
            será transferido direto para sua conta via Pix.
          </p>
        </div>
        <div
          role="presentation"
          aria-hidden={true}
          className="absolute bottom-22 bg-[#E2E2E2] w-full h-0.5 left-0 lg:hidden"
        />
        <div className="flex w-full justify-between items-center lg:justify-center">
          <Link
            onClick={ResetContext}
            className=" border border-[#E2E2E2] cursor-pointer rounded-full flex gap-2 items-center px-6 py-2.5 group hover:border-[#979797] transition duration-300 active:scale-95 max-[360px]:px-4 max-[360px]:py-1.5 lg:hidden"
            to={"/newOffer"}
          >
            <span className="text-[#2E3D50] text-sm font-medium max-[360px]:text-xs ">
              Sair
            </span>
          </Link>
          <Link
            to={"/myOffers"}
            className="flex items-center px-6 py-2.5 bg-[#1E90FF] w-fit rounded-4xl text-white gap-2 font-medium group active:scale-95 transition duration-300 hover:bg-[#1971ca] max-[360px]:text-xs max-[360px]:px-4 max-[360px]:py-1.5"
          >
            Ver minhas ofertas
            <IoArrowForward
              color="white"
              size={20}
              className="mt-0.5 group-hover:animate-pulse"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
