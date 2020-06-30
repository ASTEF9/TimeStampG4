import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TimesheetService } from "../timesheet.service";
import { LoginService } from "../login.service";

@Component({
  selector: "app-list-timesheet",
  templateUrl: "./list-timesheet.component.html",
  styleUrls: ["./list-timesheet.component.css"],
})
export class ListTimesheetComponent implements OnInit {
  timesheets: any;
  constructor(private router: Router, private Service: TimesheetService, public loginService: LoginService) {}

  ngOnInit(): void {
    this.Service.getTimesheets().subscribe((data) => (this.timesheets = data));
  }

  onSelect(id: number) {
    console.log(id);
    this.router.navigate(["/timesheets", id]);
  }

  public deleteLocation(id: any) {
    console.log(id);
    let resp = this.Service.deleteTimesheet(id);
    resp.subscribe((data) => {
      this.timesheets = data;
      this.Service.getTimesheets().subscribe(
        (data) => (this.timesheets = data)
      );
    });
  }
}
