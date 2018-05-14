import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WiffleBallEventDetailsSubscribeDialogComponent } from '../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component';

@Component({
  selector: 'app-wiffle-ball-register',
  templateUrl: './wiffle-ball-register.component.html',
  styleUrls: ['./wiffle-ball-register.component.css']
})
export class WiffleBallRegisterComponent implements OnInit {

  formType: string;

  constructor(public dialog: MatDialog) {
    this.formType = 'Select a league';
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(WiffleBallEventDetailsSubscribeDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    console.log(this.formType);
  }

}
