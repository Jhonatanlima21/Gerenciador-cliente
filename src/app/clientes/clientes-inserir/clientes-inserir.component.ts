import { Component, EventEmitter, Output }
from
'@angular/core';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './clientes-inserir.component.html',
  styleUrls: ['./clientes-inserir.component.css']
})
export class ClienteInserirComponent {


    @Output() clienteAdicionado = new EventEmitter();

  nome:string;
  fone:string;
  email:string;

  onAdicionarCliente() {
    const cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
    }
    this.clienteAdicionado.emit(cliente);


  }
}


