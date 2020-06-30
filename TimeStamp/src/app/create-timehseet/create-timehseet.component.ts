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
export class CreateTimehseetComponent implements OnInit {
  timesheet: timesheet = new timesheet("", "", "", "", "", "");
  // new Date(),
  // "",
  // new time(),
  // new time(),
  // "",
  // ""
  message: any;
  constructor(private service: TimesheetService, private router: Router, public loginService: LoginService) {}

  ngOnInit(): void {}

  public addTimesheet() {
    let resp = this.service.createTimesheet(this.timesheet);
    resp.subscribe((data) => 
	{
		this.message = "TimeSheet Created Successfully";
		this.router.navigate(['/']);
	});
  }
}
