import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { WiffleBallEventDetailsSubscribeDialogComponent } from "../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component";

@Component({
  selector: 'app-wiffle-ball-register',
  templateUrl: './wiffle-ball-register.component.html',
  styleUrls: ['./wiffle-ball-register.component.css']
})
export class WiffleBallRegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

    openDialog(): void {
    let dialogRef = this.dialog.open(WiffleBallEventDetailsSubscribeDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
  }

}
