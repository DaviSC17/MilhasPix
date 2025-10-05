import { useListMyOffer } from "../hooks/useListMyOffer";
import { formatDate } from "../utils/formatDate";
import { logosMap } from "../utils/logos";
import { MyOfferListSkeletonMobile } from "./MyOfferListSkeleton";

export const MyOfferListMobile = () => {
  const { response } = useListMyOffer();

  return (
    <>
      {response ? (
        response?.offers?.map(
          ({
            accountLogin,
            availableQuantity,
            createdAt,
            loyaltyProgram,
            offerId,
            offerStatus,
            offerType,
          }) => (
            <table
              key={offerId}
              className="border-1 border-[#D9D9D9] rounded-[1.25rem] flex flex-col"
            >
              <thead className="border-b border-[#D9D9D9]">
                <tr className="flex justify-between p-3">
                  <th className="flex items-center gap-2">
                    <img
                      src={logosMap[loyaltyProgram]}
                      alt={`Logo ${loyaltyProgram}`}
                      className="hidden min-[360px]:flex"
                    />
                    <h3 className="flex gap-1 flex-wrap">
                      <span
                        className={` font-plus-jakarta-sans font-bold text-sm 
                        ${loyaltyProgram === "TudoAzul" && "text-[#40B6E6]"}
                        ${loyaltyProgram === "Smiles" && "text-[#F57921]"}
                        ${loyaltyProgram === "AirPortugal" && "text-[#ED1C24]"}
                        ${loyaltyProgram === "LatamPass" && "text-[#2d0c7a]"}
                        `}
                      >
                        {loyaltyProgram.replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </span>
                      <span className="text-[#121212] font-plus-jakarta-sans font-medium text-sm">
                        {offerType}
                      </span>
                    </h3>
                  </th>
                  <th className="flex flex-col gap-2">
                    <span
                      className={`relative flex items-center gap-1.5 px-3 w-fit self-end
                    rounded-full text-sm 
                    before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full 
                   ${
                     offerStatus === "Inativo" &&
                     "bg-red-300 before:bg-red-800 text-red-900"
                   }
                   ${
                     offerStatus === "Ativa" &&
                     "bg-[#D1FAE5] before:bg-[#10B981] text-[#065F46]"
                   }  
                   ${
                     offerStatus === "Em Utilizacao" &&
                     "bg-[#C1D8EE] before:bg-[#1E90FF] text-[#002040]"
                   }`}
                    >
                      {offerStatus === "Em Utilizacao"
                        ? "Em Utilização"
                        : offerStatus}
                    </span>
                    <span className="ml-auto text-[#6B7280] text-[0.625rem] font-medium">
                      {formatDate(createdAt)}
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody className="p-3 space-y-2">
                <tr className=" flex justify-between">
                  <td className="text-[#121212] font-plus-jakarta-sans font-bold text-xs">
                    ID da oferta
                  </td>
                  <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs">
                    {offerId}
                  </td>
                </tr>
                <tr className=" flex justify-between">
                  <td className="text-[#121212] font-plus-jakarta-sans font-bold text-xs">
                    Login
                  </td>
                  <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs">
                    {accountLogin}
                  </td>
                </tr>
                <tr className=" flex justify-between">
                  <td className="text-[#121212] font-plus-jakarta-sans font-bold text-xs">
                    Milhas ofertadas
                  </td>
                  <td className="text-[#121212] font-plus-jakarta-sans font-medium text-xs">
                    {availableQuantity}
                  </td>
                </tr>
              </tbody>
            </table>
          )
        )
      ) : (
        <MyOfferListSkeletonMobile skeletonRows={3} />
      )}
    </>
  );
};
