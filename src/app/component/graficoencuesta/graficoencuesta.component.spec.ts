import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoencuestaComponent } from './graficoencuesta.component';

describe('GraficoencuestaComponent', () => {
  let component: GraficoencuestaComponent;
  let fixture: ComponentFixture<GraficoencuestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoencuestaComponent]
    });
    fixture = TestBed.createComponent(GraficoencuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
