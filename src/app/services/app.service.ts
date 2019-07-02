import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public Items: string[] = ["Mango", "Papaya", "Banana", "Warter melon"];

  constructor() { }

  addItem(item: string) {
    if (!item) return;
    this.Items.push(item);
  }

  delItem(index: number) {
    if (!index) return;
    this.Items.splice(index, 1);
  }
}
