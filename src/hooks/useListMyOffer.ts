import { useEffect, useState } from "react";
import type { MyOffersI } from "../types/GetMyOffersConfig";
import { GET } from "../service/get";

export const useListMyOffer = () => {
  const [response, setResponse] = useState<MyOffersI | null>();

  useEffect(() => {
    GET(`api/simulate-offers-list`).then((data) => setResponse(data));
  }, []);

  return { response };
};
