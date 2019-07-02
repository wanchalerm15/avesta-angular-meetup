import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-m2-item1',
  templateUrl: './m2-item1.component.html',
  styleUrls: ['./m2-item1.component.css']
})
export class M2Item1Component implements OnInit {

  constructor(public _appService: AppService) {

    this._appService
      .getItems()
      .subscribe();

  }

  ngOnInit() {
  }

}
