import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-adduser-form',
  templateUrl: './adduser-form.component.html',
  styleUrls: ['./adduser-form.component.css']
})
export class AdduserFormComponent implements OnInit {

    form = new FormGroup({
        name: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        country: new FormControl('',Validators.required),
        address:new FormControl('',Validators.required)
   });
    constructor() { }
    @Output() addUser= new EventEmitter<any>();
    get firstname(){
      return this.form.get('firstName');
    }
    ngOnInit() {
    }
  
    onSubmit(){
      this.addUser.emit(this.form.value);
    }

}
