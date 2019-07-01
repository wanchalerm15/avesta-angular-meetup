import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-m1-item2',
  templateUrl: './m1-item2.component.html',
  styleUrls: ['./m1-item2.component.css']
})
export class M1Item2Component implements OnInit {

  @Output('onItem')
  public onItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(input: HTMLInputElement) {
    if (!input.value) return;
    this.onItem.emit(input.value);
    input.value = null;
  }
}
