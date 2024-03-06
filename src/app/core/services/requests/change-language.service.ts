import { inject, Injectable } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { Observable } from "rxjs/internal/Observable";
import { LanguagesIso6391FormatEnum } from "@core/enums/languages-iso639$1-format.enum";
import { map, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ChangeLanguageService {
  private _translocoService = inject(TranslocoService);

  public getActiveLang$(): Observable<LanguagesIso6391FormatEnum> {
    return this._translocoService
      .langChanges$ as Observable<LanguagesIso6391FormatEnum>;
  }

  public mapLanguageChanges<T>(observable: Observable<T[]>): Observable<T[]> {
    return this.getActiveLang$().pipe(
      mergeMap((activeLang) => {
        return observable.pipe(
          map((values) => {
            return values.map((val) => {
              const mappedVal: Record<string, unknown> = {};
              for (const key in val) {
                if (Object.prototype.hasOwnProperty.call(val, key)) {
                  if (typeof val[key] === "object" && val[key][activeLang]) {
                    mappedVal[key] = val[key][activeLang];
                  } else {
                    mappedVal[key] = val[key];
                  }
                }
              }
              return mappedVal as T;
            });
          })
        );
      })
    );
  }
}
