import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public appSubject = new Subject<string>();
  public appBehaviorSubject = new BehaviorSubject<string>("Not event subject");

  private domain: string = 'http://localhost:3000/api/items';
  constructor(private _httpClient: HttpClient) { }

  getItems() {
    return this._httpClient.get<string[]>(this.domain);
  }

  addItem(item: string) {
    return this._httpClient.post<string>(this.domain, { model: item });
  }

  delItem(index: number) {
    return this._httpClient.delete(`${this.domain}/${index}`);
  }

  private catchError(response: HttpErrorResponse) {
    if (response.error && response.error.message)
      (<any>response).message = response.error.message;
    return throwError(response);
  }
}
