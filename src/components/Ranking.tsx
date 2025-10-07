import { useEffect, useState } from "react";
import type { RankingI } from "../types/RankingConfig";
import { GET } from "../service/get";
import type { GetRankingI } from "../types/GetRankingConfig";
import { valueForApi } from "../utils/formatNumber";

export const Ranking = ({ value, classNameTitle, ...props }: RankingI) => {
  const [response, setResponse] = useState<GetRankingI[]>();
  
  useEffect(() => {
/*     const apiUrl = import.meta.env.VITE_API_URL;  PROXY VITE*/
    if (valueForApi(value) <= 0 || isNaN(valueForApi(value))) return;
    GET(`/api/simulate-ranking?mile_value=${valueForApi(value)}`).then(
      setResponse
    );
  }, [value]);

  if (valueForApi(value) <= 0) return null;
  return (
    <div className="flex flex-col gap-2">
      <span
        className={`hidden text-[#2E3D50] font-dm-sans  font-medium leading-7 lg:flex ${classNameTitle}`}
      >
        Ranking das ofertas
      </span>
      <ul
        {...props}
        className={`flex gap-2 flex-wrap lg:flex-col lg:border-1 lg:border-[#E2E2E2]  lg:rounded ${props.className} `}
      >
        {response?.map(({ mile_value, position, description }) => {
          return (
            <li
              key={position}
              className={`px-2.5 border-1 flex  border-[#E2E2E2] w-fit rounded-full text-[#1E90FF] text-[0.75rem] leading-7  font-semibold space-x-1 font-dm-sans lg:border-0 lg:border-b-1 lg:rounded-none lg:w-full nth-[5]:border-0 lg:text-[#2E3D50] lg:py-1 ${
                description === "essa será sua posição" &&
                "bg-[#12A19A1A]  text-[#12A19A]! border-[#12A19A] lg:bg-transparent"
              } `}
            >
              {description === "essa será sua posição" && (
                <span className="lg:order-3 lg:ml-auto lg:px-2 lg:bg-[#12A19A1A] lg:rounded-full">
                  Você
                </span>
              )}
              <span
                className={`${
                  description === "essa será sua posição" && " text-[#12A19A]!"
                } text-[#1E90FF]`}
              >
                {position}º
              </span>
              <span className="">R$</span>
              <span className="">
                {mile_value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
