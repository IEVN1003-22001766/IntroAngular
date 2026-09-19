import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-triangulo',
  styleUrl: './triangulo.less',
  templateUrl: './triangulo.html',
})
export class Triangulo {
  x1: string = ''
  y1: string = ''
  x2: string = ''
  y2: string = ''
  x3: string = ''
  y3: string = ''
  resultado: number = 0

  calcular():void {
    let area = 0

    area = parseInt(this.x1) * (parseInt(this.y2) - parseInt(this.y3))
    area += parseInt(this.x2) * (parseInt(this.y3) - parseInt(this.y1))
    area += parseInt(this.x3) * (parseInt(this.y1) - parseInt(this.y2))
    if (area < 0) {
      area *= -1
    }
    area /= 2

    this.resultado = area
  }
}
