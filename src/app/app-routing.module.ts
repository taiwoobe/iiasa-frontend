import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { ContributionsComponent } from './pages/contributions/contributions.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

const appRoutes: Routes = [{
  path: '', 
  component: FullLayoutComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: ContributionsComponent
    }
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class AppRoutingModule { }
