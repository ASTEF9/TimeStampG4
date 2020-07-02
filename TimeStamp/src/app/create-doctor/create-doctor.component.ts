import { Component, OnInit } from "@angular/core";
import { DoctorServiceService } from "../doctor-service.service";
import { doctor } from "../doctor";
import { Router, ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: "app-create-doctor",
  templateUrl: "./create-doctor.component.html",
  styleUrls: ["./create-doctor.component.css"],
})

export class CreateDoctorComponent implements OnInit 
{
  doctor: doctor = new doctor("", "", "");
  message: any;
  formdata;

  constructor(
    private service: DoctorServiceService, private router: Router 
	// route: ActivatedRoute,
  ) // router: AppRoutingModule
  {}

  ngOnInit(): void 
  {
  		this.formdata = new FormGroup({
			firstName: new FormControl("", Validators.required),
			lastName: new FormControl("", Validators.required),
			fileName: new FormControl("", Validators.required)
		});		
  }
  // public registerNow() {
  //   let resp = this.service.createdoctor(this.doctor);
  //   resp.subscribe((data) => (this.message = "Doctor added Successfully"));
  // }

	public addDoctor(doc): void 
	{
		var d = new doctor(doc.firstName, doc.lastName, doc.fileName);
		let resp = this.service.addDoctor(d);
		resp.subscribe((data) => 
		{
			//this.message = "Location Created Successfully";
			this.router.navigate(['/master/listDoctors']);
		});
	}
}
