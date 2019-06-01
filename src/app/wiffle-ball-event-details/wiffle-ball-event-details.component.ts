import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { WiffleBallEventDetailsSubscribeDialogComponent } from "../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-wiffle-ball-event-details',
  templateUrl: './wiffle-ball-event-details.component.html',
  styleUrls: ['./wiffle-ball-event-details.component.scss']
})
export class WiffleBallEventDetailsComponent implements OnInit {

  lat: number = 40.6062029;
  lng: number = -74.7797174;
  zoom: number =  14;

  addedToSubscribtionMessage: string;

  data = {
    description: `Join us in memory of Kevin Gilbert: 3rd Annual Kevin Gilbert Wiffle Ball 
      Tournament to benefit the Kevin Gilbert Scholarship Fund`,
  };

  constructor(
    public dialog: MatDialog,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | Wiffle Ball Details');
    this.meta.addTags([
      { name: 'og:url', content: '/wiffle-ball/details' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | Wiffle Ball Details' },
      { name: 'og:description', content: this.data.description }
    ]);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(WiffleBallEventDetailsSubscribeDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addedToSubscribtionMessage = "You've been added to the mailing list!";
    });
  }

}
