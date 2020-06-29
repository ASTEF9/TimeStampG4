import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { TimecardComponent } from "./timecard/timecard.component";
import { CreateDoctorComponent } from "./create-doctor/create-doctor.component";
import { ListDoctorsComponent } from "./list-doctors/list-doctors.component";
import { CreateLocationComponent } from "./create-location/create-location.component";
import { ListLocationsComponent } from "./list-locations/list-locations.component";
import { CreateTimehseetComponent } from "./create-timehseet/create-timehseet.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "listDoctors", component: ListDoctorsComponent },
  { path: "timecard", component: TimecardComponent },
  { path: "createDoc", component: CreateDoctorComponent },
  { path: "createLocation", component: CreateLocationComponent },
  { path: "listLocations", component: ListLocationsComponent },
  { path: "createTimesheet", component: CreateTimehseetComponent },
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
// import { DisplayUsersComponent } from './display-users/display-users.component';
// import { DisplayUserComponent } from './display-user/display-user.component';
//import { TimecardComponent } from "./timecard/timecard.component";


// const routes: Routes = 
// [
// 	{ path: 'login', component: LoginComponent },
// 	{ path: 'registration', component: RegisterComponent },
// 	{ path: 'home', component: HomeComponent },
// 	{ path: 'users', component: DisplayUsersComponent },
// 	{ path: 'user/:id', component: DisplayUserComponent },
// //	{ path: "timecard", component: TimecardComponent },
// 	{ path: '', component: HomeComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, HomeComponent];
