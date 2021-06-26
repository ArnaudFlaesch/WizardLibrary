export enum CommercialOfferType {
  PERCENTAGE = 'percentage',
  MINUS = 'minus',
  SLICE = 'slice'
}

export type CommercialOffer = PercentageOffer | MinusOffer | SliceOffer;

export interface PercentageOffer {
  type: string;
  value: number;
}

export interface MinusOffer {
  type: string;
  value: number;
}

export interface SliceOffer {
  type: string;
  sliceValue: number;
  value: number;
}
