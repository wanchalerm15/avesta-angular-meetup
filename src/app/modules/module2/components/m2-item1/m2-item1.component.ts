import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-m2-item1',
  templateUrl: './m2-item1.component.html',
  styleUrls: ['./m2-item1.component.css']
})
export class M2Item1Component implements OnInit {

  @Input('Items')
  public Items: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
