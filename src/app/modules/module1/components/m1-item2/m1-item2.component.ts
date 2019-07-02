import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-m1-item2',
  templateUrl: './m1-item2.component.html',
  styleUrls: ['./m1-item2.component.css']
})
export class M1Item2Component implements OnInit {

  constructor(public _appService: AppService) { }

  ngOnInit() {
  }

  onAddItem(input: HTMLInputElement) {
    this._appService.addItem(input.value);
    input.value = null;
  }
}
