import { Component, OnInit } from '@angular/core';
import { UserData } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'binding';
  userProp!: UserData;
  buttonClass!: string;
 

  ngOnInit(): void {}

  constructor() {
    this.userProp = {
      name: 'testname',
      status: false,
      email: 'test@gmail.com',
      address: {
        city: 'tbilisi',
        street: 'test.str',
        suite: 'aprt. 22',
        zipcode: 232323,
      },
    };
    this.buttonClass = this.userProp.status ? 'btn-success' : 'btn-danger';
    
  }
  ChangeStatus(){
    this.userProp.status = !this.userProp.status
    this.buttonClass = !this.userProp.status ? 'btn-danger' : 'btn-success';

    
  }
}
