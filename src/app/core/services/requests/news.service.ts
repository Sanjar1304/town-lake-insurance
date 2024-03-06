import { inject, Injectable } from "@angular/core";
import { RequestService } from "@core/services/requests/@request.service";
import { Observable } from "rxjs/internal/Observable";
import { INews } from "../../interfaces/news/news.interface";
import { ChangeLanguageService } from "@core/services/requests/change-language.service";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private _http = inject(RequestService);
  private _changeLanguageService = inject(ChangeLanguageService);

  public getNews(): Observable<INews[]> {
    return this._changeLanguageService.mapLanguageChanges(
      this._http.get<INews[]>("/assets/mock-data", "news.json")
    );
  }
}
