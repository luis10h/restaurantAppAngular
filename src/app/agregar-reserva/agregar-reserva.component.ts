import { AfterViewInit, ViewChild, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ReservaModalComponent } from './reserva-modal/reserva-modal.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';


import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface ReservationData {
  id: string;
  nombre: string;
  apellido: string;
  cedula: string;
  reserva: Date;
}

const APELLIDOS: string[] = [
  'González', 'Rodríguez', 'López', 'Martínez', 'Pérez', 'García', 'Ramírez', 'Torres',
];
const NOMBRES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore',
  'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia',
  'Thomas', 'Elizabeth',
];

@Component({
  selector: 'app-agregar-reserva',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    // MatDialogTitle,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,
    MatButtonModule,
    // ReservaModalComponent
    MatDialogModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agregar-reserva.component.html',
  styleUrls: ['./agregar-reserva.component.css'],
})
export class AgregarReservaComponent implements AfterViewInit {
  value: Date = new Date();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cedula', 'reserva'];
  dataSource: MatTableDataSource<ReservationData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    const reservations = Array.from({ length: 100 }, (_, k) => createNewReservation(k + 1));
    this.dataSource = new MatTableDataSource(reservations);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openReservaModal(): void {
    this.dialog.open(ReservaModalComponent, {
      // width: '400px',
      // height: '400px',
       });
  } 

  // openReservaModal() {
  //   const dialogRef = this.dialog.open(ReservaModalComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('El modal se cerró', result);
  //   });
  // }
}

function createNewReservation(id: number): ReservationData {
  const nombre = NOMBRES[Math.floor(Math.random() * NOMBRES.length)];
  const apellido = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)];
  const cedula = Math.floor(10000000 + Math.random() * 90000000).toString(); // Cédula aleatoria
  const reserva = new Date(); // Fecha aleatoria

  return {
    id: id.toString(),
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    reserva: reserva,
  };
}
