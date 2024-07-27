import {  NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/users/user/user.component";
import { EditUserComponent } from "./components/users/edit-user/edit-user.component";
import { ProductComponent } from "./components/products/product/product.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";




const appRoutes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'products/:prodId',
        component : ProductComponent
    },
    {
        path : 'products/:prodId/edit',
        component : EditProductComponent
    },
    {
        path : 'users',
        component : UsersComponent
    },
    {
        path : 'users/:userId',
        component : UserComponent
    },
    {
        path : 'users/:userId/edit',
        component : EditUserComponent
    },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}