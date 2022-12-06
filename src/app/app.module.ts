import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

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
    AppRoutingModule,
    AuthModule.forRoot({
      // domain: 'dev-hf8bc21m.us.auth0.com',
      // clientId: 'KKOl3JioGn85QMBVm18NIHQNtiBlXMby'
      domain: 'geotab-test.eu.auth0.com',
      clientId: '9yco3W5jnTTNci40lFafK37UfrDkwXnn',
      organization: 'org_dBKmIuK1mauVQAwV' // Geotab: org_JPhijibfOm0RSf1K  AT&T: org_dBKmIuK1mauVQAwV
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
