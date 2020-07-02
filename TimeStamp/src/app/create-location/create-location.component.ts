import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../locations.service";
import { location } from "../location";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: "app-create-location",
  templateUrl: "./create-location.component.html",
  styleUrls: ["./create-location.component.css"],
})

export class CreateLocationComponent implements OnInit 
{
  location: location = new location("", "");
  message: any;
  formdata;

  constructor(private service: LocationsService, private router: Router) {}

  ngOnInit(): void 
  {
    	this.formdata = new FormGroup({
			sector: new FormControl("", Validators.required),
			location: new FormControl("", Validators.required)
		});	
  }

  public addLocation(loc) 
  {
	var l = new location(loc.sector, loc.location);
    let resp = this.service.addLocation(l);
    resp.subscribe((data) => 
	{
		//this.message = "Location Created Successfully";
		this.router.navigate(['/master/listLocations']);
	});
  }
}
