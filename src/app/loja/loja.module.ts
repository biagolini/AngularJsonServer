import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { LojaRoutingModule } from './loja-routing.module';
import { UpdateClientesComponent } from './update/update-clientes/update-clientes.component';
import { UpdateAlimentosComponent } from './update/update-alimentos/update-alimentos.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    AlimentosComponent,
    UpdateClientesComponent,
    UpdateAlimentosComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule,
    AppMaterialModule,
  ]
})
export class LojaModule { }
