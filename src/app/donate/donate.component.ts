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
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit, OnChanges {

  public donationAmount: string;
  public payPalConfig?: any;

  public donationSubject: Subject<boolean> = new Subject<boolean>();

  data = {
    description: `Donate to help support the Kevin Gilbert Scholarship Fund.
      All proceeds will go to the Kevin Gilbert Scholarship Foundation.`,
  };


  @Input()
  public donated: boolean = false;

  constructor(
    public router: Router,
    public change: ChangeDetectorRef,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.title.setTitle('Kevin T. Gilbert Scholarship Fund | Donate');
    this.meta.addTags([
      { name: 'og:url', content: '/donate' },
      { name: 'og:title', content: 'Kevin T. Gilbert Scholarship Fund | Donate' },
      { name: 'og:description', content: this.data.description }
    ]);
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
