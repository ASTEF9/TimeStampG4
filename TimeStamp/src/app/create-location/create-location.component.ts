import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../locations.service";
import { location } from "../location";

@Component({
  selector: "app-create-location",
  templateUrl: "./create-location.component.html",
  styleUrls: ["./create-location.component.css"],
})
export class CreateLocationComponent implements OnInit {
  location: location = new location("", "");
  message: any;

  constructor(private service: LocationsService) {}

  ngOnInit(): void {}

  public addLocation() {
    let resp = this.service.addLocation(this.location);
    resp.subscribe((data) => (this.message = "Location Created Successfully"));
  }
}
