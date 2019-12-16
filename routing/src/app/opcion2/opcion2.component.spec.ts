import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion2Component } from './opcion2.component';

describe('Opcion2Component', () => {
  let component: Opcion2Component;
  let fixture: ComponentFixture<Opcion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opcion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
