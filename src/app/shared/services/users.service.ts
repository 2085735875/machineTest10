import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { SnacbarService } from './snacbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : Array<Iuser> = [
    {
      userName : 'Ajay',
      userId : '1'
    },
    {
      userName : 'Rupesh',
      userId : '2'
    },
    {
      userName : 'Jaywant',
      userId : '3'
    },
    {
      userName : 'Bhavesh',
      userId : '4'
    }
  ]
  constructor(
    private _snackService : SnacbarService
  ) { }

  fetchAllUsers() : Iuser[]{
    return this.usersArr
  }

  fetchUser(id : string):Iuser{
    return this.usersArr.find(user =>  user.userId === id)as Iuser
  }

  UpdateUser(updateObj : Iuser){
    let getIndex = this.usersArr.findIndex(user => user.userId === updateObj.userId)
    let temp = this.usersArr[getIndex].userName
    this.usersArr[getIndex] = updateObj
    this._snackService.openSnackBar(`The user name ${temp} is changed to ${updateObj.userName}`)
  }
  addUser(user : Iuser):void{
  this.usersArr.push(user)
  }

  removeUser(id: string){
    let getIndex = this.usersArr.findIndex(user => user.userId === id);
   let temp  = this.usersArr[getIndex].userName
  this.usersArr.splice(getIndex,1)
  this._snackService.openSnackBar(`The user ${temp} is successfully removed`)
  }
}
