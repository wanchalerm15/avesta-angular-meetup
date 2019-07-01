import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version8';
  Items: string[] = ["Mango", "Papaya", "Banana", "Warter melon"];

  onAddItem(item: string) {
    this.Items.push(item);
  }

  onDelItem(index: number) {
    this.Items.splice(index, 1);
  }
}
