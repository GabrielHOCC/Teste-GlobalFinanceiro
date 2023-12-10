import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PotterCardComponent } from './potter-card/potter-card.component';
import { BuscarDadosApiService } from './buscar-dados-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  // ADICIONA O COMPONENT NO PROJETO
  imports: [CommonModule, RouterOutlet, PotterCardComponent, HttpClientModule],
  providers: [BuscarDadosApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // LISTA QUE POSSO ACESSAR NO HTML
  public listaDeDados: Array<{ nome: string; idade: string; foto: string; casa: string}> =
    [];
  public listaParaFiltrar: Array<{
    nome: string;
    idade: string;
    foto: string;
    casa: string
  }> = [];

  constructor(private searchService: BuscarDadosApiService) {}

  // FUNÇÃO DE CLIQUE
  public souUmaFuncaDeClique() {
    this.searchService.getAllCharacters().subscribe(
      (res) => {
        res.forEach((charact) => {
          console.log(charact.yearOfBirth);
          if (charact.yearOfBirth !== null && charact.image !== "") {
            this.listaDeDados.push({
              nome: charact.name,
              idade: charact.yearOfBirth,
              foto: charact.image,
              casa: charact.house,
            });
            this.listaParaFiltrar.push({
              nome: charact.name,
              idade: charact.yearOfBirth,
              foto: charact.image,
              casa: charact.house,
            });
          }
        });
      },
      (err) => err
    );
  }

  public filtrarPorNome() {
    const dados = this.listaParaFiltrar;
    this.listaDeDados = dados.sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });
  }

  public filtrarPorAnoNascimento() {
    const dados = this.listaParaFiltrar;
    this.listaDeDados = dados.sort((a, b) => {
      return Number.parseInt(a.idade) - Number.parseInt(b.idade);
    });
  }
}
