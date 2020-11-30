import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardComponent} from './card/card.component';
import {CardPageComponent} from './card-page/card-page.component';
import {RouterModule} from '@angular/router';
import {CardSearchPipe} from './card-search.pipe';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [CardsComponent, CardComponent, CardPageComponent, CardSearchPipe],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CardsComponent
      },
      {
        path: ':id',
        component: CardPageComponent
      }
    ]),
    SharedModule
  ],
  providers: []
})
export class CardsModule {
}
