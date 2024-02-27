import { createAction, props } from "@ngrx/store";

import { PartnerInterface } from "@core/interfaces/company-about/partner.interface";
import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";
import { ISpecialOfferInterface } from "@core/interfaces/company-about/specialOffer.interface";
import { ContactNumsInterface } from "@shared/components/footer/interfaces/contactNums.interface";
import { SocialInterface } from "@shared/components/footer/interfaces/social.interface";
import { DevelopingCompanyInfo } from "@core/interfaces/developingCompanyInfo/developingCompanyInfo";
import { GovernmentalSite } from "@shared/components/footer/interfaces/govSite.interface";

export const getPartners = createAction("[Partners] Get partners info");
export const getPartnersSuccess = createAction(
  "[Partners] Get partners success",
  props<{ partners: PartnerInterface[] }>()
);
export const getPartnersFailure = createAction(
  "[Partners] Get partners failure",
  props<{ error: string }>()
);

export const getCompanyInNums = createAction(
  "[CompanyInNums] Get companyInNums info"
);
export const getCompanyInNumsSuccess = createAction(
  "[CompanyInNums] Get companyInNums success",
  props<{ companyNums: CompanyInNumsInterface[] }>()
);
export const getCompanyInNumsFailure = createAction(
  "[CompanyInNums] Get companyInNums failure",
  props<{ error: string }>()
);

export const getAdvantages = createAction("[Advantages] Get advantages info");
export const getAdvantagesSuccess = createAction(
  "[Advantages] Get advantages success",
  props<{ advantages: IAdvantageInterface[] }>()
);
export const getAdvantagesFailure = createAction(
  "[Advantages] Get advantages failure",
  props<{ error: string }>()
);

export const getCarousel = createAction("[Carousel] Get carousel info");
export const getCarouselSuccess = createAction(
  "[Carousel] Get carousel success",
  props<{ carousel: AdvertisementInterface[] }>()
);
export const getCarouselFailure = createAction(
  "[Carousel] Get carousel failure",
  props<{ error: string }>()
);

export const getSpecialOffer = createAction(
  "[SpecialOffer] Get special offer info"
);
export const getSpecialOfferSuccess = createAction(
  "[SpecialOffer] Get special offer success",
  props<{ specialOffer: ISpecialOfferInterface[] }>()
);
export const getSpecialOfferFailure = createAction(
  "[SpecialOffer] Get special offer failure",
  props<{ error: string }>()
);

export const getContactNums = createAction(
  "[ContactNums] Get contact nums info"
);
export const getContactNumsSuccess = createAction(
  "[ContactNums] Get contact nums success",
  props<{
    contactNums: ContactNumsInterface;
  }>()
);
export const getContactNumsFailure = createAction(
  "[ContactNums] Get contact nums failure",
  props<{ error: string }>()
);

export const getSocials = createAction("[Socials] Get socials info");
export const getSocialsSuccess = createAction(
  "[Socials] Get socials success",
  props<{
    socials: SocialInterface[];
  }>()
);
export const getSocialsFailure = createAction(
  "[Socials] Get socials failure",
  props<{
    error: string;
  }>()
);

export const getDeveloperCompanyInfo = createAction(
  "[Developer Company Info] Get developer company info"
);
export const getDeveloperCompanyInfoSuccess = createAction(
  "[Developer Company Info] Get developer company info success",
  props<{ developerCompany: DevelopingCompanyInfo }>()
);
export const getDeveloperCompanyInfoFailure = createAction(
  "[Developer Company Info] Get developer company info failure",
  props<{ error: string }>()
);

export const getGovSites = createAction(
  "[GovSites] Get governmental sites info"
);
export const getGovSitesSuccess = createAction(
  "[GovSites] get governmental sites success",
  props<{ govSites: GovernmentalSite[] }>()
);
export const getGovSitesFailure = createAction(
  "[GovSites] get governmental sites failure",
  props<{ error: string }>()
);
