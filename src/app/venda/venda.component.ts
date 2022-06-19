import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss'],
})
export class VendaComponent implements OnInit {

  formVenda!: FormGroup;
  vendas: any[] = [];
  valorTotal = 0;
  updateIndex!: any
  editavel: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formVenda = this.fb.group({
      cliente: ['', Validators.required],
      valor: ['', Validators.required],
      formaPagamento: [''],
    });
  }


  lancaVenda() {
    if (this.formVenda.invalid) {
      return;
    }

    const venda = this.formVenda.value;
    this.valorTotal = this.valorTotal + venda.valor;

    this.adicionarData(venda);

    this.vendas.push(this.formVenda.value);

    this.formVenda.reset();

  }

  adicionarData(venda: any) {
    venda.data = new Date();
  }

  editarVenda(idVendaNoArray: number, venda: any) {

    this.formVenda.controls['cliente'].setValue(venda.cliente);
    this.formVenda.controls['valor'].setValue(venda.valor);
    this.formVenda.controls['formaPagamento'].setValue(venda.formaPagamento);
    this.updateIndex = idVendaNoArray;


    this.editavel = true;

  }

  excluirVenda(idVendaNoArray: number) {

    this.valorTotal = this.valorTotal - this.vendas[idVendaNoArray].valor;

    this.vendas.splice(idVendaNoArray, 1);
  }

  alterarVenda() {
    this.valorTotal = this.valorTotal - this.vendas[this.updateIndex].valor;

    this.vendas[this.updateIndex].cliente = this.formVenda.value.cliente;
    this.vendas[this.updateIndex].valor = this.formVenda.value.valor;
    this.vendas[this.updateIndex].formaPagamento = this.formVenda.value.formaPagamento;

    this.valorTotal = this.valorTotal + this.formVenda.value.valor

    this.formVenda.reset();
    this.editavel = false

  }

}
