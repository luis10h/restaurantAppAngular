import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar-taxista',
  imports: [
    MatCardModule,
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule
  ],
  templateUrl: './agregar-taxista.component.html',
  styleUrl: './agregar-taxista.component.css'
})
export class AgregarTaxistaComponent {

}
