import { Component , ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-agregar-reserva',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTimepickerModule,
    MatDatepickerModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agregar-reserva.component.html',
  styleUrl: './agregar-reserva.component.css'
})
export class AgregarReservaComponent {

  value: Date = new Date(); // Fecha y hora inicial

}
