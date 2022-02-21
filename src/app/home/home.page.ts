import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  sentLoginPage(){
    //code for loggin is user goes here
    this.router.navigate(["/login"]);
    console.log("sending to login page");
  }
  sentSignPage(){
    this.router.navigate(["/sign-up"]);
    console.log("sending to sign up page");
  }


}
