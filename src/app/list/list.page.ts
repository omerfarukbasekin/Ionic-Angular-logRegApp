import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/* import  info  from ''; */
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
results: any;
  constructor(private router : Router) { }

  ngOnInit() {
    fetch('./assets/data.json').then(res => res.json()).then(json => {
      console.log('results:',json);
      this.results = json;
    });
  }
  backPagaFunc(){
    console.log("sending to home page");
    this.router.navigate(["/home"]);
  }
 

}
