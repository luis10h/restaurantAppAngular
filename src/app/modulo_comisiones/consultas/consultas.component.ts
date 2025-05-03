import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgregarComisionesComponent } from '../agregar-comisiones/agregar-comisiones.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-consultas',
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  MatIconModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(AgregarComisionesComponent, {
      height: '550px',
    });
  }
}
