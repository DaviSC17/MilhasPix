import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router";
import type { NewOfferContextI } from "../types/NewOfferContext";

export const handleStepSubmit = (
  setNewOffer: Dispatch<SetStateAction<NewOfferContextI>>,
  step: keyof NewOfferContextI,
  data: Partial<NewOfferContextI[keyof NewOfferContextI]>,
  navigate: NavigateFunction,
  nextRoute: string
) => {
  setNewOffer((prev) => ({
    ...prev,
    [step]: {
      ...prev[step],
      ...data,
    },
  }));

  navigate(nextRoute);
};
