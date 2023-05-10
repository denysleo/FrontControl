import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'home',
    loadChildren:() => import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'cadastro',
    loadChildren:()=> import('./pages/cadastro/cadastro.module').then(m=>m.CadastroModule)
  },
  {
    path:'editar-cadastro',
    loadChildren:()=> import('./pages/editcadastro/editcadastro.module').then(m=>m.EditcadastroModule)
  },
  {
    path:'historico',
    loadChildren:()=> import('./pages/historico/historico.module').then(m=>m.HistoricoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
