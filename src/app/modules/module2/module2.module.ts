import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2Item1Component } from './components/m2-item1/m2-item1.component';
import { M2Item2Component } from './components/m2-item2/m2-item2.component';

@NgModule({
  declarations: [
    M2Item1Component,
    M2Item2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    M2Item1Component,
    M2Item2Component
  ]
})
export class Module2Module { }
