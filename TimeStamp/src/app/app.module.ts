import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LoginService } from "./login.service";
import { RegisterComponent } from "./register/register.component";
import { DisplayUsersComponent } from './display-users/display-users.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { FlatpickrModule } from "angularx-flatpickr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { TimeNavComponent } from "./time-nav/time-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { TimecardComponent } from "./timecard/timecard.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CreateDoctorComponent } from "./create-doctor/create-doctor.component";
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { ListLocationsComponent } from "./list-locations/list-locations.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CreateTimehseetComponent } from './create-timehseet/create-timehseet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DisplayUsersComponent,
    DisplayUserComponent,
    TimeNavComponent,
    TimecardComponent,
    CreateDoctorComponent,
    ListDoctorsComponent,
    CreateLocationComponent,
    ListLocationsComponent,
	CreateTimehseetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
	BsDatepickerModule.forRoot(),
    MatListModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
