import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from '../shared/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class LoginModule {
}
