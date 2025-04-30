import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './homeComponent/home/home.component';
import { AgregarTaxistaComponent } from './modulo_taxistas/agregar-taxista/agregar-taxista.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
  
    // AgregarTaxistaComponent,
    CommonModule,
    // HomeComponent,
    // DashboardComponent,
    RouterModule,
    MatCardModule
    // RouterLink
     
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurantAppAngular';
}
