import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { DisplayUserComponent } from './display-user/display-user.component';
//import { TimecardComponent } from "./timecard/timecard.component";


const routes: Routes = 
[
	{ path: 'login', component: LoginComponent },
	{ path: 'registration', component: RegisterComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'users', component: DisplayUsersComponent },
	{ path: 'user/:id', component: DisplayUserComponent },
//	{ path: "timecard", component: TimecardComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
	LoginComponent,
	HomeComponent
]