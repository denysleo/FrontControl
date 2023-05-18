import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { GlobalComponentsModule } from 'src/app/globalComponents/global-components.module';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    GlobalComponentsModule
  ]
})
export class RegistroModule { }
