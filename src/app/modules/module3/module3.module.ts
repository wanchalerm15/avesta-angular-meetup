import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';
import { BehaviourSubjectItemComponent } from './components/behaviour-subject-item/behaviour-subject-item.component';

@NgModule({
  declarations: [
    SubjectItemComponent,
    BehaviourSubjectItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubjectItemComponent,
    BehaviourSubjectItemComponent
  ]
})
export class Module3Module { }
