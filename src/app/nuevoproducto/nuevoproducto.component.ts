import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrl: './nuevoproducto.component.css'
})
export class NuevoproductoComponent {

  nombre:string;
  precio:string;
  detalle:string;
  imagen:any;
  ImgSeleccionada:any;
  ImgMostrar:any;

  constructor(private servicios:ProductoService, private router:Router){}

  OtenerImagen(event:any){
    this.ImgSeleccionada = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.ImgMostrar = reader.result;
    reader.readAsDataURL(this.ImgSeleccionada);
  }

  agregarProducto(){
    const nuevoproducto={
      "nombre":this.nombre,
      "precio":this.precio,
      "detalle":this.detalle,
      "imagen":this.ImgMostrar
    }
    this.servicios.AgregarProducto(nuevoproducto).subscribe(
      res=>{alert("producto "+this.nombre+" Agregado")},
      error=>{alert("No se pudo agregar el producto "),error}
    )
    setTimeout(()=>{this.router.navigate(['/listadoproductos']);},2000);
  }

}
