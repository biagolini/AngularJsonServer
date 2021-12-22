import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojaRoutingModule } from './loja-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AlimentosComponent } from './alimentos/alimentos.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    AlimentosComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule
  ]
})
export class LojaModule { }
