import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Username' },
    { name: 'Email' }
  ];

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => 
      this.users = users);
  }
}
