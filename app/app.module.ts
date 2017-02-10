import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponent,
  ],
  imports: [ 
    HttpModule,
    ProductModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
