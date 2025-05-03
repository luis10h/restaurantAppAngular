import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-agregar-taxista',
  imports: [
    MatCardModule,
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './agregar-taxista.component.html',
  styleUrl: './agregar-taxista.component.css'
})
export class AgregarTaxistaComponent {

}
