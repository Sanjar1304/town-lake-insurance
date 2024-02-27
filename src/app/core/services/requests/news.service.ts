import { inject, Injectable } from "@angular/core";
import { RequestService } from "@core/services/requests/@request.service";
import { Observable } from "rxjs/internal/Observable";
import { INews } from "../../interfaces/news/news.interface";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private _http = inject(RequestService);

  public getNews(): Observable<INews[]> {
    return this._http.get<INews[]>("/assets/mock-data", "news.json");
  }
}
