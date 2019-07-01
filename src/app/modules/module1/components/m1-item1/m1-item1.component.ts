import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-m1-item1',
  templateUrl: './m1-item1.component.html',
  styleUrls: ['./m1-item1.component.css']
})
export class M1Item1Component implements OnInit {

  @Input('Items')
  public Items: string[] = [];

  @Output('onItem')
  public onItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelItem(index: number) {
    this.onItem.emit(index);
  }
}
