import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2Item1Component } from './components/m2-item1/m2-item1.component';
import { M2Item2Component } from './components/m2-item2/m2-item2.component';
import { Direct1Directive } from './directives/direct1.directive';
import { Direct2Directive } from './directives/direct2.directive';
import { Pipe1Pipe } from './pipes/pipe1.pipe';

@NgModule({
  declarations: [
    M2Item1Component,
    M2Item2Component,
    Direct1Directive,
    Direct2Directive,
    Pipe1Pipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    M2Item1Component,
    M2Item2Component,
    Direct2Directive
  ]
})
export class Module2Module { }
