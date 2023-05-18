import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';
import { GlobalComponentsModule } from 'src/app/globalComponents/global-components.module';


@NgModule({
  declarations: [AjudaComponent],
  imports: [
    CommonModule,
    AjudaRoutingModule,
    GlobalComponentsModule,
  ],
  exports: [ 
    AjudaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AjudaModule { }
