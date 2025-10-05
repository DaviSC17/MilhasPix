import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router";
import { MyOfferListMobile } from "../components/MyOfferListMobile";
import { ResetContext } from "../utils/resetContext";

export const MyOffers = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="p-4  flex flex-col gap-4 h-full  lg:px-28 relative">
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
      <hr className="absolute top-18 text-[#E2E2E2] w-full h-0.5 left-0" />
      <div className="mt-4 flex gap-2.5">
        <div className="relative flex flex-2">
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
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="border px-4 py-0.5 border-[#E2E2E2] rounded-full 
                   font-dm-mono font-medium text-[0.875rem] leading-8 
                   text-[#2E3D50] select-none cursor-pointer flex items-center gap-2"
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

      <MyOfferListMobile />
    </section>
  );
};
