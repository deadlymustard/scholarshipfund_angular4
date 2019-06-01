import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-wiffle-ball-rules',
  templateUrl: './wiffle-ball-rules.component.html',
  styleUrls: ['./wiffle-ball-rules.component.scss']
})
export class WiffleBallRulesComponent implements OnInit {

  data = {
    description: `Read our rules and regulations. The tournament will be held RAIN OR SHINE.
    Competitive has a minimum of 4 team members and Friendly has a minimum of 5 team members.`,
  };

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | Wiffle Ball Rules');
    this.meta.addTags([
      { name: 'og:url', content: '/wiffle-ball/register' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | Wiffle Ball Rules' },
      { name: 'og:description', content: this.data.description }
    ]);

  }

}
