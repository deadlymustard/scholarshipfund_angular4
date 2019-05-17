import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { MatDialog } from "@angular/material/dialog";
import { WiffleBallEventDetailsSubscribeDialogComponent } from "../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component";

@Component({
  selector: 'app-wiffle-ball-past-tournament',
  templateUrl: './wiffle-ball-past-tournament.component.html',
  styleUrls: ['./wiffle-ball-past-tournament.component.scss']
})
export class WiffleBallPastTournamentComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }


  ngOnInit() {



    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 10
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 90,
        thumbnailsPercent: 10,
        thumbnailsMargin: 10,
        thumbnailMargin: 10
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/pics/1.jpg',
        medium: 'assets/img/pics/1.jpg',
        big: 'assets/img/pics/1.jpg'
      },
      {
        small: 'assets/img/pics/2.jpg',
        medium: 'assets/img/pics/2.jpg',
        big: 'assets/img/pics/2.jpg'
      },
      {
        small: 'assets/img/pics/3.jpg',
        medium: 'assets/img/pics/3.jpg',
        big: 'assets/img/pics/3.jpg'
      },
      {
        small: 'assets/img/pics/4.jpg',
        medium: 'assets/img/pics/4.jpg',
        big: 'assets/img/pics/4.jpg'
      },
      {
        small: 'assets/img/pics/5.jpg',
        medium: 'assets/img/pics/5.jpg',
        big: 'assets/img/pics/5.jpg'
      },
      {
        small: 'assets/img/pics/6.jpg',
        medium: 'assets/img/pics/6.jpg',
        big: 'assets/img/pics/6.jpg'
      },
      {
        small: 'assets/img/pics/7.jpg',
        medium: 'assets/img/pics/7.jpg',
        big: 'assets/img/pics/7.jpg'
      },
      {
        small: 'assets/img/pics/8.jpg',
        medium: 'assets/img/pics/8.jpg',
        big: 'assets/img/pics/8.jpg'
      },
      {
        small: 'assets/img/pics/9.jpg',
        medium: 'assets/img/pics/9.jpg',
        big: 'assets/img/pics/9.jpg'
      },
      {
        small: 'assets/img/pics/10.jpg',
        medium: 'assets/img/pics/10.jpg',
        big: 'assets/img/pics/10.jpg'
      },
      {
        small: 'assets/img/pics/11.jpg',
        medium: 'assets/img/pics/11.jpg',
        big: 'assets/img/pics/11.jpg'
      },
      {
        small: 'assets/img/pics/12.jpg',
        medium: 'assets/img/pics/12.jpg',
        big: 'assets/img/pics/12.jpg'
      },
      {
        small: 'assets/img/pics/13.jpg',
        medium: 'assets/img/pics/13.jpg',
        big: 'assets/img/pics/13.jpg'
      },
      {
        small: 'assets/img/pics/14.jpg',
        medium: 'assets/img/pics/14.jpg',
        big: 'assets/img/pics/14.jpg'
      },
      {
        small: 'assets/img/pics/16.jpg',
        medium: 'assets/img/pics/16.jpg',
        big: 'assets/img/pics/16.jpg'
      },
      {
        small: 'assets/img/pics/17.jpg',
        medium: 'assets/img/pics/17.jpg',
        big: 'assets/img/pics/17.jpg'
      },
      {
        small: 'assets/img/pics/18.jpg',
        medium: 'assets/img/pics/18.jpg',
        big: 'assets/img/pics/18.jpg'
      },
      {
        small: 'assets/img/pics/19.jpg',
        medium: 'assets/img/pics/19.jpg',
        big: 'assets/img/pics/19.jpg'
      },
      {
        small: 'assets/img/pics/20.jpg',
        medium: 'assets/img/pics/20.jpg',
        big: 'assets/img/pics/20.jpg'
      },
      {
        small: 'assets/img/pics/21.jpg',
        medium: 'assets/img/pics/21.jpg',
        big: 'assets/img/pics/21.jpg'
      },
      {
        small: 'assets/img/pics/22.jpg',
        medium: 'assets/img/pics/22.jpg',
        big: 'assets/img/pics/22.jpg'
      },
      {
        small: 'assets/img/pics/23.jpg',
        medium: 'assets/img/pics/23.jpg',
        big: 'assets/img/pics/23.jpg'
      },
      {
        small: 'assets/img/pics/24.jpg',
        medium: 'assets/img/pics/24.jpg',
        big: 'assets/img/pics/24.jpg'
      },
    ];

  }

}
