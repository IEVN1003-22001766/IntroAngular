import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IHeroe } from '../heroe';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-heroes-list',
  styleUrl: './heroes-list.less',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imagenWidth:number = 60;
  imagenMargin:number = 2;
  muestraImagen:boolean = true;
  listFilter:string = '';

  heroes:IHeroe[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'Goku',
      descripcion: 'Kame Kame Ha',
      race: 'Sayayin',
      ki: 60000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'Vegeta',
      descripcion: 'Kame Kame Ha',
      race: 'Duenio Ciber',
      ki: 54000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre: 'Piccolo',
      descripcion: 'Namekian',
      race: 'Sayayin',
      ki: 2000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/bulma.webp',
      nombre: 'Bulma',
      descripcion: 'Kame Kame Ha',
      race: 'Human',
      ki: 0
    },
  ]

  showImage():void{
    this.muestraImagen = !this.muestraImagen;
  }

}
