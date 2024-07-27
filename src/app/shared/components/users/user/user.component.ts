import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId !: string
  userObj !: Iuser

  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
   
    this._route.params
        .subscribe(res => {
          console.log(res)
          this.userId = res['userId']
         this.userObj = this._usersService.fetchUser(this.userId)
        })
    
  }

  gotoEditUser(){
   
    this._router.navigate(['edit'], {
      relativeTo : this._route
    })
  }

  onRemoveUser(){
    let Rconfirm = confirm('Do you want to remove this user info ?')

   if(Rconfirm){
    this._usersService.removeUser(this.userId)
    this._router.navigate(['/users'])
    }
  }

}
