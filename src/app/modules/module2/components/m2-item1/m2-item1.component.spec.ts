import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Item1Component } from './m2-item1.component';

describe('M2Item1Component', () => {
  let component: M2Item1Component;
  let fixture: ComponentFixture<M2Item1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Item1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
