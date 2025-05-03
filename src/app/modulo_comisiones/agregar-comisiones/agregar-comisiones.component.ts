import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-agregar-comisiones',
  imports: [MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  MatIconModule],
  templateUrl: './agregar-comisiones.component.html',
  styleUrl: './agregar-comisiones.component.css'
})
export class AgregarComisionesComponent {
  public myVar!: string;

  ngOnInit() {

    // this.sharedService.myVar$.subscribe(value => {
    //   this.myVar = value;
    this.currentView = this.myVar;
    // });
  }

  currentView: string = '';
  showView(view: string) {
    this.currentView = 'temp';

    // setTimeout(() => {
    this.currentView = view;

    //   // Lógica para mostrar/ocultar el botón según la vista actual
    //   if (view === 'dashboard') {
    //     this.buttonVisibilityService.showButton();  // Muestra el botón en la vista Dashboard
    //   } else {
    //     this.buttonVisibilityService.hideButton();  // Oculta el botón en otras vistas
    //   }
    // }, 0);

  }
}
