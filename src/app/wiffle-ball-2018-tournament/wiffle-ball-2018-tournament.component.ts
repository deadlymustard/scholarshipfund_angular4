import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {Observable} from "rxjs/internal/Observable";
import {AngularFireStorage} from "@angular/fire/storage";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-wiffle-ball-2018-tournament',
  templateUrl: './wiffle-ball-2018-tournament.component.html',
  styleUrls: ['./wiffle-ball-2018-tournament.component.scss']
})
export class WiffleBall2018TournamentComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  images: string[];
  imagesLoaded = false;

  data = {
    description: `2nd Annual Wiffle Ball Tournament (2018). The second annual Kevin Gilbert Wiffle 
    Ball Tournament was held in a downpour on Saturday,
    August 11th, 2018.  Despite the bad weather, all 40 registered players and numerous volunteers
    and spectators came together to remember Kev.`,
  };

  constructor(
    private storage: AngularFireStorage,
    private title: Title,
    private meta: Meta
  ) { }


  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | 2018 Tournament');
    this.meta.addTags([
      { name: 'og:url', content: '/wiffle-ball/2018' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | 2018 Tournament' },
      { name: 'og:description', content: this.data.description }
    ]);

    const inlineImageRefs: Observable<any>[] = [
      this.storage.ref('/images/pictures/2018/champions.jpg').getDownloadURL(),
    ];

    forkJoin(inlineImageRefs).subscribe(res => {
      this.images = res;
      this.imagesLoaded = true;
    });


    const galleryImageRefs: Observable<any>[] = [
      this.storage.ref('/images/pictures/2018/1.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/2.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/3.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/4.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/5.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/6.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/7.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/8.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/9.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/10.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/11.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/12.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/13.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/14.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/16.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/17.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/18.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/19.jpg').getDownloadURL(),
      this.storage.ref('/images/pictures/2018/20.jpg').getDownloadURL()
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
