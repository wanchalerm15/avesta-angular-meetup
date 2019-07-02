import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private Items: string[] = ["Mango", "Papaya", "Banana", "Warter melon"];

  public appSubject = new Subject<string>();
  public appBehaviorSubject = new BehaviorSubject<string>("Not event subject");

  constructor() { }

  getItems() {
    return of(this.Items);
  }

  addItem(item: string) {
    return new Observable(observ => {
      if (!item) return observ.error(new Error("The request is invalid"));
      this.Items.push(item);
      observ.next(item);
      observ.complete();
    });
  }

  delItem(index: number) {
    return new Observable(observ => {
      if (isNaN(index)) return observ.error(new Error("The request is invalid"));
      this.Items.splice(index, 1);
      observ.next();
      observ.complete();
    });
  }
}
