import { inject, Injectable } from "@angular/core";

import { TranslocoService } from "@ngneat/transloco";

import { LanguageStorageService } from "@core/services/root/storage.service";
import { LanguagesIso6391FormatEnum } from "@core/enums/languages-iso639$1-format.enum";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private _translocoService = inject(TranslocoService);
  private _languageStorageService = inject(LanguageStorageService);

  public switchLanguage(language: LanguagesIso6391FormatEnum): void {
    this._translocoService.setActiveLang(language);
    this._languageStorageService.setItem(language);
  }

  public switchDefaultLanguage(language: LanguagesIso6391FormatEnum): void {
    this.switchLanguage(language as LanguagesIso6391FormatEnum);
  }

  public initLanguage(language: string): void {
    const currentLanguage: LanguagesIso6391FormatEnum =
      this._languageStorageService.getItem() as LanguagesIso6391FormatEnum;

    if (currentLanguage) {
      this._translocoService.setActiveLang(currentLanguage);

      return;
    }

    this._translocoService.setActiveLang(language);
    this._languageStorageService.setItem(
      language as LanguagesIso6391FormatEnum
    );
  }
}
