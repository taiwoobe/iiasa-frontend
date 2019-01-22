import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() public data;
  lat: number;
  lon: number;

  constructor() { }

  ngOnInit() {
    // Converting the latitude and longitude to floating numbers
    this.lat = parseFloat(this.data.location.lat);
    this.lon = parseFloat(this.data.location.lon);
  }

}
