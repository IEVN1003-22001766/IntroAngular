import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-figuras',
  styleUrl: './figuras.less',
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = ''
  num2: string = ''
  resultado: number = 0
  tipoOperacion: string = 'sumar'

  calcular(): void {
    if (this.tipoOperacion == 'cube') {
      this.cuadrado()
    }
    else if (this.tipoOperacion == 'rect') {
      this.rectangulo()
    }
    else if (this.tipoOperacion == 'poly') {
      this.poligono()
    }
    else if (this.tipoOperacion == 'tri') {
      this.triangulo()
    }
    else if (this.tipoOperacion == 'circ') {
      this.circulo()
    }
  }

  cuadrado(): void {
    this.resultado = parseInt(this.num1)**2
  }

  rectangulo(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2)
  }

  poligono(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2
  }

  triangulo(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2
  }

  circulo(): void {
    this.resultado = Math.PI * (parseInt(this.num1)) ** 2
  }
}
