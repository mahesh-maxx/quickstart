import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { MultiplierPipe } from './multiplier.pipe'
// import { AppProduct } from './product.component';
// import { AppInventory } from './inventory.component';
// import { AppNotFound } from './notFound.component';
// import { RouterModule , Routes } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { ProductFormComponent } from './product-form.component';
// import { Ng2PaginationModule } from 'ng2-pagination';


// // const appRoutes : Routes = [
//   { path:'product',component:AppProduct },
//   { path:'inventory',component:AppInventory },
//   { path:'**',component:AppNotFound }
// ];

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MultiplierPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
