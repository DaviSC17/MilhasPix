import { useNewOfferContext } from "../context/NewOffer/NewOfferContext";

export const ResetContext = () => {
  const { SetNewOffer } = useNewOfferContext();

  SetNewOffer({
    firstStep: { product: "", program: "" },
    secondStep: {
      milesPerPassenger: false,
      millesValue: "",
      wantToReceive: "",
    },
    lastStep: { Email: "" },
  });
};
