import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  pensamento = {
    id:'1',
    conteudo:'Aprendendo Angular',
    autoria:'Dev',
    modelo:'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarPensamento() {
    alert('criar novo')
  }
  cancelar(){
    alert('cancelar')

  }

}
