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
  @Output() aoLancarVenda = new EventEmitter<any>();

  formVenda!: FormGroup;
  vendas: any[] = [];
  valorTotal = 0;
  updateIndex!: any

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formVenda = this.fb.group({
      cliente: ['', Validators.required],
      valor: [''],
      formaPagamento: [''],
    });
  }

  lancaVenda() {
    const venda = this.formVenda.value;
    this.valorTotal = this.valorTotal + venda.valor;

    this.adicionarData(venda);
    console.log(venda.data);

    this.vendas.push(this.formVenda.value);

    this.formVenda.reset();

    this.aoLancarVenda.emit({ venda });
  }

  adicionarData(venda: any) {
    venda.data = new Date();
  }

  editarVenda(idVendaNoArray: number, venda: any) {
    alert('editar');
    console.log(idVendaNoArray);
    console.log(venda);
    console.log(venda.cliente);

    this.formVenda.controls['cliente'].setValue(venda.cliente);
    this.formVenda.controls['valor'].setValue(venda.valor);
    this.formVenda.controls['formaPagamento'].setValue(venda.formaPagamento);
    this.updateIndex = idVendaNoArray;
    //já está jogando na tela, falta fazer com que ele edite e não adicione outra venda
    //Na verdade ja me liguei, tem que fazer um NGIF pra chamar uma funcao de UPDATE e não a lançar venda
  }

  excluirVenda(idVendaNoArray: number) {
    this.vendas.splice(idVendaNoArray, 1);
  }
}
