import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MyService } from '../sign-up/my.service';
import { toastController } from '@ionic/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  private formLogData: FormGroup;
  /* public data = {}; */

  constructor(private router : Router) {
/*     
      CONSTRUCTOR => ,private myService: MyService
      this.myService.myMethod$.subscribe((data) => {
      this.data = data; // And he have data here too!
  }
); */
   }

  ngOnInit() {
    this.formLogData = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
      rememberBox : new FormControl()      
    }); 
  }
   Cmail:String = 'innova@mail.com';
   Cpas:String = '123456';

  onSubmit(){
    if(this.formLogData.value.mail == this.Cmail){
      if(this.formLogData.value.password == this.Cpas){
        this.router.navigate(["/confirmation"]);
      }
      else{
        console.log("Your password is not match!");
        this.handleWrongPass();
      }
    }
    else{
      console.log("E-mail adress is wrong!");
      this.handleWrongMail();
    }
    console.log(this.formLogData.value);
  }

  forgotPas(){
    console.log("new password function");
  }
  sentSignPage(){
    console.log("sending to sign up page");
    this.router.navigate(["/sign-up"]);

  }


  async handleWrongMail() {
    const toast = await toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'E-mail is not correct!',
      keyboardClose: true
    });

    await toast.present();
  }
  async handleWrongPass() {
    const toast = await toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Password is not correct!',
      keyboardClose: true
    });

    await toast.present();
  }
                                              
}
