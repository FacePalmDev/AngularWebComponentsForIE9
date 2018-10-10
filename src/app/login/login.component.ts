import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {


  error: string;
  constructor() { }

  ngOnInit() {
  }

  passwordUpdated(password:string) {
    this.error = null;
    if (password.length > 0 && password.length <= 3) {
      this.error = "Password too short must be longer than 3 characters.";
    }
  }

}
