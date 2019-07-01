import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1Item1Component } from './m1-item1.component';

describe('M1Item1Component', () => {
  let component: M1Item1Component;
  let fixture: ComponentFixture<M1Item1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1Item1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
