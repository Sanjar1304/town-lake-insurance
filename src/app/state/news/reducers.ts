import { INewsState } from "../index";
import { createReducer, on } from "@ngrx/store";
import * as newsAction from "./actions";

export const initialNewsState: INewsState = {
  news: null,
  error: null,
};

export const newsReducer = createReducer(
  initialNewsState,
  on(newsAction.getNews, (state) => ({
    ...state,
  })),
  on(newsAction.getNewsSuccess, (state, action) => ({
    ...state,
    news: action.news,
  })),
  on(newsAction.getNewsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
