import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-m2-item2',
  templateUrl: './m2-item2.component.html',
  styleUrls: ['./m2-item2.component.css']
})
export class M2Item2Component implements OnInit {

  public model: string;
  public group: FormGroup;

  constructor(private fb: FormBuilder, private _appService: AppService) {
    this.group = this.fb.group({
      model: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngModelSubmit() {
    this._appService.addItem(this.model);
    this.model = null;
  }

  ngFormSubmit(form: NgForm) {
    if (form.invalid) return;
    this._appService.addItem(form.value['model']);
    form.reset();
  }

  formGroupSubmit() {
    if (this.group.invalid) return;
    this._appService.addItem(this.group.value['model']);
    this.group.reset();
  }

  isRequired(control: AbstractControl) {
    return control && control.touched && control.hasError('required');
  }
}
