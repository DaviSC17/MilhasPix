import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router";
import { ResetContext } from "../utils/resetContext";
import { useListMyOffer } from "../hooks/useListMyOffer";
import { MyOfferListMobile } from "../components/MyOfferListMobile";
import { MyOfferListSkeletonMobile } from "../components/MyOfferListSkeletonMobile";
import { MyOfferListDesktop } from "../components/MyOfferListDesktop";
import { MyOfferListSkeletonDesktop } from "../components/MyOfferListSkeletonDesktop";

export const MyOffers = () => {
  const [open, setOpen] = useState(false);
  const { response } = useListMyOffer();

  return (
    <section className="p-4  flex flex-col gap-5 h-full relative lg:gap-6 lg:max-w-[86rem] lg:mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-[#6B7280]  font-plus-jakarta-sans font-medium ">
          Minhas Ofertas
        </h2>

        <Link
          onClick={ResetContext}
          to={"/newOffer"}
          className="flex py-2 px-6 bg-[#1E90FF] w-fit rounded-full text-white font-plus-jakarta-sans font-semibold gap-1 items-center group transition duration-300 hover:bg-[#044381] active:scale-95"
        >
          <LuPlus size={20} className="group-hover:animate-pulse" />
          Nova oferta
        </Link>
      </div>
      <div
        role="presentation"
        aria-hidden={true}
        className="absolute top-18 bg-[#E2E2E2] w-full h-0.5 left-0 lg:hidden"
      />
      <div className="flex flex-col    lg:p-5 rounded-[1.25rem] gap-5 lg:border-1 lg:border-[#D9D9D9] relative">
        <div className="mt-4 flex gap-2.5 relative">
          <h3 className="hidden lg:flex text-[#6B7280] font-plus-jakarta-sans font-medium text-[1.25rem] flex-3">
            Todas ofertas
          </h3>

          <div className="relative flex flex-2 xl:flex-1">
            <input
              placeholder="Login de acesso..."
              type="text"
              className="w-full border-1 px-4 py-0.5 border-[#E2E2E2] rounded-full font-dm-mono font-medium text-[0.875rem] leading-8 tracking-wider pr-10 placeholder:text-[#D9D9D9] text-[#6B7280] hover: "
            />
            <FiSearch
              size={20}
              color="#1E90FF"
              className="absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>
          <div className="flex justify-between ">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="border px-4 py-0.5 border-[#E2E2E2] rounded-full lg:w-40
                   font-dm-mono font-medium text-[0.875rem] leading-8 
                   text-[#2E3D50] select-none cursor-pointer flex items-center gap-2 justify-between"
            >
              Filtros
              <FaChevronDown
                size={16}
                color="#1E90FF"
                className={`ml-2 transition-transform duration-150 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
        <div
          role="presentation"
          aria-hidden={true}
          className="absolute top-22 bg-[#E2E2E2] w-full h-[0.0625rem] left-0 max-lg:hidden"
        />

        {response ? (
          response?.offers.map(
            ({
              accountLogin,
              availableQuantity,
              createdAt,
              loyaltyProgram,
              offerId,
              offerStatus,
              offerType,
            }) => (
              <MyOfferListMobile
                key={offerId}
                accountLogin={accountLogin}
                availableQuantity={availableQuantity}
                createdAt={createdAt}
                loyaltyProgram={loyaltyProgram}
                offerId={offerId}
                offerStatus={offerStatus}
                offerType={offerType}
              />
            )
          )
        ) : (
          <MyOfferListSkeletonMobile skeletonRows={3} />
        )}

        <table className="w-full rounded-[1.25rem] max-lg:hidden">
          <thead className="w-full">
            <tr className="flex justify-between py-3 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.0625rem] after:bg-[#E2E2E2]">
              <th className="w-40">Programa</th>
              <th className="w-40">Status</th>
              <th className="w-40">ID da oferta</th>
              <th className="w-40">Login</th>
              <th className="w-40">Milhas Ofertadas</th>
              <th className="w-40">Data</th>
            </tr>
          </thead>

          {response ? (
            response?.offers.map(
              ({
                accountLogin,
                availableQuantity,
                createdAt,
                loyaltyProgram,
                offerId,
                offerStatus,
                offerType,
              }) => (
                <tbody key={offerId}>
                  <MyOfferListDesktop
                    accountLogin={accountLogin}
                    availableQuantity={availableQuantity}
                    createdAt={createdAt}
                    loyaltyProgram={loyaltyProgram}
                    offerId={offerId}
                    offerStatus={offerStatus}
                    offerType={offerType}
                  />
                </tbody>
              )
            )
          ) : (
            <MyOfferListSkeletonDesktop skeletonRows={3} />
          )}
        </table>
      </div>
    </section>
  );
};
