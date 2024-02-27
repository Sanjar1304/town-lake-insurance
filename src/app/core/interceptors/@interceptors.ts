import { ClassProvider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AcceptLanguageInterceptor } from "@core/interceptors/accept-language.interceptor";

export const Interceptors: ClassProvider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AcceptLanguageInterceptor,
        multi: true,
    },
];
