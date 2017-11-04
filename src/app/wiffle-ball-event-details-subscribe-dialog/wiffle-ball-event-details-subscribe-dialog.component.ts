import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MailService } from "../_services/mail.service";


@Component({
  selector: 'app-wiffle-ball-event-details-subscribe-dialog',
  templateUrl: './wiffle-ball-event-details-subscribe-dialog.component.html',
  styleUrls: ['./wiffle-ball-event-details-subscribe-dialog.component.css']
})
export class WiffleBallEventDetailsSubscribeDialogComponent implements OnInit {

  email: string;

  constructor(private mailerService: MailService,    public dialogRef: MatDialogRef<WiffleBallEventDetailsSubscribeDialogComponent>,
) { }

  ngOnInit() {
  }

  sendEmail = () => {
    console.log(this.email);
    this.mailerService.addToMailingList(this.email);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
