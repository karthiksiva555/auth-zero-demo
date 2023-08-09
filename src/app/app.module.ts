import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmLoginComponent } from './confirm-login/confirm-login.component';
import { NewcallbackComponent } from './newcallback/newcallback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    ProtectedComponent,
    HomeComponent,
    LogoutComponent,
    LoginComponent,
    ErrorComponent,
    ConfirmLoginComponent,
    NewcallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'geotab-test.eu.auth0.com', // geotab-test.eu.auth0.com dev.geotab.auth0app.com
      clientId: '9yco3W5jnTTNci40lFafK37UfrDkwXnn', // 9yco3W5jnTTNci40lFafK37UfrDkwXnn klYw7yW2QApN1adqafPpUyjt3X0teOhs
      errorPath: '/error',
      authorizationParams: {
        redirect_uri: window.location.origin+'/callback',
        connection: 'UserCreation', // Username-Password-Authentication Geotab
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
