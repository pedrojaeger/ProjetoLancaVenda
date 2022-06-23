import { Component, OnInit } from '@angular/core';
import { VendaService } from '../shared/venda.service';

@Component({
  selector: 'app-extrato-page',
  templateUrl: './extrato-page.component.html',
  styleUrls: ['./extrato-page.component.scss']
})
export class ExtratoPageComponent implements OnInit {

  vendas: any[] = []
  constructor(private vendaService: VendaService) {
  }

  ngOnInit(): void {
    this.vendas = this.vendaService.listarVendas();
  }

}
