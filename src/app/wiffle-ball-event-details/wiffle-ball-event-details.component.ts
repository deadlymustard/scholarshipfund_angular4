import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { WiffleBallEventDetailsSubscribeDialogComponent } from "../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component";


@Component({
  selector: 'app-wiffle-ball-event-details',
  templateUrl: './wiffle-ball-event-details.component.html',
  styleUrls: ['./wiffle-ball-event-details.component.css']
})
export class WiffleBallEventDetailsComponent implements OnInit {

  lat: number = 40.6062029;
  lng: number = -74.7797174;
  zoom: number =  14;

  addedToSubscribtionMessage: string;

  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(WiffleBallEventDetailsSubscribeDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addedToSubscribtionMessage = "You've been added to the mailing list!";
    });
  }

}
