import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnacbarService {

  constructor(
    private _snackService : MatSnackBar
  ) { }

  openSnackBar(msg :  string){
    this._snackService.open(msg, 'close',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'left'
    })
  }
}
