import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-m1-item1',
  templateUrl: './m1-item1.component.html',
  styleUrls: ['./m1-item1.component.css']
})
export class M1Item1Component implements OnInit {

  public Items: string[] = [];

  constructor(public _appService: AppService) {
    this.Items = this._appService.Items;
  }

  ngOnInit() {
  }
}
