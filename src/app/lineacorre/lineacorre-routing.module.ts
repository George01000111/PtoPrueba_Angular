import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineacorreComponent } from './components/lineacorre/lineacorre.component';
import { LineacorreFormComponent } from './components/lineacorre-form/lineacorre-form.component';




const routes: Routes = [
  {
    path: '',
    component: LineacorreFormComponent
  },

  {
    path: 'listar',
    component: LineacorreComponent
  },
  {
    path: 'create/listar',
    component: LineacorreComponent
  }, 
  {
    path: 'create',
    component: LineacorreFormComponent
  },
  {
    path: 'listar/edit/:id',
    component: LineacorreFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineacorreRoutingModule { }
