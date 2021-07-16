import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  @Input() userDetails:any;
  @Output() hide = new EventEmitter<any>();
  ngOnInit(): void {
  }
  hideUserDetails(){
    console.log("use details");
    this.hide.emit(false);
  }

}
