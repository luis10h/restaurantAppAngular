
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AgregarComisionesComponent } from "../modulo_comisiones/agregar-comisiones/agregar-comisiones.component";
import { AgregarTaxistaComponent } from "../modulo_taxistas/agregar-taxista/agregar-taxista.component";
// import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu';
// import { DatosBasicosComponent } from '../datos-basicos/datos-basicos.component';
// import { DatosInfraestructuraComponent } from '../datos-infraestructura/datos-infraestructura.component';
// import { MateriaPrimaComponent } from '../materia-prima/materia-prima.component';
// import { CostosOperativosComponent } from '../costos-operativos/costos-operativos.component';
// import { CostosComponent } from '../administracion/costos/costos.component';
// import { InventarioComponent } from '../administracion/inventario/inventario.component';
// import { AggCostoComponent } from '../administracion/agg-costo/agg-costo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { ProveedoresComponent } from '../administracion/proveedores/proveedores.component';
// import { SedesComponent } from '../administracion/sedes/sedes.component';
// import { MuestreoComponent } from '../produccion/muestreo/muestreo.component';
// import { MortalidaComponent } from '../produccion/mortalida/mortalida.component';
// import { MenuProduComponent } from '../menu-produ/menu-produ.component';
// import { SedeMenuComponent } from '../sede-menu/sede-menu.component';
// import { AggLoteComponent } from '../agg-lote/agg-lote.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { AdminUsuarioComponent } from '../usuarios/admin-usuario/admin-usuario.component';
// import { MatBadgeModule } from '@angular/material/badge';
import Swal from 'sweetalert2';
import { ConsultasComponent } from "../modulo_comisiones/consultas/consultas.component";
// import { ButtonVisibilityService } from '../button-visibility.service'; // Importa el servicio
import { AgregarReservaComponent } from '../agregar-reserva/agregar-reserva.component';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, AgregarComisionesComponent, AgregarTaxistaComponent,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatMenuModule,
    RouterModule,
    AgregarReservaComponent,
 
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule, ConsultasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  // public buttonVisibilityService = inject(ButtonVisibilityService); // Inyección del servicio

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  public myVar!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }


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

  elSidebarVisible: boolean = true; // Estado inicial del sidebar
  toggleSidebar() {
    this.elSidebarVisible = !this.elSidebarVisible;
  }

  usuariosVisible: boolean = true;
  administracionVisible: boolean = false;
  toggleUsuarios() {
    this.usuariosVisible = !this.usuariosVisible;
  }

  toggleAdmin() {
    this.administracionVisible = !this.administracionVisible;
  }

  ocultar: boolean = false;

  get ocultarEnDashboard() {
    if (this.currentView === 'dashboard') {
      return (this.ocultar = true);
    } else {
      return (this.ocultar = false);
    }
  }

  enDesarrolloAlerta() {
    Swal.fire({
      icon: 'info',
      title: 'En Desarrollo',
      text: 'Vista o Funcionalidad en desarrollo.',
      confirmButtonColor: '#3085d6',
    });
  }
}
