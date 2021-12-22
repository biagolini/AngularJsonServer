import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path:'home',
  loadChildren: () => import('./loja/loja.module').then(m => m.LojaModule)
    },
  {path:'**', component:PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
