import { Injectable } from "@angular/core";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, LANGUAGE_KEY} from "@core/constants/storage-keys";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  public constructor(private _storageKey: string) {}

  public setItem(value: string): void {
    localStorage.setItem(this._storageKey, value);
  }

  public getItem(): string {
    return localStorage.getItem(this._storageKey);
  }

  public removeItem(): void {
    localStorage.removeItem(this._storageKey);
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}

@Injectable({
  providedIn: "root",
})
export class AccessTokenStorageService extends StorageService {
  public constructor() {
    super(ACCESS_TOKEN_KEY);
  }
}

@Injectable({
  providedIn: "root",
})
export class RefreshTokenStorageService extends StorageService {
  public constructor() {
    super(REFRESH_TOKEN_KEY);
  }
}

@Injectable({
  providedIn: "root",
})
export class LanguageStorageService extends StorageService {
  public constructor() {
    super(LANGUAGE_KEY);
  }
}

