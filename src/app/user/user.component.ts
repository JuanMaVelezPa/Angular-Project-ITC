import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  title: string;
  id: string;
  page: string;
  public user: any;
  users: Array<any>;
  control: boolean;

  constructor(private _userService: UserService) {
    this.title = 'Users';
    this.user = '';
    this.id = '1';
    this.users = [];
    this.page = '1';
    this.control = false;
  }

  ngOnInit(): void {
    this.getUsers(this.page);
  }

  getUsers(page: string) {
    this.users = [];
    this._userService.getUsers(page).subscribe(
      (result) => {
        this.user = (result as any).data;
        for (var i in this.user) {
          this.users.push(this.user[i]);
        }
        // console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserById(id: string) {
    this._userService.getUser(id).subscribe(
      (result) => {
        this.control = false;
        // console.log(result);
        this.user = (result as any).data;
      },
      (error) => {
        this.control = true;
        this.getUsers(this.page);
      }
    );
  }
}
