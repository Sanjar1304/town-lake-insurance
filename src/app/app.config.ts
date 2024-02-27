import { isDevMode } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideTransloco } from "@ngneat/transloco";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { LanguagesISO639$1FormatEnum } from "@core/enums/languages-iso639$1-format.enum";
import { LanguagesEnum } from "@core/enums/languages.enum";
import { TranslocoHttpLoader } from "@core/modules/transloco/transloco.http-loader";
import { ApplicationConfig } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { effects, reducers } from "./state";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers),
    provideEffects(...effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: [
          {
            id: LanguagesISO639$1FormatEnum.ENG,
            label: LanguagesEnum.ENG,
          },
          {
            id: LanguagesISO639$1FormatEnum.RUS,
            label: LanguagesEnum.RUS,
          },
          {
            id: LanguagesISO639$1FormatEnum.UZB,
            label: LanguagesEnum.UZB,
          },
        ],
        defaultLang: LanguagesISO639$1FormatEnum.RUS,
        fallbackLang: LanguagesISO639$1FormatEnum.RUS,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
