import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';

const routes: Route[] = [
    {
      path: '', component: HomePageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./cards/cards.module')
            .then(mod => mod.CardsModule)
        }
      ]
    },
  ]
;

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HomePageRoutingModule {
}
