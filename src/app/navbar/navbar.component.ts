import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'ktg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
  }

  collapsed = true;
  mobile = false;
  wiffleBallLinkActive = false;
  bingoNightLinkActive = false;


  ngOnInit() {
    this.breakpointObserver.observe('(max-width: 992px').subscribe(collapsed => {
      this.mobile = collapsed.matches;
    });
    this.router.events.subscribe((event: RouterEvent) => {
      if(event instanceof NavigationEnd) {
        this.wiffleBallLinkActive = event.url.indexOf('wiffle-ball') > -1;
        this.bingoNightLinkActive = event.url.indexOf('bingo-night') > -1;
      }
    })
  }

  routeToWiffleBall() {
    if(!this.wiffleBallLinkActive && !this.mobile) {
      this.router.navigateByUrl('fundraiser/wiffle-ball/details');
    }
  }

  routeToBingoNight() {
    if(!this.bingoNightLinkActive && !this.mobile) {
      this.router.navigateByUrl('fundraiser/bingo-night/details');
    }
  }



}
