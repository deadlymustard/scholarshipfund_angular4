import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-wiffle-ball-2018-tournament',
  templateUrl: './wiffle-ball-2018-tournament.component.html',
  styleUrls: ['./wiffle-ball-2018-tournament.component.scss']
})
export class WiffleBall2018TournamentComponent implements OnInit {

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
        small:'assets/img/pics/2018/01.JPG',
        medium:'assets/img/pics/2018/01.JPG',
        big:'assets/img/pics/2018/01.JPG'
      },
      {
        small:'assets/img/pics/2018/010.JPG',
        medium:'assets/img/pics/2018/010.JPG',
        big:'assets/img/pics/2018/010.JPG'
      },
      {
        small:'assets/img/pics/2018/011.JPG',
        medium:'assets/img/pics/2018/011.JPG',
        big:'assets/img/pics/2018/011.JPG'
      },
      {
        small:'assets/img/pics/2018/012.JPG',
        medium:'assets/img/pics/2018/012.JPG',
        big:'assets/img/pics/2018/012.JPG'
      },
      {
        small:'assets/img/pics/2018/013.JPG',
        medium:'assets/img/pics/2018/013.JPG',
        big:'assets/img/pics/2018/013.JPG'
      },
      {
        small:'assets/img/pics/2018/014.JPG',
        medium:'assets/img/pics/2018/014.JPG',
        big:'assets/img/pics/2018/014.JPG'
      },
      {
        small:'assets/img/pics/2018/015.JPG',
        medium:'assets/img/pics/2018/015.JPG',
        big:'assets/img/pics/2018/015.JPG'
      },
      {
        small:'assets/img/pics/2018/016.JPG',
        medium:'assets/img/pics/2018/016.JPG',
        big:'assets/img/pics/2018/016.JPG'
      },
      {
        small:'assets/img/pics/2018/017.JPG',
        medium:'assets/img/pics/2018/017.JPG',
        big:'assets/img/pics/2018/017.JPG'
      },
      {
        small:'assets/img/pics/2018/018.JPG',
        medium:'assets/img/pics/2018/018.JPG',
        big:'assets/img/pics/2018/018.JPG'
      },
      {
        small:'assets/img/pics/2018/019.JPG',
        medium:'assets/img/pics/2018/019.JPG',
        big:'assets/img/pics/2018/019.JPG'
      },
      {
        small:'assets/img/pics/2018/02.JPG',
        medium:'assets/img/pics/2018/02.JPG',
        big:'assets/img/pics/2018/02.JPG'
      },
      {
        small:'assets/img/pics/2018/020.JPG',
        medium:'assets/img/pics/2018/020.JPG',
        big:'assets/img/pics/2018/020.JPG'
      },
      {
        small:'assets/img/pics/2018/03.JPG',
        medium:'assets/img/pics/2018/03.JPG',
        big:'assets/img/pics/2018/03.JPG'
      },
      {
        small:'assets/img/pics/2018/04.JPG',
        medium:'assets/img/pics/2018/04.JPG',
        big:'assets/img/pics/2018/04.JPG'
      },
      {
        small:'assets/img/pics/2018/05.JPG',
        medium:'assets/img/pics/2018/05.JPG',
        big:'assets/img/pics/2018/05.JPG'
      },
      {
        small:'assets/img/pics/2018/06.JPG',
        medium:'assets/img/pics/2018/06.JPG',
        big:'assets/img/pics/2018/06.JPG'
      },
      {
        small:'assets/img/pics/2018/07.JPG',
        medium:'assets/img/pics/2018/07.JPG',
        big:'assets/img/pics/2018/07.JPG'
      },
      {
        small:'assets/img/pics/2018/08.JPG',
        medium:'assets/img/pics/2018/08.JPG',
        big:'assets/img/pics/2018/08.JPG'
      },
      {
        small:'assets/img/pics/2018/09.JPG',
        medium:'assets/img/pics/2018/09.JPG',
        big:'assets/img/pics/2018/09.JPG'
      }
    ];

  }

}
