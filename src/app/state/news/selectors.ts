import { IAppState, INewsState } from "../index";
import { createSelector } from "@ngrx/store";

export const selectNews = (state: IAppState): INewsState => state.news;

export const newsSelector = createSelector(selectNews, (state) => state.news);
export const errorNewsSelector = createSelector(
  selectNews,
  (state) => state.error
);
