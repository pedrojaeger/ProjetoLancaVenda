import { VendaService } from './../service/venda.service';
import { Venda } from './../model/venda.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ExtratoComponent } from '../extrato/extrato.component';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss'],
})
export class VendaComponent implements OnInit {
  formVenda!: FormGroup;
  vendas: Venda[] = [];
  valorTotal = 0;
  updateIndex!: any;
  editavel: boolean = false;

  constructor(private fb: FormBuilder, private VendaService: VendaService) {}

  ngOnInit(): void {
    this.formVenda = this.fb.group(
      {
        cliente: ['', Validators.required],
        valor: ['', Validators.required],
        formaPagamento: [''],
      }
      // { updateOn: 'submit' } Problema ao lançar venda voltar mostrando erro de não preenchido,
      // ao resolver assim, preciso clicar duas vez para lançar a venda
    );

    this.vendas = this.VendaService.listarVendas();
  }

  lancaVenda() {
    if (this.formVenda.invalid) {
      return;
    }

    const venda = this.formVenda.value;
    this.valorTotal = this.valorTotal + venda.valor;

    this.adicionarData(venda);

    this.VendaService.adiocionarVenda(this.formVenda.value);

    this.formVenda.reset();
  }

  adicionarData(venda: any) {
    venda.data = new Date();
  }

  editarVenda(idVendaNoArray: number) {
    const venda = this.vendas[idVendaNoArray];

    this.formVenda.controls['cliente'].setValue(venda.cliente);
    this.formVenda.controls['valor'].setValue(venda.valor);
    this.formVenda.controls['formaPagamento'].setValue(venda.formaPagamento);
    this.updateIndex = idVendaNoArray;

    this.editavel = true;
  }

  excluirVenda(idVendaNoArray: number) {
    this.vendas.splice(idVendaNoArray, 1);
  }

  alterarVenda() {
    this.vendas[this.updateIndex].cliente = this.formVenda.value.cliente;
    this.vendas[this.updateIndex].valor = this.formVenda.value.valor;
    this.vendas[this.updateIndex].formaPagamento = this.formVenda.value.formaPagamento;

    this.formVenda.reset();
    this.editavel = false;
  }
}
