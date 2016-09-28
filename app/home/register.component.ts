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
  registered: boolean = false;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.sendUser(this.newUser).subscribe(
      data => {
        this.newUser = new User();
        this.registered = true;
      },
      error => console.log(error)
    );
  }

}