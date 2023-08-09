import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ConfirmLoginComponent } from './confirm-login/confirm-login.component';
import { CallbackComponent } from './confirm-login/callback/callback.component';
import { NewcallbackComponent } from './newcallback/newcallback.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: NewcallbackComponent},
  { path: 'error', component: ErrorComponent },
  { path: 'link-accounts', component: ConfirmLoginComponent, children: [
      { path: 'callback', component: CallbackComponent}
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
