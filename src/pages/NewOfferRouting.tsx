import type { JSX } from "react";
import { Navigate, useParams } from "react-router";
import { ChooseProgram } from "./ChooseProgram";
import { OfferYourMiles } from "./OfferYourMiles";
import { ProgramData } from "./ProgramData";
import { SuccessfulSale } from "./SuccessfulSale";
import { useNewOfferContext } from "../context/NewOffer/NewOfferContext";

export const NewOfferStepper = () => {
  const { NewOffer } = useNewOfferContext();
  const { id } = useParams<{ id?: string }>();
  const step = Number(id);

  if (id && (step <= 1 || step > 4 || isNaN(step))) {
    return <Navigate to="/newOffer" replace />;
  }

  if (step > 1 && NewOffer.firstStep.product.trim() === "") {
    return <Navigate to="/newOffer" replace />;
  }
  
  const stepsMap: Record<string, JSX.Element> = {
    "2": <OfferYourMiles />,
    "3": <ProgramData />,
    "4": <SuccessfulSale />,
  };

  const currentStep = id ? stepsMap[id] : <ChooseProgram />;

  return currentStep;
};
