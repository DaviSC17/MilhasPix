import React, { useState } from "react";
import type { NewOfferContextI } from "../../types/NewOfferContext";
import { NewOfferContext } from "./NewOfferContext";

export const NewOfferProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [NewOffer, SetNewOffer] = useState<NewOfferContextI>({
    firstStep: { product: "", program: "" },
    secondStep: {
      wantToReceive: "",
      millesValue: "0,00",
      milesPerPassenger: false,
    },
    lastStep: { Email: "" },
  });

  return (
    <NewOfferContext.Provider value={{ NewOffer, SetNewOffer }}>
      {children}
    </NewOfferContext.Provider>
  );
};
