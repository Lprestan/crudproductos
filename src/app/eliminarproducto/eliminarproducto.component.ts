import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.component.html',
  styleUrl: './eliminarproducto.component.css'
})
export class EliminarproductoComponent {

  idprod:any

  constructor(private rutactiva:ActivatedRoute, private router:Router, private servicios:ProductoService){}

  ngOnInit(): void {
    this.idprod = this.rutactiva.snapshot.paramMap.get('id');
    this.eliminarProducto();
  }

  eliminarProducto(){
    this.servicios.ElimiarProducto(this.idprod).subscribe(
      res=>{alert("producto eliminado correctamente"),res},
      error=>{alert("No se pudo eliminar el producto"),error}
    )
    setTimeout(() => {
      this.router.navigate(['/listadoproductos']);
    }, 3000);
    
  }
  
}
