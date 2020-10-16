import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes = [
     {
    nome: 'José',
    fone: '11223344',
    email: 'jose@outlook.com',
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
