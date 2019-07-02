import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectItemComponent } from './behaviour-subject-item.component';

describe('BehaviourSubjectItemComponent', () => {
  let component: BehaviourSubjectItemComponent;
  let fixture: ComponentFixture<BehaviourSubjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourSubjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSubjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
