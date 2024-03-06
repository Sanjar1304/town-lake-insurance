export interface ISpecialOfferInterface {
  image: string;
  title: string | IMessageSpecialOffer;
  text: string | IMessageSpecialOffer;
  url?: string;
  color?: string;
  btnText: string | IMessageSpecialOffer;
}

export interface IMessageSpecialOffer {
  en: "";
  ru: "";
  uz: "";
}
