import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getUsers(){
    return [{
      id:1,
      name:'venkat 1',
      phone:12345,
      country:'India',
      address:'Hyderbad',
      
    },
  {
       id:2,
      name:'venkat 2',
      phone:12345,
      country:'India',
      address:'Hyderbad',
    },
  {
      id:3,
      name:'venkat 3',
      phone:12345,
      country:'India',
      address:'Hyderbad',
    },
  {
      id:4,
      name:'venkat 4',
      phone:12345,
      country:'India',
      address:'Hyderbad',
    }]

  }
}
