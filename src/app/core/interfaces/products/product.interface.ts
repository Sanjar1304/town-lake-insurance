export interface IProduct {
  title: string | IMessageProduct;
  text?: string | IMessageProduct;
  image?: string;
  buttonUrl?: string;
  buttonText: string | IMessageProduct;
}

export interface IMessageProduct {
  en: "";
  ru: "";
  uz: "";
}
