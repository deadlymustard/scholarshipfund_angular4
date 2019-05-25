import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {WiffleBallEventDetailsComponent} from "./wiffle-ball-event-details/wiffle-ball-event-details.component";
import {WiffleBallRulesComponent} from "./wiffle-ball-rules/wiffle-ball-rules.component";
import {WiffleBallRegisterComponent} from "./wiffle-ball-register/wiffle-ball-register.component";
import {WiffleBallTeamPayComponent} from "./wiffle-ball-team-pay/wiffle-ball-team-pay.component";
import {BingoNightEventDetailsComponent} from "./bingo-night-event-details/bingo-night-event-details.component";
import {DonateComponent} from "./donate/donate.component";
import {NgModule} from "@angular/core";
import {TeamResolver} from "./team.resolver";
import {RegisterResolver} from "./register.resolver";
import {WiffleBall2017TournamentComponent} from "./wiffle-ball-2017-tournament/wiffle-ball-2017-tournament.component";
import {WiffleBall2018TournamentComponent} from "./wiffle-ball-2018-tournament/wiffle-ball-2018-tournament.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'fundraiser/wiffle-ball', redirectTo: 'fundraiser/wiffle-ball/details', pathMatch: 'full' },
  { path: 'fundraiser/wiffle-ball/details', component: WiffleBallEventDetailsComponent},
  { path: 'fundraiser/wiffle-ball/rules', component: WiffleBallRulesComponent},
  {
    path: 'fundraiser/wiffle-ball/register',
    component: WiffleBallRegisterComponent,
    resolve: [RegisterResolver]
  },
  {
    path: 'fundraiser/wiffle-ball/team/:id',
    component: WiffleBallTeamPayComponent,
    resolve: [TeamResolver]
  },
  { path: 'fundraiser/wiffle-ball/2017', component: WiffleBall2017TournamentComponent},
  { path: 'fundraiser/wiffle-ball/2018', component: WiffleBall2018TournamentComponent},
  { path: 'fundraiser/bingo-night', redirectTo: 'fundraiser/bingo-night/details', pathMatch: 'full' },
  { path: 'fundraiser/bingo-night/details', component: BingoNightEventDetailsComponent},
  { path: 'donate', component: DonateComponent },
  { path: '**', redirectTo: '/about'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
