import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  private model = {
    'username': '',
    'password': ''
  }
  private currentUsername;

  onSubmit() {
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        localStorage.setItem('token', data['_body']);
        this.loginService.sendToken(localStorage.getItem('token')).subscribe(
          data => {
            this.currentUsername = this.model.username;
            localStorage.setItem('currentUsername', this.model.username);
            this.model.username = '';
            this.model.password = '';
          }
        )
      }
    )
  }

}