import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Item2Component } from './m2-item2.component';

describe('M2Item2Component', () => {
  let component: M2Item2Component;
  let fixture: ComponentFixture<M2Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Item2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
