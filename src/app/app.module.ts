import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './pages/menu/menu.component';
import { VistaListadoComponent } from './pages/vista-listado/vista-listado.component';
import { VistaNuevoComponent } from './pages/vista-nuevo/vista-nuevo.component';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { VistaComponent } from './pages/vista/vista.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VistaListadoComponent,
    VistaNuevoComponent,
    VistaDetalleComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
