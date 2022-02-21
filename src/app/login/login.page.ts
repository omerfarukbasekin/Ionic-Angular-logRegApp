import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  private formLogData: FormGroup;

  constructor(private router : Router) { }

  ngOnInit() {
    this.formLogData = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
      rememberBox: new FormControl()      
    });
  }

  onSubmit(){
    console.log(this.formLogData.value);
  }
  forgotPas(){
    console.log("new password function");
  }
  sentSignPage(){
    console.log("sending to sign up page");
    this.router.navigate(["/sign-up"]);
  }

}
