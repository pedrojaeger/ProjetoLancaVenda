import { Injectable } from '@angular/core';
import { Venda } from './model/venda.model';

@Injectable({
    providedIn: 'root',
})
export class VendaService {

    vendas: Venda[] = [];

    constructor() { }

    adicionarVenda(venda: Venda) {
        this.vendas.push(venda);
    }

    listarVendas(): Venda[] {
        return this.vendas;
    }

    excluirVenda() {

    }

    editarVenda(venda: Venda) {

    }
}