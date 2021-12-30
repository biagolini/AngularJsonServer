import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './../guard/auth-guard.service';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
    canActivate: [AuthGuardService],

   children: [
    {
    path: 'alimentos',
    component: AlimentosComponent,
    },
    {
      path: 'clientes',
      component: ClientesComponent,
    },
  ],
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojaRoutingModule { }
