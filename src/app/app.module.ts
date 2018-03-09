import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'Users', component: UsersComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**',redirectTo: '/Home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    // RouterModule,
    RegistrationComponent,
    UsersComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
