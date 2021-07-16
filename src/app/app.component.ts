import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  hideNav: boolean;
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((res) => { 
      if(this.router.url=='/login'){
        this.hideNav=false;
      }
      else{
        this.hideNav=true;
      }
})
    

  }
  title = 'my-test';

  
}
