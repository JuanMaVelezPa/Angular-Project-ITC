import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../model/Config';

@Injectable()
export class UserService implements OnInit {
  urlBase: string;

  constructor(public _http: HttpClient) {
    this.urlBase = Config.urlBaseReqRes;
  }
  ngOnInit(): void {}

  getUser(id: string) {
    return this._http.get(this.urlBase + '/users/' + id);
  }

  getUsers(page: string) {
    return this._http.get(this.urlBase + '/users?page=' + page);
  }
}
