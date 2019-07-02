import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
      model: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngModelSubmit() {
    this.onSubmit.emit(this.model);
    this.model = null;
  }

  ngFormSubmit(form: NgForm) {
    if (form.invalid) return;
    this.onSubmit.emit(form.value['model']);
    form.reset();
  }

  formGroupSubmit() {
    if (this.group.invalid) return;
    this.onSubmit.emit(this.group.value['model']);
    this.group.reset();
  }

  isRequired(control: AbstractControl) {
    return control && control.touched && control.hasError('required');
  }
}
