import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './features/users/users.component';
import { LoginComponent } from './features/login/login.component';
import { ContactComponent } from './features/contact/contact.component';
import { UserServiceService } from "src/app/services/users/user-service.service";
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { AdduserFormComponent } from './features/adduser-form/adduser-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ContactComponent,
    UserDetailsComponent,
    AdduserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
