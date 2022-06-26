import { Venda } from './../model/venda.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  vendas: Venda[] = [];

  constructor() {}

  listarVendas(): Venda[] {
    return this.vendas;
  }

  adiocionarVenda(venda: Venda) {
    this.vendas.push(venda);
  }
}
