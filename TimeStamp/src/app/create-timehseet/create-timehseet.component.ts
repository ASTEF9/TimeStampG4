import { Component, OnInit } from "@angular/core";
import { TimesheetService } from "../timesheet.service";

@Component({
  selector: "app-create-timehseet",
  templateUrl: "./create-timehseet.component.html",
  styleUrls: ["./create-timehseet.component.css"],
})
export class CreateTimehseetComponent implements OnInit {
  timesheet: any;
  message: any;
  constructor(private service: TimesheetService) {}

  ngOnInit(): void {}

  public addTimesheet() {
    let resp = this.service.createTimesheet(this.timesheet);
    resp.subscribe((data) => (this.message = "TimeSheet Created Successfully"));
  }
}
