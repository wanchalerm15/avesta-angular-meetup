import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-m2-item2',
  templateUrl: './m2-item2.component.html',
  styleUrls: ['./m2-item2.component.css']
})
export class M2Item2Component implements OnInit {

  @Output('onSubmit')
  public onSubmit = new EventEmitter<string>();
  public model: string;
  public group: FormGroup;

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({
      model: []
    });
  }

  ngOnInit() {
  }

  ngModelSubmit() {
    this.onSubmit.emit(this.model);
    this.model = null;
  }

  ngFormSubmit(form: NgForm) {
    this.onSubmit.emit(form.value['model']);
    form.reset();
  }

  formGroupSubmit() {
    this.onSubmit.emit(this.group.value['model']);
    this.group.reset();
  }
}
