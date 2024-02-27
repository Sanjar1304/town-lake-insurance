import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  public constructor(private http: HttpClient) {}

  public get<T>(
    api: string,
    url: string,
    params?: HttpParams | T,
    options?: T
  ): Observable<T> {
    const param = params ? `?${params.toString()}` : "";

    return this.http.get<T>(`${api}/${url}${param}`, options);
  }

  public post<T>(
    api: string,
    url: string,
    body: T | null,
    options?: T
  ): Observable<T> {
    return this.http.post<T>(`${api}/${url}`, body, options);
  }

  public put<T>(
    api: string,
    url: string,
    body?: T | null,
    options?: T
  ): Observable<T> {
    return this.http.put<T>(`${api}/${url}`, body, options);
  }

  public patch<T>(
    api: string,
    url: string,
    body: T | null,
    id?: string,
    options?: T
  ): Observable<T> {
    return this.http.patch<T>(`${api}/${url}${id}`, body, options);
  }

  public delete<T>(api: string, url: string, options?: T): Observable<T> {
    return this.http.delete<T>(`${api}/${url}`, options);
  }
}
