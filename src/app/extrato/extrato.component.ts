import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Venda } from '../shared/model/venda.model';



@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {



  @Input()
  vendas: Venda[] = [];

  @Output()
  onExcluirVenda: EventEmitter<number> = new EventEmitter();

  @Output()
  onEditarVenda: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getValorTotal(): number {
    return this.vendas.reduce((accumulator, object) => {
      return accumulator + object.valor;
    }, 0);
  }

  editarVenda(idVendaNoArray: number, venda: any) {
    this.onEditarVenda.emit(idVendaNoArray);
  }

  excluirVenda(idVendaNoArray: number) {
    this.onExcluirVenda.emit(idVendaNoArray);
  }

}
