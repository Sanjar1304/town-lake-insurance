import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
  TranslocoService,
} from "@ngneat/transloco";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { TranslocoHttpLoader } from "@core/modules/transloco/transloco.http-loader";
import { TranslocoConfig } from "@core/config/transloco.config";

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig(TranslocoConfig),
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
    {
      provide: APP_INITIALIZER,
      deps: [TranslocoService],
      useFactory:
        (translocoService: TranslocoService): unknown =>
        (): Promise<Translation> => {
          const defaultLang = translocoService.getDefaultLang();
          translocoService.setActiveLang(defaultLang);
          return translocoService.load(defaultLang).toPromise();
        },
      multi: true,
    },
  ],
})
export class TranslocoCoreModule {}
