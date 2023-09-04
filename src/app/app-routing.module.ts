// Angular modules
import { NgModule }          from '@angular/core';
import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';

// Components
import { NotFoundComponent } from './static/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectMasterComponent } from './settings/project-master/project-master.component';

const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path         : 'home',
    loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'project-master',
    component : ProjectMasterComponent
  },
  { path : '',   redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : NotFoundComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports : [RouterModule]
})

export class AppRoutingModule { }
