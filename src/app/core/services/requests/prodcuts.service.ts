import { inject, Injectable } from "@angular/core";
import { RequestService } from "@core/services/requests/@request.service";
import { Observable } from "rxjs/internal/Observable";
import { IProduct } from "../../interfaces/products/product.interface";

import { ChangeLanguageService } from "@core/services/requests/change-language.service";

@Injectable({
  providedIn: "root",
})
export class ProdcutsService {
  private _http = inject(RequestService);
  private _changeLanguageService = inject(ChangeLanguageService);

  public getProducts(): Observable<IProduct[]> {
    return this._changeLanguageService.mapLanguageChanges(
      this._http.get<IProduct[]>("/assets/mock-data", "products.json")
    );
  }
}
