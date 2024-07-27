import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm !: FormGroup
  userId !: string
  userObj !: Iuser
  constructor(

    private _route: ActivatedRoute,
    private _router : Router,
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
    this. createUserform()
     this.userId = this._route.snapshot.params['userId']
    this.userObj = this._usersService.fetchUser(this.userId)
    this.userForm.patchValue(this.userObj)
  }

  createUserform(){
    this,this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required])
    })
  }

  onUpdateUser(){
    if(this.userForm.valid){
      let updateObj: Iuser ={ ...this.userForm.value, userId : this.userId }
      this._usersService.UpdateUser(updateObj)
      this._router.navigate(['/users'])
   }
  }
  

}
