import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout()
    }
  }

}