
import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";

import { Observable } from "rxjs";

import { LanguagesType } from "@core/interfaces/languages.type";
import { LANGUAGE_KEY } from "@core/constants/storage-keys";

@Injectable()
export class AcceptLanguageInterceptor implements HttpInterceptor {
    private defaultLanguage: LanguagesType = 'ru'

    private get language(): LanguagesType {
        return localStorage.getItem(LANGUAGE_KEY) as LanguagesType || this.defaultLanguage;
    }

    public intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        request = request.clone({
            headers: request.headers.set("Accept-Language", this.language),
        });

        return next.handle(request);
    }
}
