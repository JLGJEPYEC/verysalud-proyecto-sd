import { Component, OnInit } from '@angular/core';
import { LOGINS_DATA } from 'src/app/mock/login.mock';
import { USERS_DATA } from 'src/app/mock/user.mock';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  name!: string;
  lastname!: string;
  gender!: string;
  dni!: number;
  birthdate!: string;
  email!: string;
  phone: string ="";
  civil_status!: string;
  address!: string;

  constructor() { }

  ngOnInit(): void {
    if(LOGINS_DATA[0]){
      this.name = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].name;
      this.lastname = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].lastname;
      this.gender = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].gender;
      this.dni = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].dni;
      this.birthdate = (USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].birthdate).toDateString();
      this.email = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].email;
      for(let i = 0; i < USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].phone.length; i++){
        this.phone += (USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].phone[i]).toString() + "   ";
      }
      this.civil_status = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].civil_status;
      this.address = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].address;
    }
  }

}
