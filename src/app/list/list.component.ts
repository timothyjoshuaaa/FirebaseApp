import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user: firebase.User;
  constructor(private au:AuthService, private router: Router) { }

  ngOnInit(): void {

    this.au.getUserState()
    .subscribe(user=>{
      this.user = user;
    })
  }
  logout(){
    this.au.logout();   
}

}
