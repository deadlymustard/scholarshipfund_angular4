import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs/internal/Observable";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-wiffle-ball-2017-tournament',
  templateUrl: './wiffle-ball-2017-tournament.component.html',
  styleUrls: ['./wiffle-ball-2017-tournament.component.scss']
})
export class WiffleBall2017TournamentComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  images: string[] = [];
  imagesLoaded = false;

  data = {
    description: `1st Annual Wiffle Ball Tournament (2017). Twelve teams and numerous volunteers 
      and spectators came together on Sunday, August 27th at Pickell Park in Whitehouse Station
      in loving memory of Kev. A big thank you to all who came out to play/volunteer/watch!`,
  };

  constructor(
    private storage: AngularFireStorage,
    private title: Title,
    private meta: Meta
  ) { }


  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | 2017 Tournament');
    this.meta.addTags([
      { name: 'og:url', content: '/wiffle-ball/2017' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | 2017 Tournament' },
      { name: 'og:description', content: this.data.description }
    ]);


    const inlineImageRefs: Observable<any>[] = [
      this.storage.ref('/images/pictures/2017/GROUP_SHOT.JPG').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/Godzilla_Farmers_and_Big_Boppers.JPG').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/Mastodons-_champs.jpg').getDownloadURL()
    ];

    forkJoin(inlineImageRefs).subscribe(res => {
      this.images = res;
      this.imagesLoaded = true;
    });


    const galleryImageRefs: Observable<any>[] = [
      this.storage.ref('/images/pictures/2017/1.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/2.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/3.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/4.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/5.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/6.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/7.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/8.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/9.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/10.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/11.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/12.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/13.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/14.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/16.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/17.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/18.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/19.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/20.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/21.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/22.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/23.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2017/24.jpg').getDownloadURL()
    ];

    forkJoin(galleryImageRefs).subscribe(res => {
      this.galleryImages = res.map(image => {return {small: image, medium: image, big: image, url: image} as NgxGalleryImage});
    });


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


  }

}
