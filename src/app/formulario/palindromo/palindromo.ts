import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-palindromo',
  styleUrl: './palindromo.less',
  templateUrl: './palindromo.html',
})

export class Palindromo {
  texto: string = ''
  resultado: string = ''
  nVocales: number = 0
  nConsonantes: number = 0
  esPalindromo: string = '';

  vocales: string[] = ['a', 'e', 'i', 'o', 'u']

  calcular(): void {
    let contador = 0;
    this.resultado = this.texto;
    this.nVocales = 0
    this.nConsonantes = 0

    let textolimpio = ''
    for (let caracter of this.texto) {
      if (caracter != ' ') {
        textolimpio += caracter
      }
    }

    for (let caracter of textolimpio) {
      contador++;

      for (let vocal of this.vocales) {
        if (caracter == vocal) {
          this.nVocales++;
        }
      }

    }

    this.nConsonantes = contador - this.nVocales;

    let textoinverso = ''
    for (let caracter of textolimpio) {
      textoinverso = caracter + textoinverso
    }

    if (textolimpio == textoinverso) {
      this.esPalindromo = 'Si'
    }
    else {
      this.esPalindromo = 'No'
    }

  }
}