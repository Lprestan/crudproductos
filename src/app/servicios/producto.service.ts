import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string='http://localhost:3000/Productos';

  constructor(private http:HttpClient) { }

  ObtenerProductos(){
    return this.http.get(this.url);
  }

  AgregarProducto(nuevoproducto:any){
    return this.http.post(this.url,nuevoproducto);
  }

  ElimiarProducto(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  EditarProducto(id:any,productoeditado:any){
    return this.http.patch(`${this.url}/${id}`,productoeditado);
  }

}
