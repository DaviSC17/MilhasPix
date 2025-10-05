export interface NewOfferContextI {
  firstStep: {
    product: string;
    program: string;
  };
  secondStep: {
    wantToReceive: string;
    millesValue: string;
    milesPerPassenger: boolean;
  };
  lastStep: {
    Email: string;
  };
}
