import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version8';
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .post('/api/account/items', {
        firstname: 'Hello',
        lastname: 'World'
      })
      .subscribe(res => {
        console.log(res);
      });
  }
}
