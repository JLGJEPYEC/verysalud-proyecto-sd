import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.models';
import { USERS_DATA } from 'src/app/mock/user.mock';


const ELEMENT_DATA: User [] = USERS_DATA;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id','username', 'name', 'lastname', 'dni', 'id_role', 'id_specialty'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
