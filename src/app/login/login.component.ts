import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
constructor( private fb: FormBuilder,
  private AuthService: AuthService) { }

 // Criar formulario para login
  loginForm = this.fb.group({
    login:  ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin() {
    this.AuthService.doLogin(this.loginForm.value['login'],this.loginForm.value['password']);
  }
}

export class LoginEntity {
  login: string;
  password: string;
}

