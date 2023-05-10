import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcadastroComponent } from './editcadastro.component';

const routes: Routes = [{
  path:'',
  component:EditcadastroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcadastroRoutingModule { }
