// Angular modules
import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';

// Internal modules
import { AuthRoutingModule }        from './auth-routing.module';
import { SharedModule }             from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
// Components
import { AuthComponent }            from './auth/auth.component';
import { ForgotPasswordComponent }  from './auth/forgot-password/forgot-password.component';
import { LoginComponent }           from './auth/login/login.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations    :
  [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ValidateAccountComponent,
    // HeaderComponent
  ],
  imports         :
  [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    SharedModule
  ],
})
export class AuthModule { }
