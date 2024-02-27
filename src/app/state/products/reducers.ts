import * as productActions from "./actions";
import { IProductsState } from "../index";
import { createReducer, on } from "@ngrx/store";

export const initialProductsState: IProductsState = {
  products: null,
  error: null,
};

export const productsReducer = createReducer(
  initialProductsState,
  on(productActions.getProducts, (state) => ({
    ...state,
  })),
  on(productActions.getProductsSuccess, (state, action) => ({
    ...state,
    products: action.products,
  })),
  on(productActions.getProductsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
