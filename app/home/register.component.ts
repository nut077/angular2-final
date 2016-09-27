import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { RegisterService } from "../service/register.service";

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.sendUser(this.newUser).subscribe(
      data => {
        this.newUser = new User();
      },
      error => console.log(error)
    );
  }

}