import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/User/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user: User = {
    usuario: "",
    senha: "",
  }
  constructor(private Fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.Fb.group({
      usuario: ['', [Validators.required, Validators.minLength(1)]],
      senha: ['', [Validators.required, Validators.minLength(1)]],
    })
  }
  montaObjeto(): User {
    this.user.usuario = this.formLogin.get('usuario').value;
    this.user.senha = this.formLogin.get('senha').value;
    return this.user;
  }
  limparCampos(): void {
    this.formLogin.get('usuario').setValue('');
    this.formLogin.get('senha').setValue('');
  }
  buscaLogin(): void {
    this.montaObjeto();
    if (this.user.usuario == "teste" && this.user.senha == "123") {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Login Efetuado',
      })
      this.navegacao("home");
    }
    else if (this.user.usuario != "teste" && this.user.senha == "123") {
      Swal.fire({
        icon: 'error',
        title: 'Inválido',
        text: 'Nome de usuário não encontrado!',
      })

    }
    else if (this.user.usuario == "teste" && this.user.senha != "123") {
      Swal.fire({
        icon: 'error',
        title: 'Inválido',
        text: 'Senha incorreta',
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Inválido',
        text: 'Nome de usuário e senha incorretos',
      })
    }
  }
  navegacao(link: string) {
    this.router.navigate([link]);
  }
}
