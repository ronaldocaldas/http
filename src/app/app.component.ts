import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cidades = [];

  constructor(private cidadeService: CidadeService) { }
  ngOnInit(): void {
    this.consultar();
  }
  consultar() {
    this.cidadeService.consultar()
      .then(dados => this.cidades = dados);
  }
  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
      .then(cidade => {
        this.consultar();
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert(`Cidade ${id} excluida com sucesso `);
        this.consultar();
      });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(() => {
        alert(`Cidade ${cidade.nome} atualizada com sucesso!`);
        this.consultar();
      }).catch(erro => {
        alert(erro);
      });
  }
}
