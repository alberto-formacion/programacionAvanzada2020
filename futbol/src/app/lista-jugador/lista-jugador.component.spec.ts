import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJugadorComponent } from './lista-jugador.component';

describe('ListaJugadorComponent', () => {
  let component: ListaJugadorComponent;
  let fixture: ComponentFixture<ListaJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
