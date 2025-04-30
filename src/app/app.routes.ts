import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home/home.component';
import { AgregarTaxistaComponent } from './modulo_taxistas/agregar-taxista/agregar-taxista.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'agregar', component: AgregarTaxistaComponent},
    {path: 'dashboard', component: DashboardComponent}, // Cambia el componente según sea necesario
];
