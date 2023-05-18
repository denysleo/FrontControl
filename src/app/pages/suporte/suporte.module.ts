import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SuporteRoutingModule } from './suporte-routing.module';
import { GlobalComponentsModule } from 'src/app/globalComponents/global-components.module';
import { SuporteComponent } from './suporte.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SuporteComponent],
  imports: [
    CommonModule,
    SuporteRoutingModule,
    GlobalComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SuporteModule { }
