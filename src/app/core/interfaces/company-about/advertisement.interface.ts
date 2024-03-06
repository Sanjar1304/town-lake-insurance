export interface AdvertisementInterface {
  topText: string | IMessageAdds;
  title: string | IMessageAdds;
  text: string | IMessageAdds;
  btnText: string | IMessageAdds;
  btnUrl?: string;
  image: string;
  imageName: string | IMessageAdds;
}

export interface IMessageAdds {
  en: "";
  ru: "";
  uz: "";
}
