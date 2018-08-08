import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
// import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a [routerLink] = "['/product']">Product</a></li>
    <li><a [routerLink] = "['/inventory']">Inventory</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
  // providers: [ProductService]
})
export class AppComponent  {
//   appTitle:string = 'Welcome';
//   appStatus:boolean = true;
//   appList : any[] = [{
//     id :'101',
//     name : 'Mahesh',
//     url:'app/images/1.jpg'
//   },
//   {
//     id:'102',
//     name:'Anoop',
//     url:'app/images/2.jpg'
//   },
//   {
//     id:'103',
//     name:'Ashish',
//     url:'app/images/1.jpg'
//   }
// ]

// iproducts: IProduct[];
//    constructor(private _product: ProductService) {
//    }
//
//    ngOnInit() : void {
//       this._product.getProducts()
//       .subscribe(iproducts => this.iproducts = iproducts);
//    }
}
