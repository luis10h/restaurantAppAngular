import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTaxistaComponent } from './agregar-taxista.component';

describe('AgregarTaxistaComponent', () => {
  let component: AgregarTaxistaComponent;
  let fixture: ComponentFixture<AgregarTaxistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTaxistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTaxistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
