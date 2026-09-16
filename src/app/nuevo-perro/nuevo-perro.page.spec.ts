import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPerroPage } from './nuevo-perro.page';

describe('NuevoPerroPage', () => {
  let component: NuevoPerroPage;
  let fixture: ComponentFixture<NuevoPerroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPerroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
