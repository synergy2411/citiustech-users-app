import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  counter = 0;

  constructor(private httpClient : HttpClient){}

  getUserdata() : Observable<Array<User>>{
    return this.httpClient.get<{userdata : Array<User>}>('./assets/data/user-data.json')
      .pipe(
        tap(val => console.log("TAP ", val)),
        map(response => <User[]> response.userdata),
        catchError(err => {
          console.log("Error caught in Service ", err);
          return throwError(err);
          // Error handler code
          // if(err instanceof HttpErrorResponse){
          //   const { status, statusText, url } = err;
          //   switch (err.status) {
          //     case 401 :
          //     case 402 :
          //     case 403 :
          //     case 404 :
          //       console.log("Error caught in service ", err)
          //       return throwError(new Observable(observer => {
          //         observer.next(status);
          //         observer.next(statusText);
          //       }))
          //   }
          // }else{
          //   return throwError(err)
          // }
        })
      )

  }


}
