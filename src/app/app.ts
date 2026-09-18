import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesList } from '../app/heroes/heroes-list/heroes-list';
import { OperaBas } from '../app/formulario/opera-bas/opera-bas';
import { Distancia2puntos } from '../app/formulario/distancia2puntos/distancia2puntos';
import { Figuras } from '../app/formulario/figuras/figuras';


@Component({
  imports: [RouterOutlet, HeroesList, OperaBas, Distancia2puntos, Figuras],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  nombre:string='Juan Esteban Gonzalez Lopez'
  
  duplicarnumero(a:number):number{
    return a*2
  }

  pelicula={
    titulo: 'Spider-Man',
    fecha_lanzamiento: new Date(),
    precio: 250
  }

}
