import { inject, Injectable } from "@angular/core";
import { RequestService } from "@core/services/requests/@request.service";
import { Observable } from "rxjs/internal/Observable";
import { IProduct } from "../../interfaces/products/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProdcutsService {
  private _http = inject(RequestService);

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>("/assets/mock-data", "products.json");
  }
}
