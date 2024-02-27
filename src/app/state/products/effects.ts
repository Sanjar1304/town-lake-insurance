import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProdcutsService } from "@core/services/requests/prodcuts.service";
import * as productActions from "./actions";
import { catchError, mergeMap, of } from "rxjs";
import { map } from "rxjs/operators";
import { IProduct } from "@core/interfaces/products/product.interface";

@Injectable()
export class productsEffect {
  private _actions$ = inject(Actions);
  private _productService = inject(ProdcutsService);

  private loadProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(productActions.getProducts),
      mergeMap(() => {
        return this._productService.getProducts().pipe(
          map((response: IProduct[]) =>
            productActions.getProductsSuccess({ products: response })
          ),
          catchError((error) =>
            of(productActions.getProductsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
