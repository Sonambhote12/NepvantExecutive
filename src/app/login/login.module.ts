import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbEvaIconsModule, 
    NbIconModule,  
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }

