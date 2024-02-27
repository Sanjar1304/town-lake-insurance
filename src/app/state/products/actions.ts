import { createAction, props } from "@ngrx/store";
import { IProduct } from "@core/interfaces/products/product.interface";

export const getProducts = createAction("[Products] Get products info");

export const getProductsSuccess = createAction(
  "[Products] Get products success",
  props<{ products: IProduct[] }>()
);

export const getProductsFailure = createAction(
  "[Products] Get products failure",
  props<{ error: string }>()
);
