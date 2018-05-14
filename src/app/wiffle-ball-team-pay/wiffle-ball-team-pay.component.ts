import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';
import {register} from 'ts-node/dist';


@Component({
  selector: 'app-wiffle-ball-team-pay',
  templateUrl: './wiffle-ball-team-pay.component.html',
  styleUrls: ['./wiffle-ball-team-pay.component.css']
})
export class WiffleBallTeamPayComponent implements OnInit {

  memberTotal: number;
  checkTotal: number;
  memberCount: number;
  transactionFee: number;
  finalTotal: string;
  paypalTotal: string;
  routeHash: string;
  paid: boolean;
  type: string;

  paypalConfig = {
    env: 'production',
    client: {
      sandbox: 'AYd_PiOoMb13TRjG8AQnQFvOLqZIT85fPVxAmLjlBai-N3l9ccju1NgjnMS-KerSm0eMy_YaEd6eK11d',
      production: 'AfpdbUhd5xPbu2JXznsV5D1vDccd28C77oeC4tgVPsapxkSxIYBSn3lmHcWXcMoqHvfWyPluAQZSTuH4'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: { transactions: [{ amount: { total: this.paypalTotal, currency: 'USD' } }] }
      });
    },
    onAuthorize: (data, actions) => actions.payment.execute().then(() => {
      this.register.teamPay(this.routeHash).subscribe(paydata => {
        this.paid = true;
      });
    })
  };


  constructor(private register: RegisterService, private router: Router) {
    this.paid = false;
  }

  ngOnInit() {

    const re = /\/fundraiser\/wiffle-ball\/register\/team\/(.*)/;

    this.routeHash = re.exec(this.router.url)[1];
    console.log(this.routeHash);

    this.register.getTeamConfirmation(this.routeHash).subscribe(data => {
      console.log(data);
      this.type = data.league;
      this.calculateTotals(data);
      this.paid = data.paid;
    });

  }


  calculateTotals(data: any) {
    if(data.league === "competitive") {
      this.memberCount = data.members.length - 4;
    } else {
      this.memberCount = data.members.length - 5;
    }
    this.memberTotal = this.memberCount * 25;
    this.transactionFee = ((100 + this.memberTotal) * .029 + .3);
    this.checkTotal = 100 + this.memberTotal;

    this.finalTotal = (100 + this.memberTotal).toFixed(2);
    this.paypalTotal = (100 + this.memberTotal + this.transactionFee).toFixed(2);
  }

}
