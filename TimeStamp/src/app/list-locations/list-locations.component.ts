import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocationsService } from "../locations.service";

@Component({
  selector: "app-list-locations",
  templateUrl: "./list-locations.component.html",
  styleUrls: ["./list-locations.component.css"],
})
export class ListLocationsComponent implements OnInit {
  locations: any;
  constructor(private router: Router, private Service: LocationsService) {}

  ngOnInit(): void {
    this.Service.getLocations().subscribe((data) => (this.locations = data));
  }

  onSelect(id: number) {
    console.log(id);
    this.router.navigate(["/locations", id]);
  }

  public deleteLocation(id: any) {
    console.log(id);
    let resp = this.Service.deleteLocation(id);
    resp.subscribe((data) => {
      this.locations = data;
      this.Service.getLocations().subscribe((data) => (this.locations = data));
    });
  }
}
