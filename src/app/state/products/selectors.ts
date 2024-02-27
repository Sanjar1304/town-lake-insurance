import { IAppState, IProductsState } from "../index";
import { createSelector } from "@ngrx/store";
export const selectProduct = (state: IAppState): IProductsState =>
  state.products;
export const productSelector = createSelector(
  selectProduct,
  (state) => state.products
);
export const errorProductSelector = createSelector(
  selectProduct,
  (state) => state.products
);
