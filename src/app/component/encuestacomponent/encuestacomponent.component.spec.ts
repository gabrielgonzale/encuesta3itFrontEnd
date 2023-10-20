import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestacomponentComponent } from './encuestacomponent.component';

describe('EncuestacomponentComponent', () => {
  let component: EncuestacomponentComponent;
  let fixture: ComponentFixture<EncuestacomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuestacomponentComponent]
    });
    fixture = TestBed.createComponent(EncuestacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
