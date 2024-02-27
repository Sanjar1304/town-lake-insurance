import { PartnerInterface } from "@core/interfaces/company-about/partner.interface";
import { ActionReducerMap } from "@ngrx/store";
import {
  advantagesReducer,
  carouselReducer,
  companyInNumsReducer,
  contactNumsReducer,
  fincubeReducer,
  govSitesReducer,
  partnersReducers,
  socialsReducer,
  specialOfferReducer,
} from "./company-about/reducers";
import { companyAboutEffect } from "./company-about/effects";
import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";
import { ISpecialOfferInterface } from "@core/interfaces/company-about/specialOffer.interface";
import { INews } from "@core/interfaces/news/news.interface";
import { newsReducer } from "./news/reducers";
import { newsEffect } from "./news/effects";
import { IProduct } from "@core/interfaces/products/product.interface";
import { productsReducer } from "./products/reducers";
import { productsEffect } from "./products/effects";
import { ContactNumsInterface } from "@shared/components/footer/interfaces/contactNums.interface";
import { SocialInterface } from "@shared/components/footer/interfaces/social.interface";
import { DevelopingCompanyInfo } from "@core/interfaces/developingCompanyInfo/developingCompanyInfo";
import { GovernmentalSite } from "@shared/components/footer/interfaces/govSite.interface";

export interface IPartnerState {
  partners: PartnerInterface[] | null;
  error: string | null;
}

export interface ICompanyInNumsState {
  companyNums: CompanyInNumsInterface[] | null;
  error: string | null;
}

export interface IAdvantagesState {
  advantages: IAdvantageInterface[] | null;
  error: string | null;
}

export interface ICarouselState {
  carousel: AdvertisementInterface[] | null;
  error: string | null;
}

export interface ISpecialOfferState {
  specialOffer: ISpecialOfferInterface[] | null;
  error: string | null;
}

export interface INewsState {
  news: INews[] | null;
  error: string | null;
}

export interface IProductsState {
  products: IProduct[] | null;
  error: string | null;
}

export interface IContactNumsState {
  contactNums: ContactNumsInterface | null;
  error: string | null;
}

export interface ISocialsState {
  socials: SocialInterface[] | null;
  error: string | null;
}

export interface IFincubeState {
  fincube: DevelopingCompanyInfo | null;
  error: string | null;
}

export interface IGovSitesState {
  govSites: GovernmentalSite[] | null;
  error: string | null;
}

export interface IAppState {
  partners: IPartnerState;
  companyNums: ICompanyInNumsState;
  advantages: IAdvantagesState;
  carousel: ICarouselState;
  specialOffer: ISpecialOfferState;
  news: INewsState;
  products: IProductsState;
  contactNums: IContactNumsState;
  socials: ISocialsState;
  fincube: IFincubeState;
  govSites: IGovSitesState;
}

export const reducers: ActionReducerMap<IAppState> = {
  partners: partnersReducers,
  companyNums: companyInNumsReducer,
  advantages: advantagesReducer,
  carousel: carouselReducer,
  specialOffer: specialOfferReducer,
  news: newsReducer,
  products: productsReducer,
  contactNums: contactNumsReducer,
  socials: socialsReducer,
  fincube: fincubeReducer,
  govSites: govSitesReducer,
};

export const effects = [companyAboutEffect, newsEffect, productsEffect];
