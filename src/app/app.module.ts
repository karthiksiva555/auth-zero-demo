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

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    ProtectedComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'geotab-test.eu.auth0.com',
      clientId: '9yco3W5jnTTNci40lFafK37UfrDkwXnn',
      audience: 'https://geotab-test.eu.auth0.com/api/v2/',
      organization: 'org_JPhijibfOm0RSf1K', // Geotab: org_JPhijibfOm0RSf1K  AT&T: org_dBKmIuK1mauVQAwV
      scope: 'update:current_user_metadata',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://geotab-test.eu.auth0.com/api/v2/*',
            tokenOptions: {
              audience: 'https://geotab-test.eu.auth0.com/api/v2/',
              scope: 'update:current_user_metadata'
            }
          }
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
