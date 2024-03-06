import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";

import { first, map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

import { IAppConfig } from "@core/interfaces/app-config.interface";
import { DEFAULT_APP_CONFIG_PATH } from "@core/config/app.config";

import { AppConfigStateService } from "../services/state/app-config-state.service";

@Injectable({
  providedIn: "root",
})
export class AppConfigLoaderService {
  private _injector: Injector;

  public constructor(
    _injector: Injector,
    private _appConfigStateService: AppConfigStateService
  ) {
    this._injector = _injector;
  }

  public initialize(): Observable<IAppConfig | null> {
    const httpClient: HttpClient = this._injector.get(HttpClient);

    return httpClient.get<IAppConfig>(DEFAULT_APP_CONFIG_PATH).pipe(
      first(),
      map((config: IAppConfig) => {
        if (config) {
          this._appConfigStateService.setAppConfig(config);
        }
        return config;
      })
    );
  }

  public applyConfig(): void {
    return;
  }
}
