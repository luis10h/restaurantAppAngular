import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComisionesComponent } from './agregar-comisiones.component';

describe('AgregarComisionesComponent', () => {
  let component: AgregarComisionesComponent;
  let fixture: ComponentFixture<AgregarComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarComisionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
