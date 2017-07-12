import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  title = 'app';

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => 
      this.users = users);
  }
}
