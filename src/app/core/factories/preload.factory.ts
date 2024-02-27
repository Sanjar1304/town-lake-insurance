import { Subscription, throwError } from "rxjs";
import { take } from "rxjs/operators";

import { AppConfigLoaderService } from "@core/loaders/app-config-loader.service";
import { IAppConfig } from "@core/interfaces/app-config.interface";

export function PreloadFactory(configService: AppConfigLoaderService) {
  return (): Subscription =>
    configService
      .initialize()
      .pipe(take(1))
      .subscribe({
        next: (appConfig: IAppConfig | null) => {
          if (appConfig) {
            // eslint-disable-next-line no-console
            console.log(`App's preload factory loaded app config`);

            return;
          }

          return throwError(
            () => new Error(`FATAL ERROR!!! App's preload factory failed`)
          ); //TODO. Stop app initialization.
        },
        error: () => {
          return throwError(
            () => new Error(`FATAL ERROR!!! App's preload factory failed`)
          ); //TODO. Stop app initialization.
        },
      });
}
