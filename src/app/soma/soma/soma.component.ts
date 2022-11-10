import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent implements OnInit {
  private resultado: number = 0;

  constructor(private somaService: SomaService) {}

  ngOnInit(): void {}
  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);

    this.resultado = this.somaService.somar(n1, n2);
  }

  getResultado(): string {
    return String(this.resultado);
  }
}
