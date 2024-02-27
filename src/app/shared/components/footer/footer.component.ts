import { Component, inject, OnInit } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Observable } from "rxjs/internal/Observable";
import { RouterLink } from "@angular/router";

import { SocialInterface } from "@shared/components/footer/interfaces/social.interface";
import { GovernmentalSite } from "@shared/components/footer/interfaces/govSite.interface";
import { footerNavMenus } from "@shared/components/footer/footer-navs";
import { ContactNumsInterface } from "@shared/components/footer/interfaces/contactNums.interface";
import { select, Store } from "@ngrx/store";
import {
  getContactNums,
  getDeveloperCompanyInfo,
  getGovSites,
  getSocials,
} from "../../../state/company-about/actions";
import {
  contactNumsSelector,
  developerCompanySelector,
  govSitesSelector,
  socialSelector,
} from "../../../state/company-about/selectors";
import { DevelopingCompanyInfo } from "@core/interfaces/developingCompanyInfo/developingCompanyInfo";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  public socials$: Observable<SocialInterface[]>;
  public contactNumbers$: Observable<ContactNumsInterface>;
  public developingCompInfo$: Observable<DevelopingCompanyInfo>;
  public govSites$: Observable<GovernmentalSite[]>;

  protected readonly footerNavMenus = footerNavMenus;

  private readonly _store = inject(Store);

  public ngOnInit(): void {
    this.defineData();
    this.launchDispatching();
  }

  public defineData(): void {
    this.contactNumbers$ = this._store.pipe(select(contactNumsSelector));
    this.socials$ = this._store.pipe(select(socialSelector));
    this.developingCompInfo$ = this._store.pipe(
      select(developerCompanySelector)
    );
    this.govSites$ = this._store.pipe(select(govSitesSelector));
  }

  public launchDispatching(): void {
    this._store.dispatch(getContactNums());
    this._store.dispatch(getSocials());
    this._store.dispatch(getDeveloperCompanyInfo());
    this._store.dispatch(getGovSites());
  }
}
