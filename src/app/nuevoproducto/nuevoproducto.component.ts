import { Component } from '@angular/core';

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

  constructor(){}

  OtenerImagen(event:any){
    this.ImgSeleccionada = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.ImgMostrar = reader.result;
    reader.readAsDataURL(this.ImgSeleccionada);
  }

}
