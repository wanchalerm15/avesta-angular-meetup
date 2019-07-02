import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-m1-item1',
  templateUrl: './m1-item1.component.html',
  styleUrls: ['./m1-item1.component.css']
})
export class M1Item1Component implements OnInit {

  constructor(public _appService: AppService) {

    this._appService
      .getItems()
      .subscribe();

  }

  ngOnInit() {
  }

  onDelItem(index: number) {
    this._appService
      .delItem(index)
      .subscribe(() => {
        this._appService.appSubject.next(`Delete by button (${index})`);
        this._appService.appBehaviorSubject.next(`Delete by button (${index})`);
      }, (error: Error) => alert(error.message));
  }
}
