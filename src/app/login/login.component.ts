import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
constructor( private fb: FormBuilder) { }

 // Criar formulario para login
  loginForm = this.fb.group({
    login:  ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin() {
    console.log(this.loginForm.value)
  }
}
""
