import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

import { LineacorreRoutingModule } from './lineacorre-routing.module';
import { LineacorreComponent } from './components/lineacorre/lineacorre.component';
import { LineacorreFormComponent } from './components/lineacorre-form/lineacorre-form.component';


@NgModule({
  declarations: [LineacorreComponent, LineacorreFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LineacorreRoutingModule,
  

  ]
})
export class LineacorreModule { }
