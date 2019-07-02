import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-m1-item1',
  templateUrl: './m1-item1.component.html',
  styleUrls: ['./m1-item1.component.css']
})
export class M1Item1Component implements OnInit {

  public Items: string[] = [];

  constructor(public _appService: AppService) {

    this._appService
      .getItems()
      .subscribe(result => {
        this.Items = result;
      });

  }

  ngOnInit() {
  }
}
