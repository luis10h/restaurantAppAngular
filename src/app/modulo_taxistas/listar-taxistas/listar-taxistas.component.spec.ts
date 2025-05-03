import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTaxistasComponent } from './listar-taxistas.component';

describe('ListarTaxistasComponent', () => {
  let component: ListarTaxistasComponent;
  let fixture: ComponentFixture<ListarTaxistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTaxistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTaxistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
