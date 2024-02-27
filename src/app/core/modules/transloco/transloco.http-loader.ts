import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class TranslocoHttpLoader implements TranslocoLoader {
  private _http = inject(HttpClient);

  public getTranslation(lang: string): Observable<Translation> {
    return this._http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
