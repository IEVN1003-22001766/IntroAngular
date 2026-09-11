import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
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
