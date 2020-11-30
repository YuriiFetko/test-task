import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {AuthService} from '../shared/auth.service';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class HomePageModule {
}
