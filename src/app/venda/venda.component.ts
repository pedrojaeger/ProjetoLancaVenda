import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Venda } from '../shared/model/venda.model';
import { VendaService } from '../shared/venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss'],
})
export class VendaComponent implements OnInit {

  formVenda!: FormGroup;
  vendas: Venda[] = [];
  valorTotal = 0;
  updateIndex!: any
  editavel: boolean = false;

  constructor(private fb: FormBuilder,
    private vendaService: VendaService) { }

  ngOnInit(): void {
    this.formVenda = this.fb.group({
      cliente: ['', Validators.required],
      valor: ['', Validators.required],
      formaPagamento: [''],
    });

    this.carregarVendas();
  }

  carregarVendas() {
    this.vendaService.listarVendas().subscribe(vendas => {
      this.vendas = vendas
    });
  }

  lancaVenda() {
    if (this.formVenda.invalid) {
      return;
    }

    const venda = this.formVenda.value;
    this.valorTotal = this.valorTotal + venda.valor;

    this.adicionarData(venda);

    this.vendaService.adicionarVenda(this.formVenda.value).subscribe((result => {
      this.carregarVendas();
      this.formVenda.reset();
    }));
  }

  adicionarData(venda: any) {
    venda.data = new Date();
  }

  editarVenda(idVendaNoArray: number) {
    const venda = { ...this.vendas[idVendaNoArray] };

    this.formVenda.controls['cliente'].setValue(venda.cliente);
    this.formVenda.controls['valor'].setValue(venda.valor);
    this.formVenda.controls['formaPagamento'].setValue(venda.formaPagamento);
    this.updateIndex = idVendaNoArray;

    this.editavel = true;
  }

  excluirVenda(idVendaNoArray: number) {
    const id = this.vendas[idVendaNoArray].id || '';
    this.vendaService.excluirVenda(id).subscribe((result => {
      this.carregarVendas();
    }));
  }

  alterarVenda() {
    const venda = { ...this.vendas[this.updateIndex], ...this.formVenda.getRawValue() };

    const id = venda.id || '';

    this.vendaService.alterarVenda(id, venda).subscribe((result => {
      this.carregarVendas();
      this.formVenda.reset();
      this.editavel = false
    }));
  }

}
