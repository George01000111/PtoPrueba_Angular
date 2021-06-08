import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

import { LineacorreRoutingModule } from './lineacorre-routing.module';
import { LineacorreComponent } from './components/lineacorre/lineacorre.component';
import { LineacorreFormComponent } from './components/lineacorre-form/lineacorre-form.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [LineacorreComponent, LineacorreFormComponent, SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LineacorreRoutingModule,
  

  ]
})
export class LineacorreModule { }
