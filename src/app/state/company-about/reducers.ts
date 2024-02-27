import { createReducer, on } from "@ngrx/store";
import * as companyAboutActions from "./actions";
import {
  IAdvantagesState,
  ICarouselState,
  ICompanyInNumsState,
  IContactNumsState,
  IDeveloperCompanyState,
  IGovSitesState,
  IPartnerState,
  ISocialsState,
  ISpecialOfferState,
} from "../index";

export const initialPartnerState: IPartnerState = {
  partners: null,
  error: null,
};
export const initialCompanyInNums: ICompanyInNumsState = {
  companyNums: null,
  error: null,
};
export const initialAdvantages: IAdvantagesState = {
  advantages: null,
  error: null,
};
export const initialCarousel: ICarouselState = {
  carousel: null,
  error: null,
};
export const initialSpecialOffer: ISpecialOfferState = {
  specialOffer: null,
  error: null,
};
export const initialContactNums: IContactNumsState = {
  contactNums: null,
  error: null,
};
export const initialSocials: ISocialsState = {
  socials: null,
  error: null,
};
export const initialDeveloperCompany: IDeveloperCompanyState = {
  developerCompany: null,
  error: null,
};

export const initialGovSites: IGovSitesState = {
  govSites: null,
  error: null,
};

export const partnersReducers = createReducer(
  initialPartnerState,
  on(companyAboutActions.getPartners, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getPartnersSuccess, (state, action) => ({
    ...state,
    partners: action.partners,
  })),
  on(companyAboutActions.getPartnersFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const companyInNumsReducer = createReducer(
  initialCompanyInNums,
  on(companyAboutActions.getCompanyInNums, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getCompanyInNumsSuccess, (state, action) => ({
    ...state,
    companyNums: action.companyNums,
  })),
  on(companyAboutActions.getCompanyInNumsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const advantagesReducer = createReducer(
  initialAdvantages,
  on(companyAboutActions.getAdvantages, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getAdvantagesSuccess, (state, action) => ({
    ...state,
    advantages: action.advantages,
  })),
  on(companyAboutActions.getAdvantagesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const carouselReducer = createReducer(
  initialCarousel,
  on(companyAboutActions.getCarousel, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getCarouselSuccess, (state, action) => ({
    ...state,
    carousel: action.carousel,
  })),
  on(companyAboutActions.getCarouselFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const specialOfferReducer = createReducer(
  initialSpecialOffer,
  on(companyAboutActions.getSpecialOffer, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getSpecialOfferSuccess, (state, action) => ({
    ...state,
    specialOffer: action.specialOffer,
  })),
  on(companyAboutActions.getSpecialOfferFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const contactNumsReducer = createReducer(
  initialContactNums,
  on(companyAboutActions.getContactNums, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getContactNumsSuccess, (state, action) => ({
    ...state,
    contactNums: action.contactNums,
  })),
  on(companyAboutActions.getContactNumsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const socialsReducer = createReducer(
  initialSocials,
  on(companyAboutActions.getSocials, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getSocialsSuccess, (state, action) => ({
    ...state,
    socials: action.socials,
  })),
  on(companyAboutActions.getSocialsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const developerCompanyReducer = createReducer(
  initialDeveloperCompany,
  on(companyAboutActions.getDeveloperCompanyInfo, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getDeveloperCompanyInfoSuccess, (state, action) => ({
    ...state,
    developerCompany: action.developerCompany,
  })),
  on(companyAboutActions.getDeveloperCompanyInfoFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export const govSitesReducer = createReducer(
  initialGovSites,
  on(companyAboutActions.getGovSites, (state) => ({
    ...state,
  })),
  on(companyAboutActions.getGovSitesSuccess, (state, action) => ({
    ...state,
    govSites: action.govSites,
  })),
  on(companyAboutActions.getGovSitesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
