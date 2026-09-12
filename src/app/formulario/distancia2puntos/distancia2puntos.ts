import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-distancia2puntos',
  styleUrl: './distancia2puntos.less',
  templateUrl: './distancia2puntos.html',
})
export class Distancia2puntos {
  x1: string = ''
  y1: string = ''
  x2: string = ''
  y2: string = ''
  distancia: number = 0

  calcular(): void {
    const res = Math.sqrt((parseInt(this.x2) - parseInt(this.x1))**2 + (parseInt(this.y2) - parseInt(this.y1))**2)
    this.distancia = res
  }
}
