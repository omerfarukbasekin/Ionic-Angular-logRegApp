import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  private formData: FormGroup;

  constructor(private router: Router) { }


  ngOnInit() {
    this.formData = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
      agreementBox: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.formData.value);
  }

  sentLoginPage(){
    console.log("sending to login page");
    this.router.navigate(["/login"]);
  }

   
}
