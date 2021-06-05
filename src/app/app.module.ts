import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.components'
import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '././material/material.module';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BasicFormComponent,

  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     CoreModule,
    HttpClientModule,
    MaterialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
