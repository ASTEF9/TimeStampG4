import { Component, OnInit } from "@angular/core";
import { TimesheetService } from "../timesheet.service";
import { timesheet } from "../timesheet";
import { DATE } from "ngx-bootstrap/chronos/units/constants";
import { time } from "log-timestamp";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "app-create-timehseet",
  templateUrl: "./create-timehseet.component.html",
  styleUrls: ["./create-timehseet.component.css"],
})
export class CreateTimehseetComponent implements OnInit 
{
	timesheet: timesheet = new timesheet("", "", "", "", "", "");
	//message: any;
	error: boolean = false;
	errorMsg: string = "";
	
	constructor(private service: TimesheetService, private router: Router, public loginService: LoginService) {}

	ngOnInit(): void 
	{
		this.error = false;
		this.errorMsg = "";
	}

	public addTimesheet() 
	{
		//Parse for times
		var startH: number = Number(this.timesheet.timeIn.substring(0, 2));
		var endH: number = Number(this.timesheet.timeOut.substring(0, 2));
		var startM: number = Number(this.timesheet.timeIn.substring(3, 5));
		var endM: number = Number(this.timesheet.timeOut.substring(3, 5));
		if(startH > endH || (startH == endH && startM > endM))
		{
			console.log("ERROR TIME NO GOOD");
			this.error = true;
			this.errorMsg = "Your shift starts before it ends.";
			this.router.navigate(['/createTimesheet']);;
			return;
		}
		
		let resp = this.service.createTimesheet(this.timesheet);
		resp.subscribe((data) => 
		{
			//this.message = "TimeSheet Created Successfully";
			this.router.navigate(['/']);
		});
	}
}
