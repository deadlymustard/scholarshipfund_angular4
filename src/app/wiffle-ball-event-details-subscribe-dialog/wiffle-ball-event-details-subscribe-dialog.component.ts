import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-wiffle-ball-event-details-subscribe-dialog',
  templateUrl: './wiffle-ball-event-details-subscribe-dialog.component.html',
  styleUrls: ['./wiffle-ball-event-details-subscribe-dialog.component.scss']
})
export class WiffleBallEventDetailsSubscribeDialogComponent implements OnInit {

  email: string;

  constructor(public dialogRef: MatDialogRef<WiffleBallEventDetailsSubscribeDialogComponent>,
) { }

  ngOnInit() {
  }

  sendEmail = () => {
    //this.mailerService.addToMailingList(this.email);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
