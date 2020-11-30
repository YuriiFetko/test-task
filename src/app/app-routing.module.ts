import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

const appRoutes: Route[] = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule)
  },
  {path: '**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
