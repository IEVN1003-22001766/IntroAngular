import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-opera-bas',
  styleUrl: './opera-bas.less',
  templateUrl: './opera-bas.html',
})
export class OperaBas {
  num1: string = ''
  num2: string = ''
  resultado: number = 0
  tipoOperacion: string = 'sumar'

  calcular():void {
    if (this.tipoOperacion == 'sumar') {
      this.sumar()
    }
    else if (this.tipoOperacion == 'restar') {
      this.restar()
    }
    else if (this.tipoOperacion == 'multi') {
      this.multi()
    }
    else if (this.tipoOperacion == 'dividir') {
      this.dividir()
    }
  }

  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2)
  }

  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2)
  }

  multi(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2)
  }

  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2)
  }
}
