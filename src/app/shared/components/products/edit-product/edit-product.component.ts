import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodForm !: FormGroup 
   prodId !: string
  prodObj !: Iproduct
  constructor(
        private _route: ActivatedRoute,
    private _router : Router,
    private _prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.createProdForm()
     this.prodId = this._route.snapshot.params['prodId']
    this.prodObj = this._prodService.fetchProduct(this.prodId)
    this.prodForm.patchValue(this.prodObj)
  }

  createProdForm(){
    this.prodForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pstatus : new FormControl(null, [Validators.required])
    })
  }

  onProdUpdate(){
    if(this.prodForm.valid){
       let updateObj: Iproduct ={ ...this.prodForm.value, pid : this.prodId }
       this._prodService.updateProduct(updateObj)
       this._router.navigate(['/products'])
    }
  }

}
