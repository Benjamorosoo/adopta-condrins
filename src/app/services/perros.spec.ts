import { TestBed } from '@angular/core/testing';
import { Perros } from './perros';

describe('Perros', () => {
  let service: Perros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Perros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
