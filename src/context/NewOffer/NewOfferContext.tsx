import { createContext, useContext } from "react";
import type { NewOfferContextI } from "../../types/NewOfferContext";

interface ContextType {
  NewOffer: NewOfferContextI;
  SetNewOffer: React.Dispatch<React.SetStateAction<NewOfferContextI>>;
}

export const NewOfferContext = createContext<ContextType | undefined>(
  undefined
);

export const useNewOfferContext = () => {
  const context = useContext(NewOfferContext);
  if (!context)
    throw new Error("useNewOfferContext must be used inside");
  return context;
};
