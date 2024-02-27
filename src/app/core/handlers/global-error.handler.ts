import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

import { ErrorService } from "@core/services/root/error.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(private errorService: ErrorService) {}

  public handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      this.errorService.handleHttpError(error);
    } else {
      this.errorService.handleLocalError(error);
    }
    throw error;
  }
}
