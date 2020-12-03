import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './shared/auth.interceptor';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    // DataService,
    {
      provide: 'baseUrl',
      useValue: environment.baseUrl,
      multi: true
    },
    INTERSEPTOR_PROVIDER
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
