import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home/home.component';
import { AgregarTaxistaComponent } from './modulo_taxistas/agregar-taxista/agregar-taxista.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarComisionesComponent } from './modulo_comisiones/agregar-comisiones/agregar-comisiones.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'agregar', component: AgregarTaxistaComponent},
    {path: 'agregar comisiones', component: AgregarComisionesComponent},
    {path: 'dashboard', component: DashboardComponent}, 
];
