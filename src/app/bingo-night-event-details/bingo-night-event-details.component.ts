import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-bingo-night-event-details',
  templateUrl: './bingo-night-event-details.component.html',
  styleUrls: ['./bingo-night-event-details.component.scss']
})
export class BingoNightEventDetailsComponent implements OnInit {

  data = {
    description: `Ladies Night Out Basket Bingo Fundraiser.`,
  };

  lat: number = 40.5168375;
  lng: number = -74.8524498;
  zoom: number =  14;

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | Bingo Night');
    this.meta.addTags([
      { name: 'og:url', content: '/bingo-night/details' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | Bingo Night' },
      { name: 'og:description', content: this.data.description }
    ]);
  }

}
