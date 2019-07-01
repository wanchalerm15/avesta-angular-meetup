import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1Item1Component } from './components/m1-item1/m1-item1.component';
import { M1Item2Component } from './components/m1-item2/m1-item2.component';
import { Module2Module } from '../module2/module2.module';

@NgModule({
  declarations: [
    M1Item1Component,
    M1Item2Component
  ],
  imports: [
    CommonModule,
    Module2Module
  ],
  exports: [
    M1Item1Component,
    M1Item2Component
  ]
})
export class Module1Module { }
