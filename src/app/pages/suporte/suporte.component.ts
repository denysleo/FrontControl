import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Suporte } from 'src/app/classes/Suporte/suporte';
@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {
  suporte: Suporte = {
    assunto: '',
    sugestao: '',
  }
  formSuporte: FormGroup;
  constructor(private Fb: FormBuilder) { }
  ngOnInit(): void {
    this.formSuporte = this.Fb.group({
      assunto: [''],
      sugestao: [''],
    })
  }

  montaObjeto(): Suporte {
    this.suporte.assunto = this.formSuporte.get('assunto')!.value;
    this.suporte.sugestao = this.formSuporte.get('sugestao')!.value;
    console.log(this.suporte);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Sugestão enviada!',
    })
    return this.suporte;
  }

}
