import { createSelector } from "@ngrx/store";
import {
  IAdvantagesState,
  IAppState,
  ICarouselState,
  ICompanyInNumsState,
  IContactNumsState,
  IDeveloperCompanyState,
  IGovSitesState,
  IPartnerState,
  ISocialsState,
  ISpecialOfferState,
} from "../index";

export const selectPartner = (state: IAppState): IPartnerState =>
  state.partners;
export const partnerSelector = createSelector(
  selectPartner,
  (state) => state.partners
);
export const errorSelectorPartner = createSelector(
  selectPartner,
  (state) => state.error
);

export const selectCompanyNums = (state: IAppState): ICompanyInNumsState =>
  state.companyNums;
export const companyInNumsSelector = createSelector(
  selectCompanyNums,
  (state) => state.companyNums
);
export const errorSelectorCompanyNums = createSelector(
  selectCompanyNums,
  (state) => state.companyNums
);

export const selectAdvantage = (state: IAppState): IAdvantagesState =>
  state.advantages;
export const advantagesSelector = createSelector(
  selectAdvantage,
  (state) => state.advantages
);
export const errorSelectorAdvantages = createSelector(
  selectAdvantage,
  (state) => state.advantages
);

export const selectCarousel = (state: IAppState): ICarouselState =>
  state.carousel;
export const carouselSelector = createSelector(
  selectCarousel,
  (state) => state.carousel
);
export const errorSelectorCarousel = createSelector(
  selectCarousel,
  (state) => state.carousel
);

export const selectSpecialOffer = (state: IAppState): ISpecialOfferState =>
  state.specialOffer;
export const specialOfferSelector = createSelector(
  selectSpecialOffer,
  (state) => state.specialOffer
);
export const errorSpecialOfferSelector = createSelector(
  selectSpecialOffer,
  (state) => state.specialOffer
);

export const selectContactNums = (state: IAppState): IContactNumsState =>
  state.contactNums;
export const contactNumsSelector = createSelector(
  selectContactNums,
  (state) => state.contactNums
);
export const errorContactNumsSelector = createSelector(
  selectContactNums,
  (state) => state.contactNums
);

export const selectedSocials = (state: IAppState): ISocialsState =>
  state.socials;
export const socialSelector = createSelector(
  selectedSocials,
  (state) => state.socials
);
export const errorSocialSelector = createSelector(
  selectedSocials,
  (state) => state.socials
);

export const selectedDeveloperCompany = (
  state: IAppState
): IDeveloperCompanyState => state.developerCompany;
export const developerCompanySelector = createSelector(
  selectedDeveloperCompany,
  (state) => state.developerCompany
);
export const errorDeveloperCompanySelector = createSelector(
  selectedDeveloperCompany,
  (state) => state.developerCompany
);

export const selectedGovSites = (state: IAppState): IGovSitesState =>
  state.govSites;
export const govSitesSelector = createSelector(
  selectedGovSites,
  (state) => state.govSites
);
export const errorGovSitesSelector = createSelector(
  selectedGovSites,
  (state) => state.govSites
);
