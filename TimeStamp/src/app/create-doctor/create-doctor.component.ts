import { Component, OnInit } from "@angular/core";
import { DoctorServiceService } from "../doctor-service.service";
import { doctor } from "../doctor";
import { ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: "app-create-doctor",
  templateUrl: "./create-doctor.component.html",
  styleUrls: ["./create-doctor.component.css"],
})
export class CreateDoctorComponent implements OnInit {
  doctor: doctor = new doctor("", "", "");
  message: any;

  constructor(private service: DoctorServiceService) // route: ActivatedRoute,
  // router: AppRoutingModule
  {}

  ngOnInit(): void {}
  // public registerNow() {
  //   let resp = this.service.createdoctor(this.doctor);
  //   resp.subscribe((data) => (this.message = "Doctor added Successfully"));
  // }

  public addDoctor() {
    let resp = this.service.addDoctor(this.doctor);
    resp.subscribe((data) => (this.message = data));
  }
}
