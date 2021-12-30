import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private userAuth: boolean = false;
  constructor(private router: Router) { }

  doLogin(login: string, password: string){
    if(login=='usuario@email.com' && password=='123'){
      this.userAuth = true;
      this.router.navigate(['/home']);
    } else{
      alert('Usuário ou Senha invalida')
      this.userAuth = false;
    }
  }

  isUserAuth(){
    return this.userAuth;
  }
}
