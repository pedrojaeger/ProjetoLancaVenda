import { VendaComponent } from './venda/venda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoPageComponent } from './extrato-page/extrato-page.component';

const routes: Routes = [
  { path: "", component: VendaComponent },
  { path: "listar-venda", component: ExtratoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
