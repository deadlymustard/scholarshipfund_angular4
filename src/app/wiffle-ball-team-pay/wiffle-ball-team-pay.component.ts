import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RegisterService} from '../register.service';
import {ActivatedRoute, Router} from '@angular/router';
import {League, Team} from "../team.model";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {TeamService} from "../team.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-wiffle-ball-team-pay',
  templateUrl: './wiffle-ball-team-pay.component.html',
  styleUrls: ['./wiffle-ball-team-pay.component.scss']
})
export class WiffleBallTeamPayComponent implements OnInit {

  resolvedTeam: Team;

  additionalMembers: number;
  baseFee: number;
  transactionFee: number;
  finalFee: string;

  public payPalConfig?: IPayPalConfig;


  constructor(
    private register: RegisterService,
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private change: ChangeDetectorRef,
  ) {
    this.resolvedTeam = this.route.snapshot.data[0];
  }

  ngOnInit() {
    this.calculateTotals();

    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.paypalApiKey,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.finalFee,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.finalFee
                }
              }
            }
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        actions.order.get().then(details => {
          const updatedTeam = Object.assign({}, this.resolvedTeam as Team);
          updatedTeam.paid = true;
          this.teamService.updateTeam(updatedTeam).subscribe(() => {
            this.resolvedTeam.paid = true;
            this.change.detectChanges();
          });
        });
      },
      onClientAuthorization: (data) => {
      },
      onCancel: (data, actions) => {
      },
      onError: err => {
      },
      onClick: () => {
      },
    };

    // this.payPalConfig = {
    //
    //   commit: true,
    //   payment: (data, actions) => {
    //     return actions.payment.create({
    //       payment: { transactions: [{ amount: { total: this.finalFee, currency: 'USD' } }] }
    //     });
    //   }
    // };

  }


  calculateTotals(): void {
    const baseMembers = (this.resolvedTeam.league === League.COMPETITIVE) ? 4 : 5;
    this.additionalMembers = this.resolvedTeam.members.length % baseMembers;
    this.baseFee = 125 + ((this.resolvedTeam.members.length % baseMembers) * 25);
    this.transactionFee = ((this.baseFee) + this.baseFee * (.029) + .30)  * (.029) + .30;
    this.finalFee = (this.baseFee + this.transactionFee).toFixed(2);
  }
}
