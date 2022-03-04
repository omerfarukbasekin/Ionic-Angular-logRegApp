import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from './my.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  private formData: FormGroup;

  constructor(private router: Router) {
   
/*     Try sent value between components/pages 
    constructor => , private myService: MyService
    this.myService.myMethod(this.data); */
    
   }

  ngOnInit() {
    this.formData = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
      agreementBox: new FormControl()
    });

    

  }
  data: String ="f";

  onSubmit(){
    console.log(this.formData.value);
/*     Try sent value between components/pages
    this.data = this.formData.value.mail; */
    this.router.navigate(["/login"]);
  }

  sentLoginPage(){
    console.log("sending to login page");
    this.router.navigate(["/login"]);
  }

   
}
