import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {NgxGalleryModule} from 'ngx-gallery';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {WiffleBallComponent} from './wiffle-ball/wiffle-ball.component';
import {BingoNightComponent} from './bingo-night/bingo-night.component';
import {DonateComponent} from './donate/donate.component';
import {AppRoutingModule} from "./app-routing.module";
import {WiffleBallEventDetailsComponent} from './wiffle-ball-event-details/wiffle-ball-event-details.component';
import {WiffleBallRulesComponent} from './wiffle-ball-rules/wiffle-ball-rules.component';
import {WiffleBallRegisterComponent} from './wiffle-ball-register/wiffle-ball-register.component';
import {BingoNightEventDetailsComponent} from './bingo-night-event-details/bingo-night-event-details.component';
import {WiffleBallEventDetailsSubscribeDialogComponent} from './wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component';
import {WiffleBallRegisterFormComponent} from './wiffle-ball-register-form/wiffle-ball-register-form.component';
import {RegisterService} from './register.service';
import {HttpClientModule} from '@angular/common/http';
import {WiffleBallTeamPayComponent} from './wiffle-ball-team-pay/wiffle-ball-team-pay.component';
import {MatDialogModule, MatFormFieldModule} from "@angular/material";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCertificate, faUserCircle, faStar, faUserPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {NgxMaskModule} from "ngx-mask";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {NgxPayPalModule} from "ngx-paypal";
import {WiffleBall2017TournamentComponent} from "./wiffle-ball-2017-tournament/wiffle-ball-2017-tournament.component";
import {WiffleBall2018TournamentComponent} from "./wiffle-ball-2018-tournament/wiffle-ball-2018-tournament.component";
import {AngularFireAuthModule} from "@angular/fire/auth";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WiffleBallComponent,
    BingoNightComponent,
    DonateComponent,
    WiffleBallEventDetailsComponent,
    WiffleBallRulesComponent,
    WiffleBallRegisterComponent,
    WiffleBall2017TournamentComponent,
    WiffleBall2018TournamentComponent,
    BingoNightEventDetailsComponent,
    WiffleBallEventDetailsSubscribeDialogComponent,
    WiffleBallRegisterFormComponent,
    WiffleBallTeamPayComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfAdmQaDTEfg5S3wBvhLiSmt6AbbvBaL8'
    }),
    NgxPayPalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  entryComponents: [ WiffleBallEventDetailsSubscribeDialogComponent ],
  providers: [
    RegisterService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(far, fas);
    library.add(faCertificate);
    library.add(faFacebookSquare);
    library.add(faUserCircle);
    library.add(faUserPlus);
    library.add(faStar);
    library.add(faTrashAlt);
  }
}
