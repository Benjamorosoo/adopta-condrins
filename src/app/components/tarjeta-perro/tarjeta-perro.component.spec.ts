import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPerroComponent } from './tarjeta-perro.component';

describe('TarjetaPerroComponent', () => {
  let component: TarjetaPerroComponent;
  let fixture: ComponentFixture<TarjetaPerroComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
