import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppProduct } from './product.component';
import { AppInventory } from './inventory.component';
import { AppNotFound } from './notFound.component';
import { RouterModule , Routes } from '@angular/router';

const appRoutes : Routes = [
  { path:'product',component:AppProduct },
  { path:'inventory',component:AppInventory },
  { path:'**',component:AppNotFound }
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,AppProduct,AppInventory,AppNotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }  
