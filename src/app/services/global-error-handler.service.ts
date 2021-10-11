import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  public subject = new Subject();

  constructor() { }
  handleError(error: HttpErrorResponse): void {
    // console.log("Global Error Handler works", error.message)
    switch (error.status) {
      case 401:
      case 402:
      case 403:
      case 404:
        this.subject.next(error.statusText)
        break;

      default:
        this.subject.next("Something else happened")
        break;
    }
  }
}
