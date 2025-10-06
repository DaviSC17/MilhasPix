import type { MyOfferI } from "../types/GetMyOffersConfig";
import { formatDate } from "../utils/formatDate";
import { logosMap } from "../utils/logos";

export const MyOfferListDesktop = (offer: MyOfferI) => {
  return (
    <tr className="flex justify-between px-0 py-4 items-center">
      <td className="flex items-center justify-center gap-2   w-40">
        <img
          src={logosMap[offer.loyaltyProgram]}
          alt={`Logo ${offer.loyaltyProgram}`}
          className={`flex w-10 ${
            offer.loyaltyProgram === "TudoAzul" && "ml-4"
          }`}
        />
        <div className="flex flex-col">
          <span
            className={`font-plus-jakarta-sans font-bold text-sm 
            ${offer.loyaltyProgram === "TudoAzul" && "text-[#40B6E6]"}
            ${offer.loyaltyProgram === "Smiles" && "text-[#F57921]"}
            ${offer.loyaltyProgram === "AirPortugal" && "text-[#ED1C24]"}
            ${offer.loyaltyProgram === "LatamPass" && "text-[#2d0c7a]"}`}
          >
            {offer.loyaltyProgram.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </span>
          <span className="text-[#121212] font-plus-jakarta-sans font-medium text-sm">
            {offer.offerType}
          </span>
        </div>
      </td>

      <td className="flex justify-center  w-40">
        <span
          className={`relative flex items-center gap-1.5 px-3 py-0.5 rounded-full text-sm
          before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full 
          ${
            offer.offerStatus === "Inativo" &&
            "bg-red-300 before:bg-red-800 text-red-900"
          }
          ${
            offer.offerStatus === "Ativa" &&
            "bg-[#D1FAE5] before:bg-[#10B981] text-[#065F46]"
          }
          ${
            offer.offerStatus === "Em Utilizacao" &&
            "bg-[#C1D8EE] before:bg-[#1E90FF] text-[#002040]"
          }`}
        >
          {offer.offerStatus === "Em Utilizacao"
            ? "Em Utilização"
            : offer.offerStatus}
        </span>
      </td>

      <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs  text-center w-40">
        {offer.offerId}
      </td>

      <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs  text-center w-40">
        {offer.accountLogin}
      </td>

      <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs  text-center w-40">
        {String(offer.availableQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </td>

      <td className="text-right text-[#121212] text-[0.75rem] font-medium  flex justify-center w-40">
        {formatDate(offer.createdAt)}
      </td>
    </tr>
  );
};
