import { Component, OnInit, ViewChild , TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { LOGINS_DATA } from 'src/app/mock/login.mock';
import { USERS_DATA } from 'src/app/mock/user.mock';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name!: string;
  email!:string;
  username!:string;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit(): void {

    if(LOGINS_DATA[0]){
      this.name = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].lastname+
      ", " + USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].name;
      this.email = USERS_DATA.filter(user => user.username == LOGINS_DATA[0].username)[0].email;
    }else{
      this.router.navigateByUrl('/login');
    }

  }
  logout(): void {
    void this.router.navigateByUrl('/login');
  }



}

