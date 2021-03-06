import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data = {
    description: `The Kevin Gilbert Scholarship Fund is a non-profit organization whose goal is
      to help college-bound students continue to make a difference, to live their life
      with unselfish passion, and to achieve their dreams.`,
    image: 'kevin.jpg'
  };

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | About');
    this.meta.addTags([
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | About' },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
