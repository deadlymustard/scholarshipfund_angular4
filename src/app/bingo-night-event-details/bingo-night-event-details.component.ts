import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-night-event-details',
  templateUrl: './bingo-night-event-details.component.html',
  styleUrls: ['./bingo-night-event-details.component.css']
})
export class BingoNightEventDetailsComponent implements OnInit {

    lat: number = 40.5168375;
  lng: number = -74.8524498;
  zoom: number =  14;

  constructor() { }

  ngOnInit() {
  }

}
