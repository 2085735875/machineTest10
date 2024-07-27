import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { SnacbarService } from './snacbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr: Array<Iproduct> = [
    {
      pname : 'Nokia 16',
      pid : '101',
      pstatus : 'In_Progress'
    },
    {
      pname : 'Moto 40 fusion',
      pid : '102',
      pstatus : 'Delivered'
    },
    {
      pname : 'Iphone 12',
      pid : '103',
      pstatus : 'Dispatched'
    }
  ]
  constructor(
    private _snackService : SnacbarService
  ) { }

  fetchAllProducts():Iproduct[]{
    return this.productsArr
  }

  fetchProduct(id : string): Iproduct{
    return this.productsArr.find(prod =>  prod.pid === id)as Iproduct
  }

  updateProduct(updateObj : Iproduct){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === updateObj.pid)
     let temp = this.productsArr[getIndex]
    this.productsArr[getIndex] = updateObj
    this._snackService.openSnackBar(`The product name ${temp.pname} 
      and status ${temp.pstatus}  are changed to ${updateObj.pname} and status ${updateObj.pstatus} `)
  }

  removeproduct(id: string){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === id);
   let temp  = this.productsArr[getIndex]
    this.productsArr.splice(getIndex,1)
    this._snackService.openSnackBar(`The product ${temp.pname} is successfully removed`)
  }
  
}
