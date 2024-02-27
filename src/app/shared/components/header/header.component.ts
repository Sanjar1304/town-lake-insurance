import { Component, inject, OnInit } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { ActivatedRoute, Params, Router, RouterModule } from "@angular/router";

import { Observable } from "rxjs/internal/Observable";

import { LanguageService } from "@core/services/common/language.service";
import { LanguageStorageService } from "@core/services/root/storage.service";
import { LanguagesISO639$1FormatEnum } from "@core/enums/languages-iso639$1-format.enum";
import { EnumToArrayPipe } from "@shared/pipes/enum-to-array.pipe";
import { CompanyAboutService } from "@core/services/requests/company-about.service";
import { IMenuTab } from "@shared/components/header/components/tab/interfaces/tab.interface";
import { tabs } from "@shared/components/header/components/tab/constants/tabs";
import { TabComponent } from "@shared/components/header/components/tab/tab.component";
import { NavMenuInterface } from "@shared/components/header/interfaces/navMenu.interface";
import { navMenus } from "@shared/components/header/header-navs";
import { SubHeaderEnum } from "@shared/components/header/components/tab/enums/subHeaderTypes.enum";
import { UnsubscribeDirective } from "@core/directives/unsubscribe.directive";
import { NavMenuItem } from "@shared/components/header/interfaces/menu.interface";
import { ContentCategory } from "@shared/components/header/interfaces/menu.interface";
import { map } from "rxjs/operators";
import { IdentifierEnum } from "@shared/components/header/enums/logo.enum";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    NgOptimizedImage,
    EnumToArrayPipe,
    TabComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent extends UnsubscribeDirective implements OnInit {
  public logo$: Observable<{ icon: string; name: string }>;
  public tabs: IMenuTab[] = tabs;
  public currentNavs: NavMenuInterface[] | ContentCategory[] | null = null;
  public languages: LanguagesISO639$1FormatEnum[] = Object.values(
    LanguagesISO639$1FormatEnum
  );
  public activeLanguage: LanguagesISO639$1FormatEnum;
  public currentParam: SubHeaderEnum | null = SubHeaderEnum.Physicals;

  protected readonly navMenuItems: NavMenuItem[] = navMenus;
  protected readonly SubHeaderEnum = SubHeaderEnum;

  private readonly _companyAboutService = inject(CompanyAboutService);
  private readonly _router = inject(Router);
  private readonly _languageService = inject(LanguageService);
  private readonly _languageStorageService = inject(LanguageStorageService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.activeLanguage =
      this._languageStorageService.getItem() as LanguagesISO639$1FormatEnum;
    this.getQueryParam();
    this.logo$ = this.getLogo();
  }

  public getLogo(): Observable<{ icon: string; name: string }> {
    return this._companyAboutService.getLogos().pipe(
      map((logos) => {
        const headerLogo = logos.find(
          (logo) => logo.identifier === IdentifierEnum.Header
        );
        return headerLogo
          ? { icon: headerLogo.icon, name: headerLogo.name }
          : null;
      })
    );
  }

  public applyLanguage(language: string): void {
    if (language === this.activeLanguage) {
      return;
    }

    this._languageService.switchingLanguage(
      language as LanguagesISO639$1FormatEnum
    );
    this.activeLanguage = language as LanguagesISO639$1FormatEnum;
  }

  public defineNavs(): void {
    this.currentNavs = this.navMenuItems.find(
      (nav: {
        title: string;
        params: SubHeaderEnum;
        content: NavMenuInterface[];
      }) => {
        return nav.params === this.currentParam;
      }
    )?.content;
  }

  public navigateToTab(param: SubHeaderEnum): void {
    void this._router
      .navigate([], {
        queryParams: { type: param },
      })
      .then(() => {
        this.defineNavs();
      });
  }

  private getQueryParam(): void {
    this.currentParam = SubHeaderEnum.Physicals;
    this.defineNavs();

    this.subscribeTo = this._activatedRoute.queryParams.subscribe(
      (p: Params): void => {
        if (p["type"]) {
          this.currentParam = p["type"];
          this.defineNavs();
        }
      }
    );
  }
}
