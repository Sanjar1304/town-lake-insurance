export interface INews {
  url: string;
  image: string;
  date: string;
  text: string | INewsMessage;
}

export interface INewsMessage {
  en: "";
  ru: "";
  uz: "";
}
