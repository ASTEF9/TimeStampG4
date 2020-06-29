import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DoctorServiceService } from "../doctor-service.service";

@Component({
  selector: "app-list-doctors",
  templateUrl: "./list-doctors.component.html",
  styleUrls: ["./list-doctors.component.css"],
})
export class ListDoctorsComponent implements OnInit {
  doctors: any;
  constructor(private router: Router, private Service: DoctorServiceService) {}

  ngOnInit() {
    this.Service.getDoctors().subscribe((data) => (this.doctors = data));
  }

  onSelect(id: number) {
    console.log(id);
    this.router.navigate(["/doctors", id]);
  }

  public deleteTour(id: any) {
    console.log(id);
    let resp = this.Service.deleteDoctor(id);
    resp.subscribe((data) => {
      this.doctors = data;
      this.Service.getDoctors().subscribe((data) => (this.doctors = data));
    });
  }
}
