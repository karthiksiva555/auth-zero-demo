import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'login', component: LoginButtonComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
