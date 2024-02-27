import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import { IAppConfig } from "@core/interfaces/app-config.interface";

@Injectable({
    providedIn:'root'
})
export class AppConfigStateService{
   private appConfig$: BehaviorSubject<IAppConfig | null> =
        new BehaviorSubject<IAppConfig | null>(null);

    public getAppConfig(): Observable<IAppConfig | null> {
        return this.appConfig$.asObservable();
    }

    public setAppConfig(config: IAppConfig): void {
        this.appConfig$.next(config);
    }
}
