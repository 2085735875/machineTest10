import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData !: Array<Iuser>
  constructor(
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.usersData = this._userService.fetchAllUsers()
  }

}
