import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoproductoComponent } from './nuevoproducto/nuevoproducto.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';

const routes: Routes = [
  {path:'',component:NuevoproductoComponent},
  {path:'nuevoproducto',component:NuevoproductoComponent},
  {path:'navegacion',component:NavegacionComponent},
  {path:'listadoproductos',component:ListadoproductosComponent},
  {path:'editarproducto/:id',component:EditarproductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
