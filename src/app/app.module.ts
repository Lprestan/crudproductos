import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NuevoproductoComponent } from './nuevoproducto/nuevoproducto.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './eliminarproducto/eliminarproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoproductoComponent,
    NavegacionComponent,
    ListadoproductosComponent,
    EditarproductoComponent,
    EliminarproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
