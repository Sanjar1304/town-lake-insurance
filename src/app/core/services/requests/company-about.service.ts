import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs/internal/Observable";

import { RequestService } from "@core/services/requests/@request.service";
import { IAdvantageInterface } from "../../interfaces/company-about/adavantages.interface";
import { LogoInterface } from "@shared/components/header/interfaces/logo.interface";
import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";
import { PartnerInterface } from "../../interfaces/company-about/partner.interface";
import { ISpecialOfferInterface } from "../../interfaces/company-about/specialOffer.interface";
import { SocialInterface } from "@shared/components/footer/interfaces/social.interface";
import { GovernmentalSite } from "@shared/components/footer/interfaces/govSite.interface";
import { ContactNumsInterface } from "@shared/components/footer/interfaces/contactNums.interface";
import { DevelopingCompanyInfo } from "@core/interfaces/developingCompanyInfo/developingCompanyInfo";

@Injectable({
  providedIn: "root",
})
export class CompanyAboutService {
  private readonly _http = inject(RequestService);

  public getLogos(): Observable<LogoInterface[]> {
    return this._http.get<LogoInterface[]>("/assets/mock-data", "logos.json");
  }

  public getAdds(): Observable<AdvertisementInterface[]> {
    return this._http.get<AdvertisementInterface[]>(
      "/assets/mock-data",
      "ads.json"
    );
  }

  public getCompanyInNums(): Observable<CompanyInNumsInterface[]> {
    return this._http.get<CompanyInNumsInterface[]>(
      "/assets/mock-data",
      "company-in-nums.json"
    );
  }

  public getAdvantages(): Observable<IAdvantageInterface[]> {
    return this._http.get<IAdvantageInterface[]>(
      "/assets/mock-data",
      "advantages.json"
    );
  }

  public getSpecialOffers(): Observable<ISpecialOfferInterface[]> {
    return this._http.get<ISpecialOfferInterface[]>(
      "/assets/mock-data",
      "special-offer.json"
    );
  }

  public getPartners(): Observable<PartnerInterface[]> {
    return this._http.get<PartnerInterface[]>(
      "/assets/mock-data",
      "partners.json"
    );
  }

  public getContactNums(): Observable<ContactNumsInterface> {
    return this._http.get("/assets/mock-data", "phone-numbers.json");
  }

  public getSocials(): Observable<SocialInterface[]> {
    return this._http.get<SocialInterface[]>(
      "/assets/mock-data",
      "socials.json"
    );
  }

  public getGovSites(): Observable<GovernmentalSite[]> {
    return this._http.get<GovernmentalSite[]>(
      "/assets/mock-data",
      "governmental-sites.json"
    );
  }

  public getDeveloperCompanyInfo(): Observable<DevelopingCompanyInfo> {
    return this._http.get<DevelopingCompanyInfo>(
      "/assets/mock-data",
      "town-lake.json"
    );
  }
}
