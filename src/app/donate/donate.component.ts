import { Component, OnInit } from '@angular/core';
import * as ngCore from '@angular/core';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  public donationAmount: number;

  constructor() { }



  paypalConfig = { env: 'production', client: { sandbox: 'AYd_PiOoMb13TRjG8AQnQFvOLqZIT85fPVxAmLjlBai-N3l9ccju1NgjnMS-KerSm0eMy_YaEd6eK11d', production: 'AfpdbUhd5xPbu2JXznsV5D1vDccd28C77oeC4tgVPsapxkSxIYBSn3lmHcWXcMoqHvfWyPluAQZSTuH4' }, commit: true, payment: (data, actions) => { return actions.payment.create({ payment: { transactions: [{ amount: { total: this.donationAmount, currency: 'USD' } }] } }); }, onAuthorize: (data, actions) => { return actions.payment.execute().then(() => { /*show success*/ }); } };








  ngOnInit() {



  }
}
