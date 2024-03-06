import { importProvidersFrom, isDevMode } from "@angular/core";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";

import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

import { ApplicationConfig } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

import { effects, reducers } from "./state";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideTransloco } from "@ngneat/transloco";
import { TranslocoConfig } from "@core/config/transloco.config";
import { TranslocoHttpLoader } from "@core/modules/transloco/transloco.http-loader";
import { Interceptors } from "@core/interceptors/@interceptors";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers),
    provideEffects(...effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: TranslocoConfig,
      loader: TranslocoHttpLoader,
    }),
    importProvidersFrom(HttpClientModule),
    Interceptors,
  ],
};
