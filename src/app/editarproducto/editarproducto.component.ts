import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrl: './editarproducto.component.css'
})
export class EditarproductoComponent {

  idproducto:any;
  nombre:string;
  precio:string;
  detalle:string;
  imagen:any;
  datos:any;

  constructor(private router:Router, private servicios:ProductoService, private rutactiva:ActivatedRoute){}

  ngOnInit(): void {
    this.idproducto = this.rutactiva.snapshot.paramMap.get('id');
    this.obtenerProducto();
  }

  obtenerProducto(){
    this.servicios.ObtenerProductos().subscribe((res:any)=>{
      this.datos = res.filter((producto: { id: any; }) =>producto.id===this.idproducto);
      this.nombre=this.datos[0].nombre;
      this.precio=this.datos[0].precio;
      this.detalle=this.datos[0].detalle;
      this.imagen=this.datos[0].imagen;
    })
  }

  ActualizarDatos(){
    const productoeditado = {
      "nombre":this.nombre,
      "precio":this.precio,
      "detalle":this.detalle,
      "imagen":this.imagen
    }
    this.servicios.EditarProducto(this.idproducto,productoeditado).subscribe(
      res=>{alert("Producto "+this.nombre+" Actualizado correctamente"),res},
      error=>{alert("El producto "+this.nombre+" no pudo ser actualizado"),error}
    )
    setTimeout(()=>{
      this.router.navigate(['/listadoproductos']);
    },2000);
  }


}
