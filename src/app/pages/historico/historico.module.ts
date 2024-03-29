import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { GlobalComponentsModule } from 'src/app/globalComponents/global-components.module';
import { HistoricoComponent } from './historico.component';


@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    GlobalComponentsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HistoricoModule { }
