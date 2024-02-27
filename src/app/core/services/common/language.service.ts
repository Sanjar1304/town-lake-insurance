import { Injectable } from "@angular/core";

import { TranslocoService } from "@ngneat/transloco";

import { LanguageStorageService } from "@core/services/root/storage.service";
import { LanguagesISO639$1FormatEnum } from "@core/enums/languages-iso639$1-format.enum";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  public constructor(
    private _translocoService: TranslocoService,
    private _languageStorageService: LanguageStorageService
  ) {}

  // Applying/Switching
  public switchingLanguage(language: LanguagesISO639$1FormatEnum): void {
    this._translocoService.setActiveLang(language);
    this._languageStorageService.setItem(language);
  }

  // Default
  public switchToDefaultLanguage(language: string): void {
    this.switchingLanguage(language as LanguagesISO639$1FormatEnum);
  }

  // Init
  public initLanguage(language: string): void {
    const currentLanguage: LanguagesISO639$1FormatEnum =
      this._languageStorageService.getItem() as LanguagesISO639$1FormatEnum;

    if (currentLanguage) {
      this._translocoService.setActiveLang(currentLanguage);

      return;
    }

    this._translocoService.setActiveLang(language);
    this._languageStorageService.setItem(
      language as LanguagesISO639$1FormatEnum
    );
  }
}
