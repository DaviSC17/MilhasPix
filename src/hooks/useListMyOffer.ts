import { useEffect, useState } from "react";
import type { MyOffersI } from "../types/GetMyOffersConfig";
import { GET } from "../service/get";

export const useListMyOffer = () => {
  const [response, setResponse] = useState<MyOffersI | null>();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    GET(`${apiUrl}/simulate-offers-list`).then((data) => setResponse(data));
  }, []);

  return { response };
};
