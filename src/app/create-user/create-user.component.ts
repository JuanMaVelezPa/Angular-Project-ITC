import { UserService } from './../services/user.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService],
})
export class CreateUserComponent implements OnInit {
  public user: User;
  mensaje: string;
  title: string;

  constructor(private _createUserService: UserService) {
    this.user = new User('', '', '', '', '');
    this.mensaje = '';
    this.title = 'Create User';
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.mensaje = 'waiting';
    if (form.status == 'VALID') {
      console.log('Forms Valid');
      this._createUserService.createUser(this.user).subscribe(
        (result) => {
          this.mensaje = 'User Created';
          console.log('create');
        },
        (error) => {
          this.mensaje = 'Error';
          console.log('error');
        }
      );
    } else {
      this.mensaje = 'Invalid';
      console.log('Forms Invalid');
      form.submitted = false;
    }
    console.log(form);
  }
}
