export interface MyOfferI {
  offerId: string;
  offerStatus: string;
  loyaltyProgram: string;
  offerType: string;
  accountLogin: string;
  createdAt: string;
  availableQuantity: number;
}

export interface MyOffersI {
  totalQuantityOffers: number;
  offers: MyOfferI[];
}
