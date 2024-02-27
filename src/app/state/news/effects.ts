import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NewsService } from "@core/services/requests/news.service";
import * as NewsAction from "./actions";
import { catchError, mergeMap, of } from "rxjs";
import { map } from "rxjs/operators";
import { INews } from "@core/interfaces/news/news.interface";

@Injectable()
export class newsEffect {
  private _actions$ = inject(Actions);
  private _newsService = inject(NewsService);

  private loadNews$ = createEffect(() =>
    this._actions$.pipe(
      ofType(NewsAction.getNews),
      mergeMap(() => {
        return this._newsService.getNews().pipe(
          map((response: INews[]) =>
            NewsAction.getNewsSuccess({ news: response })
          ),
          catchError((error) =>
            of(NewsAction.getNewsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
