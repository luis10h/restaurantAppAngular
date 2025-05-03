import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-agregar-comisiones',
  imports: [CommonModule,MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  MatIconModule,
  MatRadioModule, MatButtonModule, MatSelectModule],
  templateUrl: './agregar-comisiones.component.html',
  styleUrl: './agregar-comisiones.component.css'
})
export class AgregarComisionesComponent {
  public myVar!: string;
constructor(private dialogRef: MatDialogRef<AgregarComisionesComponent>) { }
modoFormulario: 'agregar' | 'editar' = 'agregar';
// comision_por_cliente: number = 5000;

  ngOnInit() {

    // this.sharedService.myVar$.subscribe(value => {
    //   this.myVar = value;
    this.currentView = this.myVar;
    // });
  }
  comision_por_cliente = 5;

  calcularComision(clientes: any): number {
    const num = Number(clientes);
    return isNaN(num) ? 0 : num * this.comision_por_cliente;
  }
  
  currentView: string = '';
  showView(view: string) {
    this.currentView = 'temp';

    // setTimeout(() => {
    this.currentView = view;

  }
  cerrarFormulario(): void {
    this.dialogRef.close();  // Cierra el diálogo
  }
}
