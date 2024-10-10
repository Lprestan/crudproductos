import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadoproductos',
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent {

  Productos:any

  constructor(private servicios:ProductoService, private router:Router){}

  ngOnInit(): void {
    this.servicios.ObtenerProductos().subscribe((res:any)=>{
      this.Productos=res;
    })
  }

}
