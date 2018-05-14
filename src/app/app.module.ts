import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import * as ngCore from '@angular/core';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { WiffleBallComponent } from './wiffle-ball/wiffle-ball.component';
import { BingoNightComponent } from './bingo-night/bingo-night.component';
import { DonateComponent } from './donate/donate.component';
import { AppRoutingModule } from "./_modules/app-routing.module";
import { WiffleBallEventDetailsComponent } from './wiffle-ball-event-details/wiffle-ball-event-details.component';
import { WiffleBallRulesComponent } from './wiffle-ball-rules/wiffle-ball-rules.component';
import { WiffleBallRegisterComponent } from './wiffle-ball-register/wiffle-ball-register.component';
import { WiffleBallPastTournamentComponent } from './wiffle-ball-past-tournament/wiffle-ball-past-tournament.component';
import { BingoNightEventDetailsComponent } from './bingo-night-event-details/bingo-night-event-details.component';
import { BingoNightRegisterComponent } from './bingo-night-register/bingo-night-register.component';
import { WiffleBallEventDetailsSubscribeDialogComponent } from './wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component';
import { MailService } from "./_services/mail.service";
import { WiffleBallRegisterFormComponent } from './wiffle-ball-register-form/wiffle-ball-register-form.component';
import {RegisterService} from './register.service';
import {HttpClientModule} from '@angular/common/http';
import { WiffleBallTeamPayComponent } from './wiffle-ball-team-pay/wiffle-ball-team-pay.component';

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
    WiffleBallPastTournamentComponent,
    BingoNightEventDetailsComponent,
    BingoNightRegisterComponent,
    WiffleBallEventDetailsSubscribeDialogComponent,
    WiffleBallRegisterFormComponent,
    WiffleBallTeamPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    FormsModule,
    window['paypal'].Button.driver('angular2', ngCore),


    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfAdmQaDTEfg5S3wBvhLiSmt6AbbvBaL8'
    }),
    MatDialogModule,
    HttpModule

  ],
  entryComponents: [ WiffleBallEventDetailsSubscribeDialogComponent ],
  providers: [RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
