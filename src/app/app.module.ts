import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ItemsComponent } from './components/items/items/items.component';
import { ProductComponent } from './components/product/product.component';
import { ReadcacheComponent } from './components/readcache/readcache.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ItemsComponent,
    ProductComponent,
    ReadcacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
