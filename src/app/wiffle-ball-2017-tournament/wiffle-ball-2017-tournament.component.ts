import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-wiffle-ball-2017-tournament',
  templateUrl: './wiffle-ball-2017-tournament.component.html',
  styleUrls: ['./wiffle-ball-2017-tournament.component.scss']
})
export class WiffleBall2017TournamentComponent implements OnInit {

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
        breakpoint: 992,
        width: '100%',
        height: '600px',
        imagePercent: 90,
        thumbnailsPercent: 10,
        thumbnailsMargin: 10,
        thumbnailMargin: 10
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '100%',
        height: '600px',
        imagePercent: 90,
        thumbnailsPercent: 10,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/pics/2017/1.jpg',
        medium: 'assets/img/pics/2017/1.jpg',
        big: 'assets/img/pics/2017/1.jpg'
      },
      {
        small: 'assets/img/pics/2017/2.jpg',
        medium: 'assets/img/pics/2017/2.jpg',
        big: 'assets/img/pics/2017/2.jpg'
      },
      {
        small: 'assets/img/pics/2017/3.jpg',
        medium: 'assets/img/pics/2017/3.jpg',
        big: 'assets/img/pics/2017/3.jpg'
      },
      {
        small: 'assets/img/pics/2017/4.jpg',
        medium: 'assets/img/pics/2017/4.jpg',
        big: 'assets/img/pics/2017/4.jpg'
      },
      {
        small: 'assets/img/pics/2017/5.jpg',
        medium: 'assets/img/pics/2017/5.jpg',
        big: 'assets/img/pics/2017/5.jpg'
      },
      {
        small: 'assets/img/pics/2017/6.jpg',
        medium: 'assets/img/pics/2017/6.jpg',
        big: 'assets/img/pics/2017/6.jpg'
      },
      {
        small: 'assets/img/pics/2017/7.jpg',
        medium: 'assets/img/pics/2017/7.jpg',
        big: 'assets/img/pics/2017/7.jpg'
      },
      {
        small: 'assets/img/pics/2017/8.jpg',
        medium: 'assets/img/pics/2017/8.jpg',
        big: 'assets/img/pics/2017/8.jpg'
      },
      {
        small: 'assets/img/pics/2017/9.jpg',
        medium: 'assets/img/pics/2017/9.jpg',
        big: 'assets/img/pics/2017/9.jpg'
      },
      {
        small: 'assets/img/pics/2017/10.jpg',
        medium: 'assets/img/pics/2017/10.jpg',
        big: 'assets/img/pics/2017/10.jpg'
      },
      {
        small: 'assets/img/pics/2017/11.jpg',
        medium: 'assets/img/pics/2017/11.jpg',
        big: 'assets/img/pics/2017/11.jpg'
      },
      {
        small: 'assets/img/pics/2017/12.jpg',
        medium: 'assets/img/pics/2017/12.jpg',
        big: 'assets/img/pics/2017/12.jpg'
      },
      {
        small: 'assets/img/pics/2017/13.jpg',
        medium: 'assets/img/pics/2017/13.jpg',
        big: 'assets/img/pics/2017/13.jpg'
      },
      {
        small: 'assets/img/pics/2017/14.jpg',
        medium: 'assets/img/pics/2017/14.jpg',
        big: 'assets/img/pics/2017/14.jpg'
      },
      {
        small: 'assets/img/pics/2017/16.jpg',
        medium: 'assets/img/pics/2017/16.jpg',
        big: 'assets/img/pics/2017/16.jpg'
      },
      {
        small: 'assets/img/pics/2017/17.jpg',
        medium: 'assets/img/pics/2017/17.jpg',
        big: 'assets/img/pics/2017/17.jpg'
      },
      {
        small: 'assets/img/pics/2017/18.jpg',
        medium: 'assets/img/pics/2017/18.jpg',
        big: 'assets/img/pics/2017/18.jpg'
      },
      {
        small: 'assets/img/pics/2017/19.jpg',
        medium: 'assets/img/pics/2017/19.jpg',
        big: 'assets/img/pics/2017/19.jpg'
      },
      {
        small: 'assets/img/pics/2017/20.jpg',
        medium: 'assets/img/pics/2017/20.jpg',
        big: 'assets/img/pics/2017/20.jpg'
      },
      {
        small: 'assets/img/pics/2017/21.jpg',
        medium: 'assets/img/pics/2017/21.jpg',
        big: 'assets/img/pics/2017/21.jpg'
      },
      {
        small: 'assets/img/pics/2017/22.jpg',
        medium: 'assets/img/pics/2017/22.jpg',
        big: 'assets/img/pics/2017/22.jpg'
      },
      {
        small: 'assets/img/pics/2017/23.jpg',
        medium: 'assets/img/pics/2017/23.jpg',
        big: 'assets/img/pics/2017/23.jpg'
      },
      {
        small: 'assets/img/pics/2017/24.jpg',
        medium: 'assets/img/pics/2017/24.jpg',
        big: 'assets/img/pics/2017/24.jpg'
      },
    ];

  }

}
