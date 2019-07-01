import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1Item2Component } from './m1-item2.component';

describe('M1Item2Component', () => {
  let component: M1Item2Component;
  let fixture: ComponentFixture<M1Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1Item2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
