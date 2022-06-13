import { Component, Input, OnInit } from '@angular/core';
import { VendaComponent } from '../venda/venda.component';
import { VendaModule } from '../venda/venda.module';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
