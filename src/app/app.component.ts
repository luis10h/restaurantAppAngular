import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './homeComponent/home/home.component';
import { AgregarTaxistaComponent } from './modulo_taxistas/agregar-taxista/agregar-taxista.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HomeComponent
     
   ,
    AgregarTaxistaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurantAppAngular';
}
