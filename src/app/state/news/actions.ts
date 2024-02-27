import { createAction, props } from "@ngrx/store";
import { INews } from "@core/interfaces/news/news.interface";

export const getNews = createAction("[News] Get news info");
export const getNewsSuccess = createAction(
  "[News] Get news success",
  props<{ news: INews[] }>()
);
export const getNewsFailure = createAction(
  "[News] Get news failure",
  props<{ error: string }>()
);
