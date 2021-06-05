import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
      path: '',

      children: [
        {
          path: '',
          redirectTo: '/lineacorre',
          pathMatch: 'full',
        },
        {
          path: 'lineacorre',
          loadChildren: () => import('./lineacorre/lineacorre.module').then(m => m.LineacorreModule)
        },
      
      ]
    }
    
  ];
  


@NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  