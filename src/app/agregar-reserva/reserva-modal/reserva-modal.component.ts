import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-reserva-modal',
  imports: [MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  CommonModule
],
standalone: true,
  templateUrl: './reserva-modal.component.html',
  styleUrls: ['./reserva-modal.component.css'],
})
export class ReservaModalComponent {
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  fechaReserva: Date | null = null;
  horaReserva: Date | null = null;

  constructor(public dialogRef: MatDialogRef<ReservaModalComponent>) {}

  // Este método se ejecuta al hacer clic en el botón "Guardar"
  guardarReserva() {
    if (this.nombre && this.apellido && this.cedula && this.fechaReserva && this.horaReserva) {
      const reserva = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        fechaReserva: this.fechaReserva,
        horaReserva: this.horaReserva,
      };

      console.log('Reserva guardada:', reserva);  // Aquí podrías realizar la lógica para guardar la reserva

      this.dialogRef.close(reserva); // Cierra el modal y pasa la información de la reserva
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
}
