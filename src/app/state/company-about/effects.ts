import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, of } from "rxjs";
import * as CompanyAboutActions from "./actions";
import { CompanyAboutService } from "@core/services/requests/company-about.service";
import { PartnerInterface } from "@core/interfaces/company-about/partner.interface";
import { map } from "rxjs/operators";
import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";
import { ISpecialOfferInterface } from "@core/interfaces/company-about/specialOffer.interface";
import { ContactNumsInterface } from "@shared/components/footer/interfaces/contactNums.interface";
import { SocialInterface } from "@shared/components/footer/interfaces/social.interface";
import { DevelopingCompanyInfo } from "@core/interfaces/developingCompanyInfo/developingCompanyInfo";
import { GovernmentalSite } from "@shared/components/footer/interfaces/govSite.interface";

@Injectable()
export class companyAboutEffect {
  private _actions$ = inject(Actions);
  private _companyAboutService = inject(CompanyAboutService);

  private loadPartners$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CompanyAboutActions.getPartners),
      mergeMap(() => {
        return this._companyAboutService.getPartners().pipe(
          map((response: PartnerInterface[]) =>
            CompanyAboutActions.getPartnersSuccess({ partners: response })
          ),
          catchError((error) =>
            of(CompanyAboutActions.getPartnersFailure({ error: error.message }))
          )
        );
      })
    )
  );

  private loadCompanyInNums$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CompanyAboutActions.getCompanyInNums),
      mergeMap(() => {
        return this._companyAboutService.getCompanyInNums().pipe(
          map((response: CompanyInNumsInterface[]) =>
            CompanyAboutActions.getCompanyInNumsSuccess({
              companyNums: response,
            })
          ),
          catchError((error) =>
            of(
              CompanyAboutActions.getCompanyInNumsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );

  private loadAdvantages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CompanyAboutActions.getAdvantages),
      mergeMap(() => {
        return this._companyAboutService.getAdvantages().pipe(
          map((response: IAdvantageInterface[]) =>
            CompanyAboutActions.getAdvantagesSuccess({ advantages: response })
          ),
          catchError((error) =>
            of(
              CompanyAboutActions.getAdvantagesFailure({ error: error.message })
            )
          )
        );
      })
    )
  );

  private loadCarousel$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CompanyAboutActions.getCarousel),
      mergeMap(() => {
        return this._companyAboutService.getAdds().pipe(
          map((respose: AdvertisementInterface[]) =>
            CompanyAboutActions.getCarouselSuccess({ carousel: respose })
          ),
          catchError((error) =>
            of(CompanyAboutActions.getCarouselFailure({ error: error.message }))
          )
        );
      })
    )
  );

  private loadSpecialOffer$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CompanyAboutActions.getSpecialOffer),
      mergeMap(() => {
        return this._companyAboutService.getSpecialOffers().pipe(
          map((response: ISpecialOfferInterface[]) =>
            CompanyAboutActions.getSpecialOfferSuccess({
              specialOffer: response,
            })
          ),
          catchError((error) =>
            of(
              CompanyAboutActions.getSpecialOfferFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );

  private loadContactNums$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CompanyAboutActions.getContactNums),
      mergeMap(() => {
        return this._companyAboutService.getContactNums().pipe(
          map((response: ContactNumsInterface) => {
            return CompanyAboutActions.getContactNumsSuccess({
              contactNums: response,
            });
          }),
          catchError((error) =>
            of(
              CompanyAboutActions.getContactNumsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  private loadSocials$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CompanyAboutActions.getSocials),
      mergeMap(() => {
        return this._companyAboutService.getSocials().pipe(
          map((response: SocialInterface[]) => {
            return CompanyAboutActions.getSocialsSuccess({
              socials: response,
            });
          }),
          catchError((error) =>
            of(
              CompanyAboutActions.getSocialsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  private loadFincubeInfo$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CompanyAboutActions.getFincubeInfo),
      mergeMap(() => {
        return this._companyAboutService.getFincubeInfo().pipe(
          map((response: DevelopingCompanyInfo) => {
            return CompanyAboutActions.getFincubeInfoSuccess({
              fincube: response,
            });
          }),
          catchError((error) =>
            of(
              CompanyAboutActions.getFincubeInfoFailure({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  private loadGovSites$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CompanyAboutActions.getGovSites),
      mergeMap(() => {
        return this._companyAboutService.getGovSites().pipe(
          map((response: GovernmentalSite[]) => {
            return CompanyAboutActions.getGovSitesSuccess({
              govSites: response,
            });
          }),
          catchError((error) =>
            of(
              CompanyAboutActions.getGovSitesFailure({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });
}
