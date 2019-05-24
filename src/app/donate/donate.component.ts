import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {Router} from "@angular/router";
import {Subject} from "rxjs/internal/Subject";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit, OnChanges {

  public donationAmount: string;
  public payPalConfig?: IPayPalConfig;

  public donationSubject: Subject<boolean> = new Subject<boolean>();

  @Input()
  public donated: boolean = false;

  constructor(
    public router: Router,
    public change: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.donationSubject.subscribe((value) => {
      this.donated = true;
      this.change.detectChanges();
    });
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.paypalApiKey,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.donationAmount,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.donationAmount
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
        this.donationSubject.next(true);
      }
    };


  }
}
