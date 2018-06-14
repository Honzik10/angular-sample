import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RickyComponent }   from './ricky/ricky.component';

const routes: Routes = [
  { path: 'ricky', component: RickyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
