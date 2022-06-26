import { Venda } from './../model/venda.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { VendaComponent } from '../venda/venda.component';
import { VendaModule } from '../venda/venda.module';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() vendas: Venda[] = [];

  @Output() onEditarVenda: EventEmitter<number> = new EventEmitter();
  @Output() onExcluirVenda: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Vendas' + this.vendas);
  }

  editarVenda(idVendaNoArray: number, venda: Venda) {
    this.onEditarVenda.emit(idVendaNoArray);
  }

  excluirVenda(idVendaNoArray: number) {
    this.onExcluirVenda.emit(idVendaNoArray);
  }

  getValorTotal(): number {
    return this.vendas.reduce((accumulator, object) => {
      return accumulator + object.valor;
    }, 0);
  }
}
