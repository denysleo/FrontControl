import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
formLogin:FormGroup;
user : User = {
  usuario :"",
  senha :"",
}
constructor(private Fb:FormBuilder){}

ngOnInit(): void {
 this.formLogin = this.Fb.group({
  usuario: ['', [Validators.required, Validators.minLength(1)]],
  senha: ['', [Validators.required, Validators.minLength(1)]],
 }) 
}
montaObjeto():void{
  this.user.usuario = this.formLogin.get('usuario').value;
  this.user.senha = this.formLogin.get('senha').value;
  console.log(this.user);
}
limparCampos():void{
  this.formLogin.get('usuario').setValue('');
  this.formLogin.get('senha').setValue('');
}
}
