import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodId !: string
  prodObj !: Iproduct
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _prodService: ProductsService
  ) { }

  ngOnInit(): void {
    
    this._route.params
    .subscribe(res => {
      console.log(res)
      this.prodId = res['prodId']
      this.prodObj = this._prodService.fetchProduct(this.prodId)
    })
  }

  onRemoveProduct(){
    let Rconfirm = confirm('Do you want to remove this product info ?')
    if(Rconfirm){
      this._prodService.removeproduct(this.prodId)
    this._router.navigate(['/products'])
    }
    }

}
